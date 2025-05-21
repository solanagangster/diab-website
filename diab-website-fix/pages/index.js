
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DIAB - Deity of Autonomous Burn</title>
        <meta name="description" content="Welcome to the DIAB ritual zone." />
      </Head>
      <main style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: 'black', color: 'white', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '3rem', color: 'red' }}>$DIAB</h1>
        <p>🔥 Deity of Autonomous Burn 🔥</p>
        <p>This is your official DIAB homepage.</p>
      </main>
    </>
  );
}
