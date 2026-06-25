export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export async function fetchPosts(userId: number | null): Promise<Post[]> {
  const url =
    userId === null
      ? "https://jsonplaceholder.typicode.com/posts"
      : `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Fehler beim Laden der Posts: ${response.status}`);
  }

  return response.json();
}
