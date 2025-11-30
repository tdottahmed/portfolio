# Migration Guide: Animation Libraries

## Quick Comparison

| Library           | Bundle Size | Performance | Ease of Use | Best For                |
| ----------------- | ----------- | ----------- | ----------- | ----------------------- |
| **Framer Motion** | ~50KB       | Good        | ⭐⭐⭐⭐⭐  | Complex animations      |
| **Motion One**    | ~8KB        | Excellent   | ⭐⭐⭐⭐    | Balanced performance    |
| **CSS-First**     | 0KB         | ⭐⭐⭐⭐⭐  | ⭐⭐⭐      | Maximum performance     |
| **GSAP**          | ~45KB       | ⭐⭐⭐⭐⭐  | ⭐⭐⭐      | Professional animations |

## Option 1: Migrate to Motion One (Recommended)

### Installation

```bash
npm install motion
```

### Benefits

-   84% smaller bundle (50KB → 8KB)
-   Better mobile performance
-   Similar API to Framer Motion
-   Easy migration

### Migration Steps

1. **Replace imports:**

```jsx
// Before
import { motion, useReducedMotion } from "framer-motion";

// After
import { animate, stagger, inView } from "motion";
```

2. **Replace motion components:**

```jsx
// Before
<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
>
    Content
</motion.div>

// After
<div
    ref={elementRef}
    className="opacity-0 translate-y-5"
>
    Content
</div>

// In useEffect:
useEffect(() => {
    animate(elementRef.current,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5 }
    );
}, []);
```

3. **Stagger animations:**

```jsx
// Before
<motion.div variants={containerVariants}>
    {items.map((item) => (
        <motion.div variants={itemVariants}>...</motion.div>
    ))}
</motion.div>;

// After
useEffect(() => {
    const elements = containerRef.current.querySelectorAll("[data-animate]");
    animate(
        elements,
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.05) }
    );
}, []);
```

---

## Option 2: CSS-First Approach (Best Performance)

### Benefits

-   Zero JavaScript overhead
-   GPU-accelerated
-   Best mobile performance
-   No bundle size impact

### Implementation

1. **Use Tailwind CSS transitions:**

```jsx
<div className="transition-all duration-500 opacity-0 translate-y-4">
    Content
</div>
```

2. **Add Intersection Observer:**

```jsx
const [isVisible, setIsVisible] = useState(false);
const ref = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
}, []);

return (
    <div
        ref={ref}
        className={`transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
    >
        Content
    </div>
);
```

3. **Stagger with CSS delays:**

```jsx
{
    items.map((item, index) => (
        <div
            className={`transition-all duration-500 delay-[${index * 100}ms] ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            {item}
        </div>
    ));
}
```

---

## Option 3: Hybrid Approach (Recommended)

Use **CSS for simple animations** and **Motion One for complex ones**:

```jsx
// Simple: Use CSS
<div className="transition-all duration-300 hover:scale-105">Simple hover</div>;

// Complex: Use Motion One
useEffect(() => {
    animate(
        elementRef.current,
        {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
        },
        {
            duration: 2,
            repeat: Infinity,
        }
    );
}, []);
```

---

## Performance Tips

1. **Use `will-change` sparingly:**

```css
.animated {
    will-change: transform, opacity;
}
```

2. **Prefer `transform` and `opacity`:**

    - These are GPU-accelerated
    - Avoid animating `width`, `height`, `top`, `left`

3. **Respect `prefers-reduced-motion`:**

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

4. **Lazy load animations:**
    - Only animate elements in viewport
    - Use Intersection Observer

---

## Recommendation

For your portfolio site, I recommend:

1. **Start with Motion One** - Easy migration, great performance
2. **Gradually move to CSS** - For critical, simple animations
3. **Keep Framer Motion** - Only if you need complex gestures/interactions

This gives you:

-   ✅ 84% smaller bundle
-   ✅ Better mobile performance
-   ✅ Smooth migration path
-   ✅ Best of both worlds
