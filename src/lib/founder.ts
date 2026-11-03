import { SITE_URL } from "@/lib/metadata";

// The public founder. The story is design-reference/Founder/founder-story.md, word for word.
export const FOUNDER = {
  name: "Vicky Salunova",
  jobTitle: "Founder",
  caption: "Vicky Salunova, founder of VYRAL",
  alt: "Vicky Salunova, founder of VYRAL",
  linkedin: "https://www.linkedin.com/in/vicky-salunova/",
  photo: "/founder/vicky-salunova.png",
  photoUrl: `${SITE_URL}/founder/vicky-salunova.png`,
  // The photo is 800 x 800.
  photoSize: 800,
} as const;

export const FOUNDER_HEADING = "Why I built VYRAL";

/** The story's closing line, used on the homepage. Same characters as in the story. */
export const FOUNDER_TAGLINE = "You don’t need to go viral. You just need VYRAL.";

export const FOUNDER_STORY: string[] = [
  "One September evening, I sat down and told my partner I was done.",
  "I’d spent months trying to grow on LinkedIn as a personal branding creator, and I couldn’t figure it out. I was going to close that chapter and go back to what had worked before.",
  "He listened, then asked: “If you can’t find a solution that helps you, why don’t you build your own?”",
  "That question became VYRAL.",
  "LinkedIn had been my home since 2023. I came from tech sales, and what started as posting for work turned into journaling my life as a salesperson: the wins, the losses, the lessons. People connected with it. My network grew, and so did the opportunities, from job offers and partnerships to friendships.",
  "In 2025 I took a leap and started posting about personal branding instead. My reach dropped overnight. I went from traction to having no idea what was working or why. Courses taught me to copy others. AI tools wrote posts that didn’t sound like me. Nothing answered my real question: what works for me, and why?",
  "So I built the tool I needed. One that connects your goals, your posting routine and your data, so you always know what to improve, what to double down on and what to write next.",
  "I built it on LinkedIn’s official API, because no tool is worth risking the account you’ve spent years building. Getting that access took months of paperwork and patience, but it was worth it.",
  "After months of building, honest (and brutal) feedback from our first testers, and a lot of fixing, we launched in June 2026.",
  "And the name? It was never about going viral. Virality is temporary. A personal brand grows slowly and lasts.",
  "You don’t need to go viral. You just need VYRAL.",
  "Vicky",
];

/** The founder as schema.org Person, for the Organization structured data. */
export const founderSchema = {
  "@type": "Person",
  name: FOUNDER.name,
  jobTitle: FOUNDER.jobTitle,
  url: FOUNDER.linkedin,
  sameAs: [FOUNDER.linkedin],
  image: FOUNDER.photoUrl,
};
