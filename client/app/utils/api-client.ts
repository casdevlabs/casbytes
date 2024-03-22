export async function client(
  url: string,
  method: string = "GET",
  body: Record<string, unknown> | null = null,
  headers: Record<string, string> = {},
) {
  let BASE_URL: string;

  if (typeof window === "undefined") {
    BASE_URL = "/api";
  } else {
    BASE_URL = "https://casbytes.com/api";
  }

  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method: method,
      body: body ? JSON.stringify(body) : null,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
    } else {
      console.error("Fetch error:", error);
    }
    throw error;
  }
}
