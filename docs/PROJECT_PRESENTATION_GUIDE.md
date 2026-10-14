# Project Presentation Guide

The default standard for adding a project to the **All Builds** section of torrevillas.tech, and for its case study, process map and structured data.

Adopted 2026-10-14. Treat it as the standard for every future portfolio addition unless Angelo approves an exception.

## 1. Audience and writing style

Write for business owners, hiring managers and prospective clients. Many of them will not know technical terms.

- Use plain, natural English in short, direct sentences.
- Say what the project does, what problem it addresses and how it works in practical terms.
- Lead with the business problem or practical use, not a list of technologies.
- Describe concrete tasks and outcomes. Avoid vague phrases such as "leverages cutting-edge AI".
- Avoid exaggerated marketing language and claims that sound impressive but are hard to verify.
- Avoid unnecessary em dashes, semicolons and colons in marketing copy.
- Keep it conversational, specific, professional and easy to scan.

## 2. Standard project presentation

Document these eight items for each project:

1. **Project name.** Use one name, consistently, across the card, case study, related links, process map, alt text and structured data. If the process-map artwork shows a name, the site uses the same name until the map is re-exported.
2. **Category or context.** For example portfolio demo, internship project, team thesis or paid client trial.
3. **Business problem.** The problem the project addresses.
4. **What it does.** In language a non-technical reader understands.
5. **How it works.** Include where AI is used and where fixed rules or human approval matter.
6. **Evidence or result.** Only when actual test records or documentation support it.
7. **Status and limitations.** What was tested, what remains untested, and whether sample data, test data or sandbox payments are used.
8. **Tools and technologies.** Listed after the practical explanation, never instead of it.

Keep cards short. Put deeper technical detail, workflow explanations, test evidence and limitations in the case study or the process documentation.

## 3. Evidence and honesty rules

- Never invent ROI, revenue, time savings, adoption, customer counts, testimonials, production use or business outcomes.
- Keep three things distinct: a built workflow, a tested workflow, and a live production deployment.
- Label sample data, test data, sandbox payments and portfolio demonstrations clearly.
- Do not imply a project belongs to a real client unless that is verified and approved for public disclosure. Real client work stays anonymized unless Angelo approves otherwise.
- State what AI does and what people still need to review.
- Describe metrics exactly as the test evidence supports them, including the sample size and what was measured (for example "77 of 80 system tests within ±5% tolerance", not "96% accurate").

### Card status labels in use

Pick the label the evidence supports. Add a new one only if none fits.

| Label | Use when |
|---|---|
| Demo · sample data | A working demo running on sample data |
| Built · system test pending | Built, but the whole system has not been tested end to end |
| In development · test payments | Still being built, payments in sandbox only |
| Client trial · core flow tested | Paid client trial, main path tested |
| Working build · test data | Works, tested with test data only |
| Experiment · sample data | Exploratory build on sample data |
| Built · not running | Built, not currently running |
| Earlier version | Superseded earlier work |

Case-study and process-map modals may use the longer lifecycle terms (IMPLEMENTED, LIVE-TESTED, SIMULATED, NOT BUILT, PROD-VALIDATED, CONFLICTING). Never use "Active" or "Live" without production evidence.

## 4. Workflow for adding a project

1. Review the project's existing implementation and documentation.
2. Identify the actual business problem, workflow, evidence and limitations.
3. Draft the card in plain English using the template below.
4. Check every claim against the available evidence. Note the source for each metric.
5. Keep the card, case study, process map, labels and alt text consistent.
6. Run the existing content and QA checks (section 6).
7. Flag missing evidence instead of guessing. A gap is reported to Angelo, not filled with a plausible-sounding claim.

## 5. All Builds card template

```text
Project name:
  (one consistent name; full name first, abbreviation in brackets if useful)

Context / status label:
  (e.g. Portfolio demo · Demo · sample data)

Plain-language description (2 sentences max):
  What it does and for whom, in everyday words.
  The key evidence, or the main limitation if there is no evidence yet.

Evidence:
  (metric + sample size + source document; or "none yet")

Limitations:
  (what is untested, sample/test data, sandbox payments, not running, etc.)

Tools:
  (only tools the actual workflow or documents use)

Sources checked:
  (files, test records or workflow exports used to verify the above)
```

Example (Rebar Vista card):

> A camera-based device that measures a rebar column from a photo and recommends the concrete mix before pouring. It stayed within ±5% tolerance in 77 of 80 system tests (96.3%).

## 6. QA checks before publishing

- **Content:** no leftover old project names, no client or clinic names, no unapproved links (for example the SQL demo link until its spend limit is confirmed), nothing secret-like in the diff.
- **Consistency:** the name matches across card, case study, related links, process map, alt text and JSON-LD.
- **Structured data:** JSON-LD parses, and the FAQPage text matches the visible FAQ word for word. `sameAs` only lists profile URLs that have been checked by hand.
- **HTML:** html-validate shows no new structural errors.
- **Browser:** desktop and mobile screenshots, no broken images or anchors, no console errors, no horizontal scroll, the nav fits at 768 px, modals and the image viewer open and close.
- **Deploy:** stage only the intended files, push to `main`, and confirm the Vercel production deployment succeeded before calling the change live.
