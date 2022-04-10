import React from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center bg-black">
      <Head>
        <title>Elliot Braem</title>
        <meta name="description" content="Elliot Braem's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center text-white">
        <p className="text-xl">Elliot Braem</p>
        <p className="text-md">elliot@ejlbraem.com</p>
        <a href="https://github.com/elliotBraem">
          <FontAwesomeIcon className="mx-1" icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/efizzy.busy/">
          <FontAwesomeIcon className="mx-1" icon={faInstagram} />
        </a>
      </main>
      <footer></footer>
    </div>
  );
}
