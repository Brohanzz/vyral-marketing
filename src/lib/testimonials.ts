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
];
