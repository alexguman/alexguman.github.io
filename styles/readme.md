/* ==========================================================================
   README: HOW TO USE THIS CSS DESIGN SYSTEM
   ==========================================================================

   This stylesheet is organized around DESIGN TOKENS (variables defined in :root).
   All major style decisions (colors, spacing, typography, layout, shadows, etc.)
   are centralized. To update the look of the site, edit tokens, not selectors.

   --------------------------------------------------------------------------
   1. COLORS
   --------------------------------------------------------------------------
   Core page layers:
     --color-bg-body ........ main page background
     --color-bg-header ...... header background tint (full-bleed bar)
     --color-bg-footer ...... footer background tint
     --color-surface-1 ...... primary card/section background
     --color-surface-2 ...... alternate card/section background (zebra/variety)

   Text & borders:
     --color-text ........... default/heading text
     --color-text-2 ......... body text / secondary
     --color-text-3 ......... muted text (metadata, footer)
     --color-border ......... subtle dividers, card borders
     (optional) --color-text-4 .... extra-muted text, if needed

   Accents & links:
     --color-accent ......... brand highlight (home link, primary actions)
     --color-accent-2 ....... supporting accent (sparingly)
     --color-accent-muted ... soft accent (nav underlines/hover bars)
     --color-link ........... base link color (often = --color-text)
     --color-link-hover ..... link hover color
     --gradient-accent ...... gradient for buttons/accents (optional)

   - To rebrand: change --color-accent and/or the bg/text tokens above.
   - Dark mode is handled by overriding tokens in @media (prefers-color-scheme: dark).

   --------------------------------------------------------------------------
   2. SPACING SCALE
   --------------------------------------------------------------------------
   - Based on 4px increments (rem units).
   - Example: var(--space-8) = 2rem = 32px.
   - Use for margins, paddings, and gaps to maintain consistent rhythm.

   --------------------------------------------------------------------------
   3. TYPOGRAPHY
   --------------------------------------------------------------------------
   - Font family token: --font-sans
   - Sizes: --text-xs, --text-sm, --text-base, --text-md, --text-lg, --text-xl
   - Line-heights: --lh-tight (headings), --lh-body (paragraphs), --lh-loose
   - Weights: --weight-regular, --weight-medium, --weight-semibold, --weight-bold
   - To scale site text: adjust the size tokens (or root font-size).

   --------------------------------------------------------------------------
   4. LAYOUT CONSTRAINTS
   --------------------------------------------------------------------------
   - --max-width ............ max site width for centered content
   - --container-pad-x ...... horizontal page padding
   - --container-pad-y ...... vertical page padding

   Notes:
   - Full-bleed header: header uses a full-width background; inner <nav> is constrained
     back to --max-width (see header > nav rule) to align with page content.

   --------------------------------------------------------------------------
   5. RADIUS & SHADOWS
   --------------------------------------------------------------------------
   - --radius-sm/md/lg/pill .. standard corner radii
   - --shadow-1, --shadow-2 ... elevation levels for cards, buttons, popovers

   --------------------------------------------------------------------------
   6. MOTION / EASING
   --------------------------------------------------------------------------
   - --ease-out ............ standard cubic-bezier easing
   - --dur-1, --dur-2 ...... duration tiers (e.g., 150ms / 300ms)
   - Respect reduced-motion preference automatically via media query.

   --------------------------------------------------------------------------
   7. UTILITIES
   --------------------------------------------------------------------------
   - .u-surface ............ card-like background with border + shadow
   - .u-muted .............. muted text tone
   - .u-maxw-ch ............ limit width to ~70 characters
   - .u-center ............. center block within its container

   --------------------------------------------------------------------------
   8. COMPONENTS
   --------------------------------------------------------------------------
   Reusable, styled building blocks:
   - .button ............... starter button style (accent color, pill radius)
   - .rainbow-hover ........ per-letter hover effect (letters wrapped by JS)
   - (add others here as the site grows)

   Keep component styles together and rely on tokens (no hardcoded values).

   --------------------------------------------------------------------------
   9. HOW TO EXTEND
   --------------------------------------------------------------------------
   - Add new tokens in :root (e.g., --color-success) before creating selectors.
   - Use tokens inside components/utilities instead of hardcoding colors/spacing.
   - For alternating section looks, prefer --color-surface-1/2 and utilities.

   --------------------------------------------------------------------------
   10. THEME SWITCHING
   --------------------------------------------------------------------------
   - Dark mode: override tokens in @media (prefers-color-scheme: dark).
   - Additional themes: override tokens via a class on <body>, e.g.:
       body.theme-alt { --color-accent: #ff4081; }

   --------------------------------------------------------------------------
   11. PRINT SUPPORT
   --------------------------------------------------------------------------
   - Basic print styles included (removes shadows, enforces contrast).
   - Extend if the site becomes content-heavy or needs print-friendly layouts.

   --------------------------------------------------------------------------
   12. FILE STRUCTURE INSIDE THIS SHEET (for sanity)
   --------------------------------------------------------------------------
   Recommended order of sections below this README:
     1) TOKENS (:root + dark-mode overrides)
     2) BASE (resets & element defaults: html, body, p, a, ul/ol, media)
     3) LAYOUT (header, nav, main, footer; full-bleed header + nav container)
     4) COMPONENTS (.button, .u-surface, .rainbow-hover, etc.)
     5) UTILITIES (.u-*, tiny single-purpose helpers)
     6) PRINT (last)

   This keeps structure predictable for future edits and automation.
   ========================================================================== */
