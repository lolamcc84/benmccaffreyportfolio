## Why the email link opens Chrome

`mailto:` links hand off to whatever your operating system has set as the default mail handler. On your machine that's Chrome (which typically routes to Gmail). The site itself is doing the right thing - there's no code change that can force it to open Apple Mail or a different app for you specifically. Each visitor's machine decides.

## What I'll change

Keep the `mailto:` link (still the right default for most visitors), but add a small "Copy" button next to the email address in both places it appears (About section and footer). Clicking it copies `benjaminmccaffrey@icloud.com` to the clipboard and briefly shows "Copied" as feedback. That way anyone who doesn't want to launch their mail client can grab the address in one click.

## Files touched

- `src/routes/index.tsx` - add a small copy button component beside the two email links, using the existing editorial styling (thin underline, muted text, no new dependencies).

## Optional note for you

If you personally want clicking the email to open a specific app on your Mac:
- Open the Mail app → Mail → Settings → General → "Default email reader" → pick your preferred app.
- Or in Chrome: Settings → Privacy and security → Site settings → Additional permissions → Protocol handlers, and remove Gmail as the mailto handler.
