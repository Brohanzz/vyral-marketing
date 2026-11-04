// Generated from design-reference/Founder/testimonials.md. Quotes are word for word.
// To add one, add a section to that file and copy it here; the homepage layout adapts to the count.

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  linkedin: string;
  /** File in public/testimonials/. */
  photo: string;
  /** Optional result, shown as a pill. Leave out when there is none. */
  result?: { text: string; direction: "up" | "down" };
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dan Rees",
    role: "Head of Customer Success, Paperturn",
    quote: "I started taking LinkedIn seriously about a year ago, and I honestly don’t think I’d still be posting without VYRAL. It helps me write and schedule posts, then shows me what’s working and what isn’t through its analytics. A special mention to the team, who have been amazing at helping me get the most out of it and quick to respond to my support tickets!",
    linkedin: "https://www.linkedin.com/in/dan-rees-8360b5a3/",
    photo: "dan-rees.png",
  },
  {
    name: "Suji Goetzke",
    role: "Head of GTM, Trellus",
    quote: "VYRAL has become the place where my LinkedIn content comes together. My drafts land there ready to go, I add the photo, and I just hit post.\n\nWhat I didn’t expect is how much it helps on the brand side. Having all my stats in one place makes it easy to put together a portfolio, and walking into a brand deal negotiation with real numbers changes the whole conversation. If you work with brands, this is the tool I’d point you to. Huge credit to the team for building something creators actually want to use.",
    linkedin: "https://www.linkedin.com/in/suji-goetzke/",
    photo: "suji-goetzke.png",
  },
  {
    name: "Marco Villari",
    role: "Account Executive, Partnership & Alliances, Odoo",
    quote: "I’ve been using VYRAL for months, and it’s become essential to my LinkedIn workflow. I love all-in-one solutions, and having content creation, publishing and performance stats in one place saves time and headaches.\n\nBut the real game changer? The integrated coach. It challenges your ideas, sharpens your writing and helps you improve. A no-brainer!\n\nHuge shoutout to the team behind it for building something genuinely valuable!",
    linkedin: "https://www.linkedin.com/in/marcvillari/",
    photo: "marco-villari.png",
  },
];
