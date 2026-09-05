# Design System Override — EasyGluco × Sinacare

## Source of truth (brand)
Keep **Sinacare occupation tokens** — do NOT replace with ui-ux-pro-max cyan defaults.

| Token | Hex | Role |
|-------|-----|------|
| brand-primary | `#007dc5` | CTA, links, focus |
| brand-secondary | `#00c5ab` | accents, selection |
| brand-accent | `#719e26` | success / health |
| brand-fg | `#0b3a57` | text |
| brand-bg | `#f6fbfd` | soft surface |
| brand-bg-alt | `#eaf5f7` | section-alt |
| brand-border | `#c7e1ef` | borders |
| brand-risk | `#dc2626` | pain / alert |

Typography: **Vazirmatn** (RTL Persian) — not Figtree.

## Applied from ui-ux-pro-max
- Pattern: Product Demo + Features + trust metrics after hero
- Style: Accessible & Ethical (contrast, focus, reduced motion)
- Anti-patterns: no neon, no purple AI gradients, no decorative infinite motion

## Applied from banner-design
- Hero art direction: **Photo-Based + Minimalist**
- Full-bleed product plane; critical copy in central safe zone
- One primary CTA; secondary outline only
- No floating chips/badges overlaid on hero media

## Motion
- Reveal on scroll only; respect `prefers-reduced-motion`
- Micro-interactions: 150–300ms, ease-out
- No infinite float/pulse on decorative UI
