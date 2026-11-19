
const STRAPI_URL = process.env.STRAPI_URL;

export async function getHeader() {
  const response = await fetch(
    `${STRAPI_URL}/api/headers?populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch header");
  }

  const result = await response.json();

  return result.data?.[0] ?? null;
}

export function getStrapiMediaUrl(url: string) {
  if (!url) return "";

  if (url.startsWith("http")) return url;

  return `${STRAPI_URL}${url}`;
}
