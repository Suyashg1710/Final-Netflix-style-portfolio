export type ProjectAsset =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "embed"; src: string; title?: string };

export type ProjectsPageCategory =
  | "campaign-thinking"
  | "short-copies"
  | "big-copy-energy"
  | "between-classes";

export type ProjectsPageItem = {
  id: string;
  title: string;
  category: ProjectsPageCategory;
  published: boolean;

  thumbnail: string; // tile image
  cover: string; // modal hero image

  shortDescription: string;
  team?: string;
  assets: ProjectAsset[];
};

export const projectsPageCategories: {
  key: ProjectsPageCategory;
  title: string;
  subtitle?: string;
}[] = [
  { key: "campaign-thinking", title: "Campaign Thinking" },
  { key: "short-copies", title: "Short Copies" },
  { key: "big-copy-energy", title: "Big Copy Energy" },
  { key: "between-classes", title: "Between Classes" },
];

export const projectsPageItems: ProjectsPageItem[] = [
  {
    id: "sample-1",
    title: "Sample Campaign Deck",
    category: "campaign-thinking",
    published: false,
    thumbnail: "/Postbox.jpg",
    cover: "/Postbox.jpg",
    shortDescription:
      "Example placeholder. Replace this with your real campaign thinking work.",
    team: "Copy: Suyash · AD: Someone",
    assets: [
      { type: "image", src: "/Postbox ideaboard.jpg", alt: "Idea board" },
      { type: "image", src: "/Postbox steps.jpg", alt: "Steps" },
    ],
  },
  {
    id: "sample-2",
    title: "Short Copy Set – Social",
    category: "short-copies",
    published: true,
    thumbnail: "/Cerave.png",
    cover: "/Cerave.png",
    shortDescription:
      "Example placeholder. Replace this with your short copy work.",
    assets: [{ type: "image", src: "/Cerave.png", alt: "Social post" }],
  },
];
