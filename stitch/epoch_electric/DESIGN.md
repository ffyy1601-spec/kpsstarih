# Design System Strategy: The Kinetic Scholar

## 1. Overview & Creative North Star
**Creative North Star: "Atmospheric Momentum"**

This design system is engineered to transform the academic rigor of KPSS History preparation into a high-energy, editorial experience. We are moving away from the "static textbook" aesthetic and toward a "dynamic performance dashboard." By leveraging intentional asymmetry, oversized typography, and deep tonal layering, we create a sense of forward motion. 

The system rejects the "boxed-in" feeling of traditional EdTech. Instead, we use expansive white space (on a tinted `surface` base) and overlapping "glass" elements to create a sense of depth and sophistication. This is not just a study tool; it is a premium cognitive environment that signals importance and authority.

---

## 2. Colors
Our palette is a high-contrast interplay between deep "Electric Purple" and "Cyber Blue," punctuated by "Amber" signals. This creates a rhythmic visual pace that keeps the user alert and engaged.

### Color Strategy
*   **Primary Engine (`#702ae1`):** Use for core brand moments and primary actions. It represents the "energy" of learning.
*   **Secondary Stability (`#00628c`):** Used for navigation and secondary information to provide a professional, grounded contrast to the purple.
*   **Tertiary Spark (`#815100` / `#f8a010`):** Reserved exclusively for milestones, achievements, and "lightbulb" moments (hints).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be defined solely through background color shifts. 
*   *Example:* A `surface_container_low` (`#eef0ff`) card should sit on a `surface` (`#f6f6ff`) background. The distinction is felt, not seen.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of layers. Use the `surface_container` tiers to create "nested" importance:
1.  **Base:** `surface` (`#f6f6ff`)
2.  **Sectioning:** `surface_container_low` (`#eef0ff`)
3.  **Content Cards:** `surface_container_lowest` (`#ffffff`) for maximum "pop" and legibility.
4.  **Interaction Layers:** `surface_container_high` (`#d9e2ff`) for inactive or recessed elements.

### The "Glass & Gradient" Rule
Standard flat colors lack "soul." Main CTAs and Hero sections must use a subtle linear gradient:
*   **Primary CTA:** From `primary` (`#702ae1`) to `primary_container` (`#b28cff`) at a 135-degree angle.
*   **Glassmorphism:** For floating headers or navigation bars, use `surface` at 80% opacity with a `24px` backdrop blur to allow the energetic background colors to bleed through softly.

---

## 3. Typography
We use **Manrope** as our primary voice—a font that balances geometric modernism with functional readability. **Plus Jakarta Sans** is utilized for technical labels to provide a refined, slightly more condensed "data" feel.

*   **Display (Lg/Md/Sm):** Set in Manrope Bold. Use `display-lg` (3.5rem) for major chapter starts or "Exam Countdown" screens. This creates an editorial "magazine" feel.
*   **Headlines & Titles:** Manrope SemiBold. These should always use `on_surface` (`#272e42`) to maintain high authority.
*   **Body:** Manrope Medium. Use `body-lg` for study content to prevent eye strain.
*   **Labels:** Plus Jakarta Sans Bold. Used for metadata (e.g., "Difficulty: Hard" or "Topic: Ottoman Empire") to create a clear visual distinction from narrative text.

---

## 4. Elevation & Depth
In this design system, depth is a product of **Tonal Layering**, not structural shadows.

### The Layering Principle
Instead of a shadow, place a `surface_container_lowest` card on top of a `surface_container_low` background. The 2% shift in brightness provides a cleaner, more "high-end" lift than a traditional drop shadow.

### Ambient Shadows
Where floating elements (like FABs or Modals) are required:
*   **Shadow Color:** Must be a tinted version of `on_surface` (e.g., `#272e42` at 6% opacity).
*   **Properties:** Extra-diffused (Blur: 32px, Spread: -4px). This mimics natural, ambient light rather than a harsh digital offset.

### The "Ghost Border" Fallback
If a border is required for accessibility (e.g., input fields), use a "Ghost Border":
*   **Token:** `outline_variant` (`#a5adc6`) at **15% opacity**. 
*   **Rule:** Never use 100% opaque borders. They clutter the visual field and diminish the "premium" feel.

---

## 5. Components

### Buttons (The "Power" Component)
*   **Primary:** Gradient of `primary` to `primary_container`. Corner radius: `md` (0.75rem). Text: Manrope Bold.
*   **Secondary:** No background. `outline` token at 20% opacity. Text color: `primary`.
*   **Tertiary/Ghost:** No background or border. Text color: `secondary`.

### Cards & Lists (The "Data" Component)
*   **Rule:** Forbid all divider lines.
*   **Separation:** Use `16px` or `24px` of vertical white space or shift the background from `surface_container_low` to `surface_container_lowest`.
*   **Interaction:** On hover/tap, a card should shift from `surface_container_lowest` to `primary_container` at 10% opacity.

### Performance Chips
*   **Style:** `ROUND_FULL` (9999px).
*   **Coloring:** Use `secondary_container` for neutral tags and `tertiary_container` for high-priority or "correct answer" highlights.

### Input Fields
*   **Base:** `surface_container_low`.
*   **Active State:** "Ghost Border" (15% `primary`) with a 2px bottom-heavy "glow" using the `primary` token.
*   **Typography:** Labels must use `label-md` (Plus Jakarta Sans) for a technical appearance.

### EdTech Specific: "The Streak Gauge"
A custom progress component using a thick (8px) stroke. The background path is `surface_container_high`, and the active path is a gradient of `tertiary` to `tertiary_container`. This provides the "pop" required for gamification.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts (e.g., a large `display-lg` header offset to the left with body text centered).
*   **Do** use white space as a functional tool to separate complex historical dates and facts.
*   **Do** use `ROUND_TWELVE` (0.75rem) for all main containers to maintain a modern, approachable feel.

### Don't
*   **Don't** use pure black (`#000000`) for text. Always use `on_surface` (`#272e42`) to maintain tonal harmony.
*   **Don't** use standard "Material Blue." Stick to our `secondary` Cyber Blue (`#00628c`).
*   **Don't** ever use a 1px solid border to separate list items. It breaks the "Atmospheric Momentum."
*   **Don't** use muted or "dusty" colors. If a color feels dull, increase the saturation to align with the "high-energy" requirement.