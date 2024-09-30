import Link from "next/link";

export default function Header() {
  const pages = [
    { name: "About", path: "/about" },
    { name: "Cats", path: "/cats" },
    { name: "pets", path: "/pets" },
    { name: "posts", path: "/posts" },
  ];

  return (
    <nav>
      {pages.map((page) => (
        <li key={page.name}>
          <Link href={{ pathname: page.path }}>{page.name}</Link>
        </li>
      ))}
    </nav>
  );
}
