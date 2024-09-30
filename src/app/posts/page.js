import Link from "next/link";

export default async function PostsPage() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await result.json();

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <br />
            <Link href={`/posts/${post.id}`}>
              {post.title.substring(0, 10)}...
            </Link>
          </div>
        );
      })}
    </div>
  );
}
