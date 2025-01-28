export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // browser should use relative path
    return '';
  }
  // reference for vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // assume localhost
  return `http://localhost:${process.env.PORT || 3000}`;
}

export async function fetchApi(endpoint: string, init?: RequestInit) {
  const baseUrl = getBaseUrl();
  const url = new URL(endpoint, baseUrl);
  return fetch(url, init);
}
