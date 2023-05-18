import Head from 'next/head';

export function PageHeader() {
  return (
    <Head>
      <title>Vote</title>
      <meta
        name="description"
        content="Poll and question app. By SantiagoGasco87Jack. twitch.tv/SantiagoGasco87Jack"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
