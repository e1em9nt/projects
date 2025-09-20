export default function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-') // spaces in hyphens
    .replace(/[^a-z0-9-]/g, '') // other punctuation
    .replace(/-+/g, '-'); // collapse multiple hypens
}
