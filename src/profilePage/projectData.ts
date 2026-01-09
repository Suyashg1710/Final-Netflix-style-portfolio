export type ProjectAsset =
  | { type: "image"; src: string; alt?: string; link?: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "embed"; src: string; title?: string };

export type RecruiterProject = {
  id: string | number;
  title: string;
  thumbnail: string;
  cover: string;
  shortDescription: string;
  team: string;
  assets: ProjectAsset[];
  subtitle?: string; // optional
  multiLineLabel?: boolean; // optional
};
const postboxTeam =
  "Copywriters: Angeliki Rekka, Mariam Mchedlidze, Suyash Gupta · " +
  "Art Directors: Amar Salim, Molka Bey";

const ICW_BROCHURE_URL =
  "https://8aec1bf4-eecf-4b5a-aa8c-8e349de613c4.filesusr.com/ugd/826a18_369de9606fe84fe4a5b0e54eea5872d3.pdf";

export const recruiterProjects: RecruiterProject[] = [
  {
    id: "postbox-id",
    title: "DHL x India Post - PostBox ID",
    subtitle: "(Future Lions 2025 Shortlist)",
    multiLineLabel: true,
    thumbnail: "/Postbox.jpg", // small tile image
    cover: "/Postbox.jpg", // big hero image in modal
    shortDescription:
      "DHL & India Post turn the humble postbox into a biometric gateway, giving India’s homeless children an address, an identity, and access to education and welfare.",
    team: postboxTeam,
    assets: [
      // 1) YouTube/Vimeo embed – replace with your real embed URL:
      {
        type: "embed",
        src: "https://www.youtube.com/embed/EDtQFdFz76k?si=lwOjJ0b_Ly9BhTEz",
        title: "Postbox ID – Case Study Film (Future Lions 2025 Shortlist)",
      },

      // 2) Idea board image:
      {
        type: "image",
        src: "/Postbox ideaboard.jpg",
        alt: "Postbox ID – idea board",
      },

      // 3) Process / step-by-step image:
      {
        type: "image",
        src: "/Postbox steps.jpg",
        alt: "Postbox ID – step-by-step process",
      },
    ],
    // Optional: add a small badge to the title area later if you like.
  },
  {
    id: 1,
    title: "Cerave – skin donAItion",
    thumbnail: "/Cerave.png",
    cover: "/Cerave.png",
    shortDescription: "Launch campaign for Cerave's new hydration range.",
    team: "Copy: Suyash Gupta · Art: Jane Doe · Strategy: John Doe",
    assets: [
      {
        type: "embed",
        src: "https://player.vimeo.com/video/1075125603?h=9a7bc37fa4",
        title: "Cerave case study",
      },
      { type: "image", src: "/Cerave.png" },
      { type: "image", src: "/Cerave.png" },
    ],
  },
  {
    id: "roku",
    title: "Suntory Roku 0.0 - Real without reasons",
    thumbnail: "/Roku title.jpg",
    cover: "/Roku title.jpg",
    shortDescription:
      "To launch Roku’s non-alcoholic drink, we tackled the pressure Gen Z faces to explain their choices by creating a tool for self-protection.",
    team: "Copywriter: Suyash Gupta · Art Director: Ishita Jain",
    assets: [
      {
        type: "image",
        src: "/Roku ideaboard.jpg",
        alt: "Roku 0.0 idea board",
      },
      {
        type: "image",
        src: "/Roku explanation.jpg",
        alt: "Roku 0.0 explanation board",
      },
      {
        type: "image",
        src: "/Roku executions.jpg",
        alt: "Roku 0.0 executions",
      },
    ],
  },
  {
    id: "la-roche-posay",
    title: "La Roche-Posay - Sinner's Play",
    thumbnail: "/LRP title.png",
    cover: "/LRP title.png",
    shortDescription:
      "To renew Jannik Sinner’s La Roche-Posay ambassadorship, we staged a fake break by making the product’s absence louder than the partnership itself.",
    team: "Copywriter: Suyash Gupta · Art Director: Ashish Jumade",
    assets: [
      {
        type: "image",
        src: "/LRP ideaboard.png",
        alt: "La Roche-Posay - Sinner's Play idea board",
      },
    ],
  },
  {
    id: "india-craft-week",
    title: "India Craft Week - Good Stories Untold",
    subtitle: "(Brochure Copywriting)",
    multiLineLabel: true,
    thumbnail: "/ICW Title.png",
    cover: "/ICW Title.png",
    shortDescription:
      "India Craft Week 2018 needed its first voice. The launch brochure introduced India to its own craft legacy and brought the global platform to India." +
      "<br />" +
      '<a href="https://8aec1bf4-eecf-4b5a-aa8c-8e349de613c4.filesusr.com/ugd/826a18_369de9606fe84fe4a5b0e54eea5872d3.pdf" target="_blank" rel="noopener noreferrer">' +
      "Click here to open the full brochure." +
      "</a>",
    team: "Copywriter: Suyash Gupta",
    assets: [
      {
        type: "image",
        src: "/ICW first page.jpg",
        alt: "India Craft Week brochure first spread",
        link: ICW_BROCHURE_URL,
      },
      {
        type: "image",
        src: "/ICW page.jpg",
        alt: "India Craft Week brochure interior page",
        link: ICW_BROCHURE_URL,
      },
      {
        type: "image",
        src: "/ICW credits.png",
        alt: "India Craft Week credits",
        link: ICW_BROCHURE_URL,
      },
    ],
  },
];
