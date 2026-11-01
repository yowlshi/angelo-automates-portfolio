# GHL Discovery Call widget — custom CSS and form intro notes

Files:
- `docs/ghl-discovery-call-widget.css`: the calendar's custom code (plain CSS, validated). **Wrap it in `<style>…</style>` when pasting into the calendar field** (see below).
- `docs/ghl-discovery-call-custom-html.html`: the intro block for the form's existing "HTML 1" element.

First prepared 2026-09-29. Updated the same day after investigating how GHL inserts custom code and how the Form Builder HTML element renders. Nothing in the live portfolio or GHL account was changed by Claude.

## Status at last check

- The calendar's custom code **is live**. The widget page contains a `<style>` element whose contents were identical to the validated CSS file as it was before this update (sections 1–9 without 7g and the 7a spacing change).
- The form (`pG47owNB7fx4eV3WKOmW`) currently has:
  - a heading element, "BOOK A CALL WITH ME";
  - three required fields: FULL NAME (`full_name`), WHATSAPP (GHL's standard `phone` field, relabelled) and EMAIL (`email`);
  - an **empty "HTML 1" element**, placed after Email;
  - a native Submit button.
  
  The form's own Custom CSS is empty.

## How GHL inserts each kind of custom code (verified in GHL's own front-end code)

| Where | What it expects | Evidence |
|---|---|---|
| Calendar → Advanced settings → Widget appearance → **Insert custom code** | **HTML.** CSS must be wrapped in `<style>…</style>`. | The widget runs `document.body.appendChild(range.createContextualFragment(widgetConfig.customCode))`, which parses the field as HTML and appends it to `<body>`. Bare CSS becomes a visible text node, which is the "CSS shown as text" seen in the preview. |
| Form Builder → Styles → Advanced → **Custom CSS** | **Plain CSS, no tags** (HighLevel help article). | The form renderer adds the form's `customStyle` as a `<style>` head tag alongside its generated styles. The calendar loads its attached form through GHL's forms service, so this would also apply inside the booking widget. It isn't used here; see "Why the CSS stays in the calendar field". |
| Form Builder → **HTML element** (Edit Script) | HTML rendered **inline** in the same page, not an iframe. `<noscript>` parts go in via `innerHTML`; everything else goes through a script-writer, so `<style>` works and `<script>` would execute. | GHL's `HtmlPreview` component. |
| Inputs placed inside an HTML element | **Not submitted.** GHL blocks arbitrary field data by design; the only workaround is JavaScript copying values into hidden custom fields. | HighLevel / Growthable documentation. Ruled out for this project. |

## Approach chosen

**B + a presentation-only piece of A.**

- **B (in place):** native fields, styled by the calendar's custom code. This keeps GHL's validation, contact mapping, booking controls and submission untouched.
- **A (added):** the existing HTML element carries only a heading and one line of text: no inputs, no script, no styles. It replaces the shouting "BOOK A CALL WITH ME" heading.
- **C (rejected):** a custom HTML form would need a JavaScript relay into hidden fields, the undocumented workaround ruled out for this project.

**Why the CSS stays in the calendar field rather than the Form Builder's Custom CSS:** the dark form styling is a property of this booking flow. Keeping it in the calendar's custom code means the same form stays in its default styling anywhere else it's embedded (for example on a light page), instead of turning dark everywhere.

## Colours and styles used

Tokens mirror `Portfolio/css/site.css` (dark theme):

| Role | Value | Where |
|---|---|---|
| Surface | `#1C1A18` | widget card, page behind card, text on coral |
| Inset field | `#131211` | form inputs |
| Secondary surface | `#24211F` | GHL "light background" (no-slots panel) |
| Line / strong line | `#34302C` / `#4A4540` | card and form-card borders / slot and input borders |
| Text / muted | `#F2EEE9` / `#A9A199` | headings, labels, values / meta, placeholders, intro line, unavailable days |
| Coral | `#FF6240` | selected day, confirm and "Book a Call" buttons, focus rings |
| Coral text / hover | `#FF8566` / `#FD7354` | slot hover text / submit hover (site's 12% mix toward text) |
| Coral tint | `#FF6240` at 12% | available days, month arrows |
| Error | `#FF8A80` | validation messages (GHL's `#CB3837` is ~3:1 on dark) |

Radii are 12px (cards) and 10px (buttons, slots, inputs). The primary button has dark text on coral (≈5.8:1) and a minimum height of 44px. The focus ring is 2px coral, offset 3px. Inter is already loaded by GHL, so there's no font import.

## What the CSS styles

1. Theme variables (`:root:root … !important` beats GHL's `:root … !important`).
2. The page behind the card, guarded by `:has()` (otherwise the iframe's white shows through).
3. Service title; 4. the card.
5. Calendar days: coral chips for available days, grey for unavailable, dark text on the coral hover.
6. Time slots in the site's ghost-button style; 6b. coral highlight in the time-zone list.
7. The form:
   - 7a: flat bordered card that no longer runs under the button bar;
   - 7b: the old heading, restyled in case it's kept;
   - 7c–7d: labels and inputs;
   - 7e: errors;
   - 7f: "Book a Call";
   - 7g: the intro block.
8. Focus rings, including on the month/year buttons whose invisible `<select>` overlays take focus.
9. Reduced motion.
10. Narrow widths. On the confirmation screen, GHL fixes the booking-details box (`.appointment_widgets--revamp--booking-info.show-all-details`) at 320px. It's the widest item in the confirmation's flex wrapper, and that wrapper can't shrink below its content (`min-width: auto`). So the wrapper, the icon, the heading and the "Add to calendar" list all became 320px wide inside a card that is only 90% of the widget, and spilled out at phone widths: 32px on each side at 320px, making the widget scroll sideways. The box is now capped at 320px but follows the card, and the wrapper gets `min-width: 0`. Verified on GHL's real confirmation component, rendered locally without a booking, at 320, 360, 390 and 640px. The date grid's 28em (280px) minimum is also removed. The first version of this fix targeted `.add-calendar-container`, a class that exists in GHL's stylesheet but is not rendered by the current confirmation markup, so it matched nothing. The portfolio page itself never overflowed.
    Details-form scrollbar (the grey bar under the form): inside `#_builder-form`, the flex row `.flex.items-center` holds the fields column `.form-side` (inline `width: 100%`, `flex: 0 0 auto`, so it can't shrink) and an **empty** second column, `div > .flex-col.row.fields-container.remove-extra-padding`. That column has no content, but its 20px + 20px padding makes it 40px wide. It's pushed past the card and 9px past the step's scroll container, `.appointment_widgets--revamp--steps` (`overflow-x: auto`). The result is a 15px horizontal scrollbar at every width: scroll width 9px more than visible width, e.g. 278 vs 269 at 320px and 592 vs 583 at 1280px. It happened on the form step only; the date and time steps had no overflow. Earlier checks compared only the iframe document's width, so they missed it, and headless browsers don't draw scrollbars; it was confirmed in a headed Edge window. The fix removes that padding only while the column is `:empty`, so a future two-column form layout is unaffected. Verified headed at 320, 360, 390, 640, 768, 1024 and 1280px: no scrollbar on the date, time or form steps (including with validation errors) or on the locally rendered confirmation; the fields column still fills the card; Back works.

**7a detail.** GHL gives the form card 80px of bottom padding as room for its absolutely positioned "Book a Call" bar. With a visible card border, that bar covered the card's bottom edge: 23–24px at small widths, 11px at desktop, with or without this CSS. The CSS keeps the same 80px total but moves 60px outside the card (20px padding, 60px margin). The card now ends above the bar at every tested width, and scrolled content still clears the bar.

## Validation done (Edge, locally; CSS and intro simulated in my own session)

- **CSS file:** css-tree parse and csstree-validator report no errors; 33 rules; braces balanced; no stray text.
- **Simulated builder edits:** the intro markup placed in the existing HTML slot and moved to the top, and the old heading removed. Local DOM only; the real form was not edited.
- **Flow:**
  - date, then time slot, then "Select", then the form;
  - required-field errors ("FULL NAME is required", "EMAIL is required") in `#FF8A80`;
  - Tab order full name → WhatsApp → email → "Book a Call", with a coral glow on inputs and a coral ring on the button;
  - "Book a Call" enabled, 44px tall, 10px radius, and not overlapped;
  - Back returns to the time step;
  - no horizontal overflow.
- **Widths:** 390, 640 (portfolio embed) and 1280px. Card-to-button gap: 36px at 390 and 640px, 20px at 1280px, still clear when errors are showing.

Nothing was submitted. No booking was made and no notification was sent.

## Not verified / limitations

- **The real HTML element after you paste into it:** simulated, not observed. GHL's own renderer confirms the markup renders inline, so the only difference should be where you drag it. If a gap appears above it, that's GHL's per-element spacing.
- **Confirmation screen:** needs a real booking. GHL's stylesheet shows it uses the same theme variables.
- **WhatsApp required message:** leaving it empty showed no message on blur; Full Name and Email did. That's GHL's behaviour for its phone field, probably checked on submit.
- **Keyboard access to dates and time slots:** GHL day cells and slots aren't focusable. CSS can't fix this; the portfolio's email fallback link stays the accessible route.
- **Before-load flash:** the portfolio iframe has `background: #fff` (`css/site.css:619`). Changing that is a portfolio edit and out of scope.
- **Markup drift:** a GHL front-end update could rename classes. The variable block is the most durable part; the rest falls back to GHL defaults without breaking booking.

## How to apply in GoHighLevel

1. **Calendar custom code:** Calendars → Discovery Call with Angelo → Advanced settings → Widget appearance → Insert custom code. Replace the current contents with the file's CSS **wrapped in `<style>` and `</style>`**. Save.
2. **Form** (Sites → Forms → "BOOK A CALL WITH ME"):
   - a. Select the existing **HTML 1** element → Edit Script → paste the `<div class="nc-form-intro">…</div>` block from `ghl-discovery-call-custom-html.html` (the leading comment is optional).
   - b. Drag HTML 1 to the **top** of the form.
   - c. Delete the "BOOK A CALL WITH ME" heading element.
   - d. Optional but recommended: change the label text to sentence case: "Full name", "WhatsApp number", "Email". This changes display text only; the fields and their mapping stay the same, and GHL's error messages will read better ("Full name is required").
   - e. Leave the form's Custom CSS empty. Save.
3. **Preview** the calendar, and check:
   - date, time, "Select";
   - the form intro, the empty-field errors and Tab focus;
   - Back;
   - on a phone as well.
4. **Optional:** make one test booking with your own details to see the confirmation screen, then cancel it.

## How to revert

- **Calendar:** clear the custom code field and save to return to GHL's default grey theme. Or paste back the previous version, which is the same file without section 7g and the 7a spacing lines.
- **Form:** re-add a heading element (or undo the deletion if the builder allows), empty or delete HTML 1, and restore the label text. None of these edits change field names, mapping or submission.
