import PlanetInfo from "../../components/PlanetInfo";
// import useSWR from "swr";

export async function getStaticPaths() {
  const res = await fetch("/api/staticdata");
  const planets = await res.json();

  const paths = planets.map((planet) => ({
    params: { id: planet.name.toLowerCase() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch("/api/staticdata");
  const planets = await res.json();

  const planet = planets.filter(
    (planet) => params.id === planet.name.toLowerCase
  );
  return {
    props: {
      planet,
    },
  };
}

export default function Planet({ planet }) {
  return <PlanetInfo planet={planet} />;
}
