export default async function SinglePostPage({ params }) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const postInfo = await result.json();

  return (
    <div>
      {params.id}
      <h2>{postInfo.title}</h2>
      <p>{postInfo.body}</p>
    </div>
  );
}
