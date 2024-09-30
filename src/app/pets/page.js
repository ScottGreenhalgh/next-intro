"use client";

import Link from "next/link";

export default function PetsPage() {
  const pets = [
    {
      id: 1,
      name: "Buddy",
      bio: "A playful golden retriever who loves to fetch.",
    },
    {
      id: 2,
      name: "Whiskers",
      bio: "A curious tabby cat who enjoys exploring.",
    },
    { id: 3, name: "Polly", bio: "A friendly parrot that can mimic words." },
    {
      id: 4,
      name: "Nibbles",
      bio: "A small hamster that loves running on its wheel.",
    },
    { id: 5, name: "Snowball", bio: "A gentle rabbit with soft, white fur." },
    { id: 6, name: "Bubbles", bio: "A colorful fish that swims gracefully." },
    {
      id: 7,
      name: "Rex",
      bio: "A loyal German shepherd who is very protective.",
    },
    {
      id: 8,
      name: "Fluffy",
      bio: "A fluffy Persian cat that loves to be pampered.",
    },
    {
      id: 9,
      name: "Slinky",
      bio: "A playful ferret that enjoys hiding in small spaces.",
    },
    {
      id: 10,
      name: "Shelly",
      bio: "A calm turtle that likes basking in the sun.",
    },
  ];

  return (
    <div>
      {pets.map((pet) => (
        <div key={pet.id}>
          <Link
            href={`/pets/${pet.id}?name=${encodeURIComponent(
              pet.name
            )}&bio=${encodeURIComponent(pet.bio)}`}
          >
            {pet.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
