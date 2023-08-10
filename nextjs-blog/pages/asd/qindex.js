import Link from 'next/link';
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>qindex page</title>
      </Head>
      <h1>QINDEX page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}