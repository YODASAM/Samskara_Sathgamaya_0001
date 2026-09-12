# Samskara Yoga — Sathgamaya

Landing page for the 3-day live Sathgamaya workshop. Single self-contained
`index.html` using the Tailwind CDN, with the crimson / vermilion / gold /
warm-ivory palette from the 003 theme.

Open `index.html` in a browser. There is no build step.

---

## Image placement

| Image | Where it appears | Why there |
|---|---|---|
| `lineage-banner.jpg` | **Top of the page**, full-width band under the header | Establishes the Classical Hatha Yoga / Sadhguru lineage before anything is asked of the visitor |
| `certified-teacher-badge.jpg` | **Footer** | Closes on the same credential the page opened with |
| `rahul-portrait.jpg` | Teacher section, round portrait | Puts a face to "my story" |
| `vinay-portrait.jpg` | "Also teaching this program" | Same, for the 7:30 AM batch teacher |
| `rahul-with-certificate.jpg` | Credential strip + both certificate lightboxes | Shows the certification instead of claiming it |
| `vinay-with-certificate.jpg` | Credential strip + Vinay's certificate lightbox | As above |
| `practice.jpg` | Programme section, beside the three-day breakdown | Illustrates the practice next to the description of it |

### Source files

Originals live outside the repo. The web versions were produced as follows:

- `IMG-20260909-WA0006.jpg` → `lineage-banner.jpg` (resized to 1400px wide)
- `IMG-20260909-WA0007.jpg` → `certified-teacher-badge.jpg` (760px wide)
- `Rahul_web.heic` → `rahul-portrait.jpg` (square face crop, 700×700) and
  `rahul-with-certificate.jpg` (full frame, 900px wide)
- `Vinay_web.heic` → `vinay-portrait.jpg` (square face crop, 700×700) and
  `vinay-with-certificate.jpg` (full frame, 760px wide)

HEIC does not display in browsers, so both portraits were converted to
progressive JPEG. The certificate photographs keep their original framing — a
square crop clipped Vinay's head and cut Rahul's certificate out of shot. They
are levelled in the layout instead, by a shared 4:5 CSS frame
(`.cred-frame`) with `object-fit: cover`.

---

## Three fixes made while adding the images

**1. Unclosed `<div>` in the hero.** The hero's grid wrapper was never closed
before `</section>` — 79 opening tags against 78 closing. Browsers recovered
from it silently, but it was invalid markup. Now balanced.

**2. The certificate lightbox opened placeholders.** `rahul-certificate.jpg`
and `vinay-certificate.jpg` are images that read *"CERTIFICATE PLACEHOLDER —
Replace this file"*. Every **View certificate** button now opens the real
photograph instead. The two placeholder files are still in `assets/images/`
and are no longer referenced; delete them whenever you like.

**3. `teacher.jpg` was not Rahul.** It was a stock portrait from the 003 theme
being used as his placeholder. Replaced with his actual photograph. The file
remains in the repo, unreferenced.

---

## Structure

```
SamskaraYoga_Sathgamaya/
├── index.html                  ← the page; all JS is inline at the bottom
├── styles.css                  ← from the 003 pack (see note below)
├── script.js                   ← from the 003 pack (see note below)
├── index-003-original.html     ← reference only
└── assets/
    ├── images/
    │   ├── lineage-banner.jpg            ← top banner
    │   ├── certified-teacher-badge.jpg   ← footer badge
    │   ├── rahul-portrait.jpg
    │   ├── rahul-with-certificate.jpg
    │   ├── vinay-portrait.jpg
    │   ├── vinay-with-certificate.jpg
    │   ├── practice.jpg
    │   ├── logo-icon.jpg
    │   ├── cert-seal.jpg
    │   ├── teacher.jpg                   ← unused (stock portrait)
    │   ├── rahul-certificate.jpg         ← unused (placeholder graphic)
    │   └── vinay-certificate.jpg         ← unused (placeholder graphic)
    └── video/
```

**On `styles.css` and `script.js`:** both were carried over from the 003 pack
and neither is used by `index.html`. `script.js` targets elements
(`.menu-button`, `#mobile-nav`, `#registration-form`) that do not exist on this
page; the working code — mobile menu, sticky header, FAQ accordion, certificate
lightbox, batch picker, countdown — is inline at the bottom of `index.html`.
They are kept so nothing is lost, but you can remove both without effect.

---

## Tested

Rendered in headless Chromium at 1280×900 and 390×844:

- No broken images
- No horizontal overflow on mobile
- Certificate lightbox opens the correct file and closes on Esc, click-outside
  and the × button
- Hero headline stays within the first viewport on desktop

---

## Editing notes

- **Colours** are Tailwind config tokens in the `<head>`: `dusk`, `dusk2`,
  `maroon`, `maroon2`, `dawn`, `dawnlt`, `linen`, `linen2`, `moss`. Change them
  once there and the whole page follows.
- **Countdown** targets `2026-09-13T00:00:00+05:30`. Update it for the next batch.
- **Payment** — `payBtn` currently only validates that a batch is selected. Wire
  your gateway to its click handler.
- **Banner height** — the lineage band is capped at `max-w-3xl` on desktop so the
  hero headline stays above the fold. Widen it and the headline drops out of the
  first screen.
