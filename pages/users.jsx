import Users from "../components/Users";
import Hero from "../components/Hero";

function users({ data }) {
  return (
    <div>
      <Hero heading="Users Page" message="This is the Users Page using Next.JS" />
      <Users dataUsers={data} />
    </div>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default users;
