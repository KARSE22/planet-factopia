import PlanetInfo from "../../components/PlanetInfo";
import DynamicHead from "../../components/DyanimcHead.jsx";
import fetch from "node-fetch";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/staticdata");
  let planets = await res.json();

  const paths = planets.map((planet) => ({
    params: { id: planet.name.toLowerCase() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:3000/api/staticdata");
  const planets = await res.json();

  const planet = planets.filter((planet) => {
    return params.id === planet.name.toLowerCase();
  });

  return {
    props: {
      planet,
    },
  };
}

export default function Planet({ planet }) {
  return (
    <>
      <DynamicHead name={planet[0].name} />
      <PlanetInfo planet={planet} />
    </>
  );
}
