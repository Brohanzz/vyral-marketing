// Shared external identifiers for the marketing site: links into the app
// (app.getvyral.io) and Loops ids. Import these rather than writing literals
// inline, so a change is a one-line edit here and not a repo-wide sweep.

/** App signup. `?mode=signup` puts the auth page straight into sign-up mode. */
export const APP_SIGNUP_URL = "https://app.getvyral.io/auth?mode=signup";

/** App login. */
export const APP_LOGIN_URL = "https://app.getvyral.io/auth";

/**
 * Loops newsletter mailing list.
 *
 * This MUST be sent explicitly in the newsletter form body. The "Select a list"
 * setting in the Loops form builder only takes effect through a hidden input in
 * the HTML Loops generates; our markup is hand-built, so without this the
 * contact is created with an empty `mailingLists` and never joins the list.
 */
export const LOOPS_NEWSLETTER_LIST_ID = "cmrxi1310f06w0jxpdk3z5tim";
