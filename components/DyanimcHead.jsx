import Head from "next/head";

export default function DynamicHead({name}) {
  return (
    <Head>
        <title>{name}</title>
        <meta name="description" content={`Facts about the planet ${name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  )
}