import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <Head>
        <title>Elliot Braem</title>
        <meta name="description" content="Elliot Braem's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white ml-4 h-full flex flex-col justify-center w-full">
        <p className="text-5xl sm:text-9xl">elliot braem</p>
        <p className="text-sm">elliot@ejlbraem.com</p>
      </main>
      <footer></footer>
    </div>
  );
}
