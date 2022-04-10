import React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

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
        <FontAwesomeIcon className="mx-1" icon={faEnvelope} />
        <FontAwesomeIcon className="mx-1" icon={faGithub} />
        <FontAwesomeIcon className="mx-1" icon={faInstagram} />
        <FontAwesomeIcon className="mx-1" icon={faTwitter} />
      </main>
      <footer></footer>
    </div>
  );
}
