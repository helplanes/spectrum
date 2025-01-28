export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';  // browser uses relative path
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;  // uses Vercel's deployment URL
  }
  // falls back to environment variable or hardcoded URL
  return process.env.NEXT_PUBLIC_APP_URL || 'https://www.spectrumpccoe25.tech';
}

export async function fetchApi(endpoint: string, init?: RequestInit) {
  const baseUrl = getBaseUrl();
  const url = new URL(endpoint, baseUrl);
  return fetch(url, {
    ...init,
    credentials: 'include', // Add this to include cookies
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json',
    },
  });
}
