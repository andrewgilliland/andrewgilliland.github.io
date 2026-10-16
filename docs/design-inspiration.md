# Design inspiration: dark-only, bright accents

Research for a visual redesign of andrewgilliland.dev. The content stays the same: home, articles with topics and a table of contents, projects with cards and case studies, about, and resume. The brief is a **dark-only** theme with **bright, saturated accents**, in the spirit of the current site.

**Current baseline** (from this repo): a pure black page, Space Grotesk plus JetBrains Mono (`src/styles/index.css`), and a hard-stop four-colour stripe in pink-300 `#f9a8d4`, emerald-300 `#6ee7b7`, yellow-300 `#fde047` and cyan-300 `#67e8f9` (`src/components/ColorDivider.astro`). Pink-500 `#ec4899` is the primary accent, and the site also uses offset "shadow" cards and topic marquees. These hex values come from `tailwindcss/colors` in the installed Tailwind 3.4 [S1].

## How the sites were checked (2026-10-16)

- I opened each site in a Chromium browser pane at 1280×900 and loaded it twice: once with `prefers-color-scheme: dark` emulated and once with `light`.
  - A site that stayed dark under `light` is marked **dark-only**.
  - A site that went light is marked **follows OS**, meaning it is dark for visitors whose system is set to dark.
- Fonts and colours come from **computed styles** read in the page with a script, plus CSS custom properties defined on `:root`/`html`/`body`. OKLCH values were converted to sRGB hex.
  - "Accent" means the most frequent saturated colours on the page.
  - "Body contrast" is the first long paragraph's text colour against its resolved background, using the WCAG formula [W1].
- Layout notes come from my own screenshots. Everything is a snapshot of one day, and the sites will change.
- I did **not** browse Awwwards, Godly, Land-book or siteinspire. One web search turned up Trigger.dev, which I then verified myself.

---

## Kept sites (13)

| #   | Site                                            | Kind              | Dark?           | Accent(s) observed                 | Best thing to borrow                        |
| --- | ----------------------------------------------- | ----------------- | --------------- | ---------------------------------- | ------------------------------------------- |
| 1   | [Brittany Chiang](https://brittanychiang.com)   | Portfolio         | Dark-only       | teal `#5eead4`                     | Sticky two-column résumé layout             |
| 2   | [Josh W. Comeau](https://www.joshwcomeau.com)   | Blog / courses    | Follows OS      | yellow primary, multicolour code   | Article reading layout with sticky TOC      |
| 3   | [Jhey Tompkins](https://jhey.dev)               | Portfolio         | Follows OS      | coral-red `#ff6467`                | Terminal-ish intro, dot-matrix display type |
| 4   | [Adam Argyle (nerdy.dev)](https://nerdy.dev)    | Blog / microblog  | Follows OS      | periwinkle `#91a7ff`, cyan, violet | Post-type filter with counts                |
| 5   | [Ben Holmes](https://bholmes.dev)               | Portfolio (Astro) | Dark-only       | violet, cyan `#53eafd`             | Playful hero, highlighted headline words    |
| 6   | [Syntax.fm](https://syntax.fm)                  | Dev podcast       | Follows OS      | yellow `#fabf47`, hot pink, lime   | Loud mono "neon" branding, fluid type scale |
| 7   | [Bun](https://bun.com)                          | Dev tool          | Follows OS      | hot pink `#ff2e97` + rainbow code  | Pink keyword highlight, install chip        |
| 8   | [Vercel Geist](https://vercel.com/geist/colors) | Design system     | Follows OS      | 10 hue scales                      | Role-based colour scale architecture        |
| 9   | [Supabase](https://supabase.com)                | Dev tool          | Follows OS      | green `#3ecf8e`                    | Bento feature grid                          |
| 10  | [Astro](https://astro.build)                    | Framework         | Dark-only       | violet glow                        | Radial glow hero, same stack                |
| 11  | [Tailwind CSS](https://tailwindcss.com)         | Framework         | Follows OS      | sky `#74d4ff`, pink `#fb64b6`      | Hairline grid / blueprint framing           |
| 12  | [Trigger.dev](https://trigger.dev)              | Dev tool          | Dark-only       | lime `#a8ff53`, violet, pink       | Lime-on-black primary, code-texture hero    |
| 13  | [Dracula Theme](https://draculatheme.com)       | Theme project     | Dark by default | official 11-colour palette         | Ready-made bright-on-dark token set         |

### 1. Brittany Chiang — https://brittanychiang.com

- **Kind:** Single-page personal portfolio. It is **dark-only**: it stayed dark under light emulation.
- **Seen (computed styles):**
  - Background `#0f172a`, body text `#94a3b8` (6.96:1), and a single accent `#5eead4`. These are the same values as Tailwind v3 slate-900, slate-400 and teal-300 [S1].
  - Font: Inter, loaded via the Next.js font loader (the family name is hashed).
- **Borrow:**
  - Two-column layout. A sticky left column holds the name, role, one-line pitch, in-page nav (About / Experience / Projects) and social icons, while the right column scrolls.
  - Experience entries have a small date gutter on the left, a role and company title, a short description and teal pill tags. The whole row behaves as one hover target.
  - This maps almost one-to-one onto the **resume page** and the **about** section.
- **Caution:**
  - A single cool accent on slate is much calmer than the owner's multicolour identity. Swap teal for the four stripe colours, assigned per section.
  - The layout is very recognisable. Copying it wholesale will read as a template.

### 2. Josh W. Comeau — https://www.joshwcomeau.com

- **Kind:** Blog and course site. It **follows the OS**: light under light emulation, dark under dark, and it has a theme toggle.
- **Seen (dark mode, on `/css/center-a-div/`):**
  - Content background `#0d0f12`, body text `#e3e6e8` (15.31:1).
  - CSS custom properties:
    - `--color-primary: oklch(0.88 0.21 92.28)`, a vivid yellow.
    - `--font-family: "Wotfard"`, `--font-family-mono: "Cartograph CF"` and `--font-family-spicy: "Sriracha"`.
  - Code and illustration accents include `#b88cf2`, `#a3ffea`, `#ffd500` and `#ff38a9`.
- **Borrow:**
  - **Article reading layout:** a text column about 686px wide (measured) with a sticky right-rail "Table of Contents" that highlights the current section.
  - An article header with the category plus "published" and "last updated" dates.
  - A decorative illustrated band behind the title.
  - On the homepage, a sidebar with "browse by category" chips and "popular content". This is a good model for the owner's article list with topics.
- **Caution:**
  - Wotfard and Cartograph CF are not on Fontsource (both npm `@fontsource/*` lookups 404) [F-npm].
  - Much of the charm comes from bespoke interactive widgets and illustrations.
  - The site is not dark-only.

### 3. Jhey Tompkins — https://jhey.dev

- **Kind:** Personal site of a design engineer. It **follows the OS** (white under light emulation).
- **Seen:**
  - Background `#000`, text `#f6f6f6` (19.43:1), and one accent `#ff6467` for links and highlights.
  - CSS variables define `--font-mono: Doto` (a dot-matrix face), `--font-serif: DM Serif Text` and `--font-sans: Inter`.
- **Borrow:**
  - A big headline, a small dotted-mono subtitle line, a faint grid background, and a list of status lines with small icons that reads like terminal output.
  - A single hot accent reserved for links.
  - Doto is on Fontsource [F2], so the look is free to reproduce.
- **Caution:**
  - Doto is a display face and should not be used for paragraphs.
  - WCAG's own guidance advises against red on black (see accessibility notes) [W1]. Lean coral or pink rather than pure red.

### 4. Adam Argyle (nerdy.dev) — https://nerdy.dev

- **Kind:** Personal blog and microblog. It **follows the OS** (`#e9ecef` under light emulation).
- **Seen (dark):**
  - Page `#030507`, cards `#16191d`, text `#f8f9fa` (16.73:1).
  - Dominant accent `#91a7ff`, with `#9461fd` and `#00ffff` used sparingly.
  - Body font is `system-ui`. The code stack starts with Dank Mono and Operator Mono.
- **Borrow:**
  - A feed of post cards (notes, articles, talks, shows) with a **left filter column that lists post types with counts**, plus a year column.
  - This is a static, accessible alternative or complement to the topic marquee, built from the same `[tag, count]` data the marquee already uses.
- **Caution:**
  - The UI is dense and app-like.
  - Accent colour is not used to code post types; I checked, and the type links share one colour. It is good for structure, but not for colour ideas.

### 5. Ben Holmes — https://bholmes.dev

- **Kind:** Personal site of a developer and video creator. It is built with Astro: assets are served from `/_astro/`. It is **dark-only**.
- **Seen:**
  - Background `#030712`, body text `#90a1b9` (7.66:1).
  - CSS variables `--font-family-heading: Ranga` (hand-lettered display) and `--font-family-sans: Atkinson`.
  - Violet buttons and a cyan accent `#53eafd`. Saturated blue, red and green appear in illustrations.
- **Borrow:**
  - A hero with a large glowing illustrated "card", and italic display headlines where one word is set in an accent colour ("Ben.", "videos").
  - A solid-plus-outline button pair.
  - Proof that this kind of expressive dark site is straightforward in Astro.
- **Caution:**
  - Illustration-led heroes take real art time.
  - Ranga is decorative and only suits short headings. It is on Fontsource [F-npm].

### 6. Syntax.fm — https://syntax.fm

- **Kind:** Web-development podcast site. Under light emulation the page resolved to a white background, so it appears to **follow the OS**.
- **Seen (dark):**
  - Background `#000`, text `#fff`.
  - CSS custom properties `--primary: var(--yellow)` and `--accent: var(--teal)`. The most frequent accent is `#fabf47`, with hot pink `#e91e8c`, cyan `#00fff5` and lime `#beff00` also present.
  - Body and heading fonts are an aliased custom family that falls back to Operator Mono.
  - A fluid type scale is defined in custom properties with `clamp()`, for example `--font-size-base: clamp(1rem, .34vw + .91rem, 1.19rem)`.
- **Borrow:**
  - Loud, mono-flavoured branding: a chunky yellow wordmark and a hot-pink announcement banner across the top.
  - Numbered episode-style rows, and a sticky mini player bar.
  - The `clamp()` type scale is directly portable to Tailwind `fontSize` tokens.
- **Caution:**
  - Monospaced body text is tiring for long articles.
  - Operator Mono is not on Fontsource [F-npm].
  - The texture-heavy background competes with reading.

### 7. Bun — https://bun.com

- **Kind:** Dev-tool product site. It **follows the OS** (white under light emulation).
- **Seen (dark):**
  - Background `#0d0a0c`, body text `#a8a8a5` (8.27:1).
  - In the dark rules, `--c-accent: 255 46 151` (that is `#ff2e97`) and `--c-accent-strong: 255 92 176`.
  - Code and benchmark colours include `#b5e48c`, `#ff7eb6`, `#28dc82`, `#8fb4ff` and `#f5b43c`.
  - Fonts: `--font-display: "Archivo"`, `--font-mono: "Martian Mono"`, with a system sans body.
- **Borrow:**
  - **This is the closest match to the current site.** It uses a hot-pink accent on near-black, and one word of the headline ("fast") is set in pink.
  - A small pink "release" pill above the headline.
  - A copyable install-command chip.
  - A tabbed benchmark card with horizontal bars, which could inspire how project cards show metrics.
  - Archivo and Martian Mono are both on Fontsource [F2].
- **Caution:** Product density (logo wall, benchmarks) does not map onto a personal site. Borrow the accent discipline, not the volume.

### 8. Vercel Geist — https://vercel.com/geist/colors

- **Kind:** Vercel's design-system documentation. It **follows the OS** (`#fafafa` under light emulation).
- **Seen (dark):**
  - Page `#000`, secondary text `#a1a1a1` (8.13:1).
  - Font: GeistSans.
  - CSS custom properties include `--geist-highlight-pink: #ff0080`, `--geist-highlight-purple: #f81ce5` and `--geist-highlight-yellow: #fff500`.
  - The colours page documents 10 scales: backgrounds, gray, gray-alpha, blue, red, amber, green, teal, purple and pink. Each non-background scale runs from 100 to 1000, and each step range has a role [G1]:
    - 100–300: backgrounds
    - 400–600: borders
    - 700–800: high-contrast fills
    - 900–1000: text and icons
- **Borrow:**
  - The **role-based scale**. Give each accent hue (pink, emerald, yellow, cyan) a background step, a border step, a solid-fill step and a text step, so no component has to guess which shade to use.
  - Geist and Geist Mono are on Fontsource [F2].
- **Caution:** Black plus Geist plus monochrome UI reads as "Vercel". Use the system, not the look.

### 9. Supabase — https://supabase.com

- **Kind:** Dev-tool product site. It **follows the OS** (`#fdfdfd` under light emulation).
- **Seen (dark):**
  - Background `#131413`, body text `#989a99`, brand green `#3ecf8e`.
  - Fonts: headings Manrope, body Inter, code Source Code Pro.
- **Borrow:**
  - A **bento grid** of feature cards in mixed sizes. Each card has a 1px border, an icon and title, a short description, a small illustration and a check-list.
  - A two-tone hero headline whose second line is in the accent green.
  - The bento grid suits the **projects page**: one featured project spans two columns and the rest sit in smaller tiles.
- **Caution:**
  - Single-hue branding.
  - Bento layouts need content of similar weight per tile, or the grid looks uneven.

### 10. Astro — https://astro.build

- **Kind:** Framework marketing site, on the owner's own stack. It is **dark-only**.
- **Seen:**
  - Background `#060913`, body text `#bfc1c9` (11.06:1).
  - Headings in "Obviously", which is not on Fontsource [F-npm]. Body in Inter.
  - 89 elements carry gradient backgrounds, including a large violet-to-indigo radial glow behind the hero.
- **Borrow:**
  - A deep navy-black with a big soft radial glow behind the hero.
  - A small "release" pill above the headline, a pill primary button and a copyable `npm create astro@latest` chip.
  - The themes gallery (https://astro.build/themes/) is a further source of Astro-ready layouts.
- **Caution:**
  - The display font is not freely available.
  - Text over a glow must be checked against the brightest pixel behind it (WCAG failure F83) [W1].

### 11. Tailwind CSS — https://tailwindcss.com

- **Kind:** Framework marketing and docs site. It **follows the OS**.
- **Seen (dark):**
  - Background `#030712`, body text `#99a1af` (7.74:1).
  - Accents sky `#74d4ff` and pink `#fb64b6` dominate, with teal `#96f7e4`.
  - Fonts: Inter, with "plexMono" (IBM Plex Mono) for code.
- **Borrow:**
  - **Hairline framing:** thin guide lines run around the hero and sections like a blueprint.
  - A code panel with line numbers and multicolour tokens.
  - The same palette family the owner already uses.
- **Caution:** These computed pinks and blues do not match the v3 hexes in this repo; pink-400 in v3 is `#f472b6` [S1]. That suggests the site uses Tailwind v4's re-tuned palette (my inference). Do not copy hexes across versions without checking.

### 12. Trigger.dev — https://trigger.dev

- **Kind:** Dev-tool product site. It is **dark-only**.
- **Seen:**
  - Background `#121317`, body text `#b5b8c0` (9.35:1).
  - `--primary: #a8ff53` (lime), with violet `#7655fd`, pink `#fa3abf` and lavender `#9c9af2`.
  - Fonts: headings Satoshi, body Geist, code Geist Mono.
- **Borrow:**
  - A **lime primary button with dark text** on near-black.
  - A hero backdrop made of oversized, dimmed terminal code.
  - A three-accent system (lime for action, violet and lavender for secondary emphasis, pink for highlights).
- **Caution:** Satoshi is not on Fontsource [F-npm]. Lime works as text on dark, but as a fill it needs dark text, never white.

### 13. Dracula Theme — https://draculatheme.com (spec: https://draculatheme.com/spec)

- **Kind:** Colour-theme project site plus a published specification. The `<html>` element carries `data-theme="dark"` even under light emulation, so it is **dark by default**.
- **Seen:**
  - The site itself uses background `#0e0d11` and DM Sans.
  - The **official spec palette** [D1]:
    - Background `#282A36`, Selection `#44475A`, Foreground `#F8F8F2`, Comment `#6272A4`
    - Cyan `#8BE9FD`, Green `#50FA7B`, Orange `#FFB86C`, Pink `#FF79C6`, Purple `#BD93F9`, Red `#FF5555`, Yellow `#F1FA8C`
- **Borrow:**
  - A widely recognised bright-on-dark palette whose pink, green, yellow and cyan are close to the owner's four stripe colours.
  - Astro's syntax-highlighting docs use `'dracula'` as their example `shikiConfig.theme` [A1]. Code blocks could therefore match a Dracula-derived site palette with a one-line change. The current config is `github-dark-high-contrast` in `astro.config.mjs`.
- **Caution:** The spec's Comment colour `#6272A4` is only **3.02:1** on `#282A36` (computed). It fails 4.5:1 for small text, so never use it for dates or metadata.

---

## Dropped sites

| Site                                                | Why dropped                                                                                                                                                                                             |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Linear](https://linear.app)                        | Dark (`#08090a`), but the page is near-monochrome. Body text `#8a8f98`; the saturated colours I found were pastel tints, mostly inside product mock-ups.                                                |
| [Raycast](https://www.raycast.com)                  | Dark (`#07080a`), but my capture was near-monochrome. Red `#ff6363` appeared only in the logo and small UI, and the hero graphic did not render in my browser, so I could not verify bright accent use. |
| [Warp](https://www.warp.dev)                        | Now **light**: `#fbf9fe` background with a blue `#2a1eff` accent, even under dark emulation.                                                                                                            |
| [Resend](https://resend.com)                        | Dark (`#000`), but monochrome. Its code blocks are greyscale with one yellow string colour (`#ffff92`).                                                                                                 |
| [Rauno Freiberg](https://rauno.me)                  | Light (`#ededed`, `html.light`) even under dark emulation.                                                                                                                                              |
| [Paco Coursey](https://paco.me)                     | Dark (`#1a1a1a`) with no saturated accents.                                                                                                                                                             |
| [Lee Robinson](https://leerob.com)                  | Dark under dark OS (`#1b1a19`), but serif and monochrome, with no accents.                                                                                                                              |
| [Cassidy Williams](https://cassidoo.co)             | Dark under dark OS (`#252525`), but no saturated accents. The only highlight is pale green `#e5ffc3`.                                                                                                   |
| [Wes Bos](https://wesbos.com)                       | Light (`#fff`) even under dark emulation.                                                                                                                                                               |
| [Charm](https://charm.sh) (redirects to charm.land) | Vivid, but the base is saturated purple `#6b50ff`, not a dark background. Body text there is only 4.89:1.                                                                                               |
| [Kent C. Dodds](https://kentcdodds.com)             | Dark under dark OS (`#1f2028`), but the accents are sparse blues and the hero did not render.                                                                                                           |
| [Cassie Evans](https://cassie.codes)                | Opens with a "thanks for reading" modal and shows no saturated accents. It looks archived.                                                                                                              |
| [Una Kravets](https://una.im)                       | Dark under dark OS (`#151c19`), but the palette is muted and earthy.                                                                                                                                    |
| [Railway](https://railway.com)                      | Dark (`#13111c`), but the purple and orange accents are muted.                                                                                                                                          |
| [Neon](https://neon.com)                            | Black, but accents (green `#34d59a`) are very sparse.                                                                                                                                                   |
| [Zeno Rocha](https://zenorocha.com)                 | Dark (`#08070b`) with no saturated accents.                                                                                                                                                             |

---

## Design directions

Contrast ratios below are calculated with the WCAG 2.2 relative-luminance formula [W1] and truncated to two decimals, never rounded up. AA requires **4.5:1** for normal text and **3:1** for large text, meaning 18pt/24px, or 14pt/about 18.5px bold [W1]. UI component boundaries and focus indicators need **3:1** [W2]. All fonts listed are OFL-licensed and published on Fontsource; the npm registry shows version 5.3.0 for each [F2].

### Direction 1: Neon brutalist (an evolution of the current site)

The current identity, sharpened. The page is near-black with hard 2px light borders, solid accent fills behind black text, and offset shadows in accent colours instead of black or white. The hard-stop stripe becomes the signature graphic. Type is big and grotesque, with mono metadata. Motion is limited to snappy hover translates and the marquee. It feels like a zine or a sticker sheet: Syntax.fm's loudness, combined with Bun's discipline of reserving pink for the one thing that matters.

- **Examples:** Syntax.fm, Bun, Ben Holmes, Jhey Tompkins.
- **Palette** (Tailwind v3 values from this repo [S1]):

| Role                  | Hex       | On bg `#0a0a0a` | On surface `#171717` |
| --------------------- | --------- | --------------- | -------------------- |
| bg (neutral-950)      | `#0a0a0a` | –               | –                    |
| surface (neutral-900) | `#171717` | –               | –                    |
| text (neutral-50)     | `#fafafa` | 18.96           | 17.17                |
| muted (neutral-400)   | `#a3a3a3` | 7.84            | 7.10                 |
| primary (pink-500)    | `#ec4899` | 5.61            | 5.08                 |
| pink-400 (links)      | `#f472b6` | 7.47            | 6.76                 |
| emerald-300           | `#6ee7b7` | 12.98           | 11.76                |
| yellow-300            | `#fde047` | 15.01           | 13.59                |
| cyan-300              | `#67e8f9` | 13.65           | 12.36                |

- On-accent text: use `#0a0a0a` on pink-500 (5.61:1), on yellow-300 (15.01:1) and on cyan-300 (13.65:1).
- **White on pink-500 is only 3.52:1** and fails for normal text. If a fill must carry white text, use pink-600 `#db2777` (4.59:1).
- **Fonts:** keep **Space Grotesk + JetBrains Mono**, which are already installed [F2]. For a louder variant, use Bun's pairing of **Archivo** for display with **Martian Mono** for metadata and code [F2].
- **Components:**
  - **Article list:** full-width rows separated by 2px rules: a big title, a mono date, and a filled topic chip with black text. On hover the row jumps up and left and casts a 4px offset shadow in its topic colour.
  - **Topic marquee:** kept, with chips filled in the four accent colours and a 2px black outline. Add a visible pause/play toggle (see accessibility notes).
  - **Project cards:** `ShadowCard` with a thick border and an offset shadow in the project's own accent colour. Add a mono "window title" strip with the year and stack.
  - **Resume:** a mono date gutter, bold Space Grotesk roles, and company names on a yellow-300 marker background in black text.
  - **Colour divider:** kept as the hero motif. Make it thicker, reuse it as section breaks, and echo its four hues in chip fills.

### Direction 2: Editorial dark with colour-coded topics

A reading-first redesign. The colour lives in **topics** rather than in chrome: each topic owns one hue, used for its label, a 3px left rule on article rows, the active TOC item on an article page, and its tags. The layout borrows Josh Comeau's article page (a measured text column with a sticky right-rail TOC) and Brittany Chiang's experience rows for the résumé. The topic hues come from the Dracula spec, which already harmonise and are close to the current stripe colours [D1]. Code blocks can use Shiki's `dracula` theme so code matches the topics [A1].

- **Examples:** Josh W. Comeau, Brittany Chiang, nerdy.dev, Dracula Theme.
- **Palette:**

| Role                  | Hex       | On bg `#0e0f13` | On surface `#181a21` |
| --------------------- | --------- | --------------- | -------------------- |
| bg                    | `#0e0f13` | –               | –                    |
| surface               | `#181a21` | –               | –                    |
| text                  | `#e8e8ec` | 15.67           | 14.21                |
| muted                 | `#a1a1aa` | 7.47            | 6.77                 |
| topic: pink (Dracula) | `#ff79c6` | 8.02            | 7.28                 |
| topic: yellow         | `#f1fa8c` | 17.14           | 15.55                |
| topic: cyan           | `#8be9fd` | 13.83           | 12.55                |
| topic: green          | `#50fa7b` | 13.95           | 12.66                |
| topic: purple         | `#bd93f9` | 7.93            | 7.20                 |
| topic: orange         | `#ffb86c` | 11.24           | 10.19                |

- Background text on a topic fill: `#0e0f13` on pink is 8.02:1 and on purple 7.93:1.
- Avoid Dracula "Comment" `#6272A4` for text: it is 4.20:1 on `#0a0a0a`, and worse on lighter grounds.
- **Fonts:** **Newsreader** (serif) for article titles and headings, **Inter** for body and UI, and **JetBrains Mono** for code [F2]. Space Grotesk can stay for the wordmark and nav to keep continuity.
- **Components:**
  - **Article list:** magazine-style list with title, excerpt, date and reading time. The topic shows as a coloured text label _and_ a coloured left rule, never colour alone [W4].
  - **Topic marquee:** demoted or replaced by a static topic index with counts, nerdy.dev style, built from the existing `[tag, count]` data. A slowed marquee can remain on the home page only.
  - **Article page:** a 65–75ch column, a sticky right TOC whose active item takes the article's topic colour, and a category plus updated date in the header.
  - **Project cards:** quiet cards with a large title, a one-line outcome and topic-coloured tags. The whole card is one hover target and its border brightens on hover.
  - **Resume:** Brittany-style rows with a date gutter, role and company, a summary and tag pills.
  - **Colour divider:** the stripe uses the topic hues in order. On an article page it collapses to a single rule in that article's topic colour.

### Direction 3: Glow and gradient, product-style

The polished dev-tool look. The page is black with 1px low-alpha borders, large soft radial glows in pink and violet behind hero sections and featured cards, and hairline grids. It uses Tailwind's blueprint lines and a Supabase-style bento grid for projects. Accents mostly appear as light (glows, gradient hairlines, a gradient headline word), with solid fills saved for one primary button. It is the most "premium" option, and the furthest from the current brutalist identity.

- **Examples:** Vercel Geist, Astro, Supabase, Tailwind CSS (with Trigger.dev as a bridge to Direction 4).
- **Palette:**

| Role                  | Hex                                        | On bg `#000000` | On surface `#0f0f12` |
| --------------------- | ------------------------------------------ | --------------- | -------------------- |
| bg                    | `#000000`                                  | –               | –                    |
| surface               | `#0f0f12`                                  | –               | –                    |
| border                | `rgba(255,255,255,0.08)` (decorative only) | –               | –                    |
| text                  | `#ededed`                                  | 17.93           | 16.34                |
| muted                 | `#a1a1a1`                                  | 8.12            | 7.40                 |
| hot pink              | `#ff4fa3`                                  | 6.89            | 6.28                 |
| violet (purple-400)   | `#c084fc`                                  | 7.94            | 7.24                 |
| sky (sky-400)         | `#38bdf8`                                  | 9.80            | 8.93                 |
| emerald (emerald-400) | `#34d399`                                  | 10.92           | 9.95                 |

- Glow: a radial gradient of pink-500 `#ec4899` or violet-600 `#7c3aed` at 20–35% opacity fading to transparent.
- Button text: black on `#ff4fa3` is 6.89:1, but **white on `#ff4fa3` is 3.04:1 and fails**. White on violet-600 `#7c3aed` is 5.69:1.
- **Fonts:** **Geist + Geist Mono** [F2]. To keep more personality, use Space Grotesk for display with Geist for body.
- **Components:**
  - **Article list:** a card grid framed by hairlines. Each card has a topic dot plus label, a title and a date, and a faint glow appears on hover.
  - **Topic marquee:** becomes a slow, edge-faded ribbon of outline chips, like a logo wall.
  - **Project cards:** a bento grid. The featured project spans two columns with a screenshot over a glow. Case-study heroes get a large radial glow and a "release pill" label (Astro, Bun).
  - **Resume:** a vertical timeline with a 1px line and small accent dots per role.
  - **Colour divider:** softened into a gradient hairline (pink, then emerald, yellow and cyan). Alternatively, keep the hard stops at 1–2px height as a nod to the old site.
- **Caution:** Low-alpha borders are fine as decoration, but if a border is the _only_ cue that something is interactive it needs 3:1 [W2]. Check every glow for text-over-gradient contrast [W1].

### Direction 4: Terminal / retro

The developer-nostalgia option. A near-black page with mono metadata, a dot-matrix or mono display face for headlines, and inverse-video hovers (lime background, black text). Bright ANSI-style accents are each given one job: lime for action, magenta for highlight, cyan for links, amber for warnings or "new", coral for errors. Project cards wear window chrome, and lists read like `ls` output. It borrows Jhey's dotted display type, Trigger.dev's lime-on-black and code-texture hero, Bun's install chip and Dracula's discipline of one colour per role.

- **Examples:** Jhey Tompkins, Trigger.dev, Dracula Theme, Bun.
- **Palette:**

| Role                | Hex       | On bg `#0c0d0e` | On surface `#16181b` |
| ------------------- | --------- | --------------- | -------------------- |
| bg                  | `#0c0d0e` | –               | –                    |
| surface             | `#16181b` | –               | –                    |
| text                | `#e6edf3` | 16.46           | 15.05                |
| muted               | `#9aa4ae` | 7.68            | 7.02                 |
| lime (action)       | `#a8ff53` | 15.83           | 14.47                |
| magenta (highlight) | `#ff5fd2` | 7.24            | 6.62                 |
| cyan (links)        | `#5ce1ff` | 12.66           | 11.57                |
| amber (new)         | `#ffd84d` | 14.06           | 12.85                |
| coral (error)       | `#ff6b6b` | 7.00            | 6.40                 |

- Inverse-video hover: `#0c0d0e` on lime is 15.83:1 and on magenta 7.24:1.
- **Fonts:** **Doto** for the hero headline only, **IBM Plex Sans** for body, and **JetBrains Mono** for metadata, code and nav [F2]. **Martian Mono** is a wider alternative for headings [F2]. Do not set article body text in mono.
- **Components:**
  - **Article list:** columns of `date  topic  title`, each prefixed by a prompt glyph. Hover inverts the row to a lime fill with black text.
  - **Topic marquee:** becomes a bottom status-bar ticker (`tags: astro · aws · css …`), or a static wrapped line.
  - **Project cards:** window chrome (a title bar with three dots and a mono filename) holding a README-style summary. Case studies read like structured docs: NAME / PROBLEM / APPROACH / RESULT.
  - **Resume:** a `cat resume.md` header, then normal sans text with mono dates. Readability wins over the gimmick.
  - **Colour divider:** a segmented "ANSI palette" bar. The current four hues plus lime map naturally to terminal colour swatches.
- **Caution:** This is the easiest look to overdo. Skip CRT flicker and scanline effects, which conflict with the motion guidance below, and keep long-form text in a proportional font.

---

## Accessibility notes for bright-on-dark

1. **"Bright" does not mean "high-contrast".**
   - WCAG contrast is computed from relative luminance, so hue barely matters [W1].
   - Saturated mid-tones that look vivid can fail as text on black. Computed against `#0a0a0a`:
     - Pure blue `#0000ff`: 2.30:1
     - violet-600 `#7c3aed`: 3.47:1
     - pink-600 `#db2777`: 4.30:1
   - The light 300/400 tints pass easily (cyan-300 13.65:1, pink-400 7.47:1).
   - Thresholds are 4.5:1 for normal text and 3:1 for large text, and ratios are not rounded: 4.499:1 fails [W1].
2. **Text on bright fills.**
   - White on Tailwind pink-500 is **3.52:1**, which fails AA for normal text. Black on the same pink is 5.95:1.
   - This repo currently uses `bg-pink-500 … text-sm … text-white` buttons in several React diagram components, for example `src/components/react/d3/BarChart.tsx` and `src/components/react/TrafficFlowDiagram.tsx`. Under any of these directions, switch them to dark text or a darker fill.
3. **Red on black.** WCAG's Understanding 1.4.3 calls out long-wavelength colours such as red on dark backgrounds as hard for people with protanopia, and advises avoiding red on black [W1]. Use coral or pink for error and "hot" states, and pair them with an icon or text.
4. **Colour-coded topics need a second cue.** WCAG 1.4.1 says colour must not be the only means of conveying information [W4]. Every topic colour should travel with its text label. Links distinguished only by colour need 3:1 against the surrounding text, so underlining links in body copy is simpler [W4].
5. **Pure `#000` vs off-black.**
   - WCAG does not require either.
   - Material Design's dark-theme guidance recommends dark grey `#121212` over black, because shadows stay visible and light text on dark grey has less contrast than on black, which reduces eye strain [M1].
   - The same guidance desaturates brand colours on dark surfaces so they still pass 4.5:1 [M1].
   - Tradeoffs for this site:
     - `#000` gives white text the full 21:1, which some readers find glaring.
     - Off-blacks such as `#0a0a0a` or `#0e0f13` still give 15–19:1 with off-white text (`#fafafa` on `#0a0a0a` is 18.96:1), and they let `surface` steps read as elevation.
     - Moving off pure black costs each accent a little contrast; pink-500 drops from 5.95:1 to 5.61:1. Re-check accents when you change the base.
6. **Focus states.**
   - 2.4.7 (AA) requires a visible focus indicator.
   - 1.4.11 (AA) requires it to have 3:1 against adjacent colours [W2].
   - 2.4.13 (AAA) sets the target: at least the area of a 2px perimeter and a 3:1 change between the focused and unfocused states [W3].
   - Use `:focus-visible` with a solid 2–3px outline and an offset, so mouse clicks do not show rings [MDN2]. Yellow-300 or cyan-300 outlines exceed 13:1 on these backgrounds.
   - Don't rely on a blurred box-shadow glow as the only indicator. Its soft edge is the part that has to meet 3:1 (my inference from [W2]/[W3]).
7. **Motion.**
   - `prefers-reduced-motion: reduce` reflects an OS setting. MDN notes that motion "can trigger discomfort for those with vestibular motion disorders" [MDN1].
   - The repo already gates marquee animation and hover translates with Tailwind's `motion-safe:` variant (`src/components/MarqueeRow.astro`, `MarqueeChip.astro`), which is good.
   - However, WCAG 2.2.2 Pause, Stop, Hide (A) applies to any auto-moving content that lasts more than 5 seconds alongside other content: it needs a pause, stop or hide mechanism, and stopping only while the element is focused does not count [W5].
   - The marquee currently pauses only on hover, which does nothing for keyboard or touch users. Add a visible pause/play control.
   - Interaction-triggered effects such as cursor spotlights, parallax and page-flip transitions should also switch off under reduced motion. WCAG 2.3.3 (AAA) lists `prefers-reduced-motion` as a sufficient technique [W6].
8. **Declare the scheme.** For a dark-only site, set `color-scheme: dark` on `:root`. The browser then renders scrollbars, form controls and other built-in UI with dark defaults, so nothing flashes white [MDN3].

---

## Sources

**Inspected sites** (computed styles and screenshots, 2026-10-16): https://brittanychiang.com · https://www.joshwcomeau.com (and `/css/center-a-div/`) · https://jhey.dev · https://nerdy.dev · https://bholmes.dev · https://syntax.fm · https://bun.com · https://vercel.com/geist/colors · https://supabase.com · https://astro.build · https://tailwindcss.com · https://trigger.dev · https://draculatheme.com. Dropped sites are linked in the table above.

**Standards and documentation**

- [W1] W3C WAI, _Understanding SC 1.4.3 Contrast (Minimum)_, WCAG 2.2: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html. Contrast formula definition: https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio
- [W2] W3C WAI, _Understanding SC 1.4.11 Non-text Contrast_: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- [W3] W3C WAI, _Understanding SC 2.4.13 Focus Appearance_: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html
- [W4] W3C WAI, _Understanding SC 1.4.1 Use of Color_: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html
- [W5] W3C WAI, _Understanding SC 2.2.2 Pause, Stop, Hide_: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- [W6] W3C WAI, _Understanding SC 2.3.3 Animation from Interactions_: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- [MDN1] MDN, `prefers-reduced-motion`: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- [MDN2] MDN, `:focus-visible`: https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
- [MDN3] MDN, `color-scheme`: https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
- [M1] Material Design 2, _Dark theme_: https://m2.material.io/design/color/dark-theme.html
- [G1] Vercel, _Geist: Colors_: https://vercel.com/geist/colors
- [D1] Dracula, _Specification_: https://draculatheme.com/spec
- [A1] Astro Docs, _Syntax Highlighting_: https://docs.astro.build/en/guides/syntax-highlighting/
- [S1] Tailwind CSS v3 colour palette: https://v3.tailwindcss.com/docs/customizing-colors. Values were cross-checked against `require('tailwindcss/colors')` from this repo's installed Tailwind 3.4.
- [F2] Fontsource packages, all OFL-1.1 at v5.3.0 per the npm registry:
  - `@fontsource-variable/space-grotesk`, `jetbrains-mono`, `geist`, `geist-mono`, `archivo`, `martian-mono`, `doto`, `newsreader`, `inter`, `ibm-plex-sans`
  - Catalogue: https://fontsource.org/fonts (for example https://fontsource.org/fonts/geist and https://fontsource.org/fonts/doto)
- [F-npm] npm registry lookups (`npm view`, 2026-10-16):
  - Found: `@fontsource-variable/manrope`, `@fontsource/ranga`, `@fontsource/atkinson-hyperlegible`, `@fontsource/dm-serif-text`, `@fontsource/commit-mono`
  - 404 (not found): `@fontsource/obviously`, `wotfard`, `cartograph-cf`, `operator-mono`, `satoshi`
