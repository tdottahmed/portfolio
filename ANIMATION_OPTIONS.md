# Animation Library Options for Better Mobile Performance

## Current Status

-   **Current Library**: Framer Motion (~50KB gzipped)
-   **Usage**: Used across landing page components
-   **Issue**: Heavy on mobile devices and slow networks

## Recommended Alternatives

### 1. **Motion One** ⭐ RECOMMENDED

-   **Bundle Size**: ~8KB gzipped (84% smaller!)
-   **Performance**: Excellent, uses Web Animations API
-   **API**: Similar to Framer Motion (easy migration)
-   **Best For**: Drop-in replacement with better performance

**Pros:**

-   Much smaller bundle size
-   Better performance on mobile
-   Similar API to Framer Motion
-   Built-in support for reduced motion
-   Modern Web Animations API

**Cons:**

-   Less feature-rich than Framer Motion
-   Newer library (less community resources)

---

### 2. **CSS-First Approach** ⭐ BEST PERFORMANCE

-   **Bundle Size**: 0KB (native CSS)
-   **Performance**: Excellent (GPU-accelerated)
-   **Best For**: Maximum performance, simple animations

**Pros:**

-   Zero JavaScript overhead
-   GPU-accelerated by browser
-   Best mobile performance
-   Works offline
-   No bundle size impact

**Cons:**

-   Less dynamic control
-   Requires Intersection Observer for scroll animations
-   More manual setup

---

### 3. **GSAP (GreenSock)**

-   **Bundle Size**: ~45KB gzipped (core)
-   **Performance**: Industry-leading
-   **Best For**: Complex, professional animations

**Pros:**

-   Best performance for complex animations
-   Extensive plugin ecosystem
-   Excellent documentation
-   Industry standard

**Cons:**

-   Larger bundle size
-   Commercial license for some plugins
-   Steeper learning curve

---

### 4. **Anime.js**

-   **Bundle Size**: ~15KB gzipped
-   **Performance**: Good
-   **Best For**: Simple to medium complexity animations

**Pros:**

-   Lightweight
-   Simple API
-   Good performance
-   Timeline support

**Cons:**

-   Less React-friendly
-   Requires more manual DOM manipulation

---

## Recommendation

### Option A: Motion One (Balanced)

-   Easy migration from Framer Motion
-   84% smaller bundle
-   Great mobile performance
-   Similar developer experience

### Option B: CSS-First (Maximum Performance)

-   Best for mobile
-   Zero bundle size
-   Requires refactoring
-   More manual work

## Migration Path

1. **Start with Motion One** for easy migration
2. **Gradually move to CSS** for critical animations
3. **Keep Framer Motion** only for complex interactions
