// import { useSearchParams } from "next/navigation";

// export default function DynamicPetsPage({ params }) {
//   const searchParams = useSearchParams();
//   const name = searchParams.get("name");
//   const bio = searchParams.get("bio");

//   return (
//     <div>
//       <h1>Information about pet: {params.id} </h1>
//       <p>Name: {name}</p>
//       <p>Bio: {bio}</p>
//     </div>
//   );
// }
export default function DynamicPetsPage({ searchParams, params }) {
  return (
    <div>
      <h1>Information about pet: {params.id} </h1>
      <p>Name: {searchParams.name}</p>
      <p>Bio: {searchParams.bio}</p>
    </div>
  );
}
