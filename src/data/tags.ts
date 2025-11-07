export type TagMeta = {
  slug: string;
  title: string;
  description: string;
};

function toTitleCaseFromSlug(slug: string): string {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase())
    .trim();
}

// Customize specific tags here as needed
const tagMetaBySlug: Record<string, Partial<TagMeta>> = {
  astro: {
    title: "BerserkArch",
    description:
      "Posts about building berserkarch linux distro, content-focused and tutorials.",
  },
};

export function getTagMeta(slug: string): TagMeta {
  const baseTitle = toTitleCaseFromSlug(slug);
  const custom = tagMetaBySlug[slug] ?? {};
  return {
    slug,
    title: custom.title ?? `#${baseTitle}`,
    description: custom.description ?? `Articles tagged ${baseTitle}.`,
  } as TagMeta;
}
