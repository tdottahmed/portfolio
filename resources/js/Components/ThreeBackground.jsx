import { useEffect, useRef } from "react";
import * as THREE from "three";

// ─── Vertex shader ────────────────────────────────────────────────────────────
// Bypasses Three.js camera/projection — outputs clip-space directly.
const VERT = /* glsl */`
varying vec2 vUv;
void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

// ─── Fragment shader ──────────────────────────────────────────────────────────
const FRAG = /* glsl */`
precision mediump float;

uniform float uTime;
uniform float uDark;   // 1.0 = dark mode, 0.0 = light
uniform vec2  uMouse;  // normalised –0.5 … 0.5

varying vec2 vUv;

// ── 2D Simplex noise (Ashima Arts / Ian McEwan) ──────────────────────────────
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
    const vec4 C = vec4( 0.211324865405187,  0.366025403784439,
                        -0.577350269189626,  0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = step(x0.yx, x0.xy);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                           + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m * m * m * m;
    vec3 x  = 2.0 * fract(p * C.www) - 1.0;
    vec3 h  = abs(x) - 0.5;
    vec3 a0 = x - floor(x + 0.5);
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x   + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

// ── fBm — 4 octaves ──────────────────────────────────────────────────────────
float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) {
        v += a * snoise(p);
        p  = p * 2.03;
        a *= 0.5;
    }
    return v;
}

// ── Domain-warped fBm ─────────────────────────────────────────────────────────
// q warps the sampling point; result is organic, flowing, never repetitive.
float flow(vec2 p, float t) {
    vec2 q = vec2(
        fbm(p + vec2(0.00, 0.00) + t * 0.07),
        fbm(p + vec2(5.20, 1.30) + t * 0.06)
    );
    return fbm(p + 0.6 * q + t * 0.04);
}

void main() {
    vec2 p = vUv;

    // Mouse gently shifts the sample point
    p += uMouse * 0.05;

    float n = flow(p * 3.0, uTime);

    // n ≈ [-0.45, 0.45] → remap to [0, 1]
    n = n * 0.5 + 0.5;

    // Sharpen: only the upper portion of the range becomes visible,
    // leaving most of the surface clean/empty.
    float shaped = smoothstep(0.38, 0.72, n);

    // Indigo tint — dark mode stronger, light mode barely there
    vec3  tint  = mix(vec3(0.10, 0.08, 0.28), vec3(0.26, 0.22, 0.58), n);
    float alpha = shaped * mix(0.055, 0.20, uDark);

    gl_FragColor = vec4(tint, alpha);
}
`;

// ─── Component ────────────────────────────────────────────────────────────────
export default function ThreeBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const isDark = () => document.documentElement.classList.contains("dark");

        // ── Renderer ──────────────────────────────────────────────────────────
        // Pixel ratio deliberately kept at 1 — the noise is blurry by nature,
        // no benefit from 2×; saves ~75 % fill rate on retina screens.
        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha:           true,
            antialias:       false,
            powerPreference: "high-performance",
        });
        renderer.setPixelRatio(1);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        // ── Scene + dummy camera ───────────────────────────────────────────────
        // The vertex shader writes clip-space directly, so the camera is only
        // a required argument for renderer.render — it isn't actually used.
        const scene  = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        // ── Fullscreen quad + shader ───────────────────────────────────────────
        const geo      = new THREE.PlaneGeometry(2, 2);
        const uniforms = {
            uTime:  { value: 0.0 },
            uDark:  { value: isDark() ? 1.0 : 0.0 },
            uMouse: { value: new THREE.Vector2(0, 0) },
        };
        const mat = new THREE.ShaderMaterial({
            vertexShader:   VERT,
            fragmentShader: FRAG,
            uniforms,
            transparent: true,
            depthTest:   false,
            depthWrite:  false,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.frustumCulled = false;
        scene.add(mesh);

        // ── Mouse ─────────────────────────────────────────────────────────────
        const onMouseMove = (e) => {
            uniforms.uMouse.value.set(
                e.clientX / window.innerWidth  - 0.5,
                e.clientY / window.innerHeight - 0.5
            );
        };
        window.addEventListener("mousemove", onMouseMove, { passive: true });

        // ── Theme ─────────────────────────────────────────────────────────────
        const observer = new MutationObserver(() => {
            uniforms.uDark.value = isDark() ? 1.0 : 0.0;
        });
        observer.observe(document.documentElement, {
            attributes: true, attributeFilter: ["class"],
        });

        // ── Resize ────────────────────────────────────────────────────────────
        const onResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", onResize);

        // ── Render loop ───────────────────────────────────────────────────────
        let raf;
        const animate = (now) => {
            raf = requestAnimationFrame(animate);
            uniforms.uTime.value = now * 0.001;
            renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(animate);

        // ── Cleanup ───────────────────────────────────────────────────────────
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize",    onResize);
            observer.disconnect();
            geo.dispose();
            mat.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <>
            {/* Base colour layer — CSS transition handles dark/light switching */}
            <div
                className="fixed inset-0 bg-background-primary transition-colors duration-500 pointer-events-none"
                style={{ zIndex: -11 }}
            />
            {/* Shader canvas — transparent overlay on top of the base colour */}
            <canvas
                ref={canvasRef}
                style={{
                    position:      "fixed",
                    inset:         0,
                    width:         "100%",
                    height:        "100%",
                    zIndex:        -10,
                    pointerEvents: "none",
                }}
            />
        </>
    );
}
