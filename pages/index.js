export async function getServerSideProps({ res }) {
  res.writeHead(302, {
    Location: "/planets/mercury",
  });
  res.end();
}

export default function Home() {
  return null;
}
