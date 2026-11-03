import { LOOPS_NEWSLETTER_LIST_ID } from "@/lib/urls";

// Loops-hosted newsletter form endpoint. Public by design: it takes no API key
// and is safe to call from the browser. Do not replace this with a Next.js API
// route, and never put LOOPS_API_KEY in this repo.
//
// Contract: POST application/x-www-form-urlencoded with `email`, `firstName`
// and `mailingLists`. Responds { success: true } on accept.
//
// `mailingLists` is not optional. The form builder's "Select a list" setting is
// only carried by a hidden input in Loops' own generated HTML; this markup is
// hand-built, so omitting it creates the contact with "mailingLists": {} and
// the subscriber silently never joins the list.
//
// Double opt-in is enabled on the Loops side, so a successful POST means the
// confirmation email has been sent, NOT that the person is subscribed. Success
// copy in every form must keep saying that.
const LOOPS_FORM_ENDPOINT =
  "https://app.loops.so/api/newsletter-form/cmplkkyl3026m0jx7kvtuyzuv";

export type SubscribeResult = { ok: true } | { ok: false; message: string };

export async function subscribeToNewsletter(email: string, firstName: string): Promise<SubscribeResult> {
  try {
    const res = await fetch(LOOPS_FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        email,
        firstName,
        mailingLists: LOOPS_NEWSLETTER_LIST_ID,
      }).toString(),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok || !data?.success) {
      return {
        ok: false,
        message:
          typeof data?.message === "string" && data.message
            ? data.message
            : "Something went wrong. Please try again.",
      };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      message: "Could not reach the server. Please check your connection and try again.",
    };
  }
}
