# Move sunrisemd.com from Lovable to Cloudflare

These are steps you take yourself; no code changes are needed.

## 1. Disconnect the domain in Lovable
- Open Project Settings -> Domains (where you are now).
- On sunrisemd.com, open the "..." menu. If it is marked Primary, click "Unset as primary" first.
- Then choose Remove / Disconnect. Do the same for www.sunrisemd.com if it is still listed.
- Your site keeps running at sunrisemd-showcase.lovable.app, so nothing goes offline on Lovable's side.

## 2. Update DNS (wherever your DNS is managed, likely Cloudflare)
- Delete the old Lovable records:
  - A records for `@` and `www` pointing to Lovable's IP
  - TXT records `_lovable` and `_lovable.www` (`lovable_verify=...`)
- Then in Cloudflare: Workers & Pages -> your project -> Settings -> Domains & Routes (or Custom domains) -> Add `sunrisemd.com` and `www.sunrisemd.com`. Cloudflare creates the right records for you.

## 3. If you bought the domain through Lovable
- You can move it out with a transfer: Settings -> Workspace domains -> your domain -> unlock it and get the transfer (auth) code, then start a transfer in to Cloudflare Registrar. Or keep it registered with Lovable and point its nameservers to Cloudflare.

## 4. Check
- Wait a few minutes (up to a few hours for DNS), then open https://sunrisemd.com and confirm the Cloudflare version loads with a valid lock icon.
- Optionally, unpublish the Lovable copy later in Project Settings.

Tip: do step 2's Cloudflare "add custom domain" right after step 1 to keep downtime to a few minutes.
