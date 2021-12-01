import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
let Web3 = require('web3');

function Home() {
  const [web3, setWeb3] = useState(null)
  const [address, setAddress] = useState(null)
  const [contract, setContract] = useState(null)
  const [isWalletConnected, setWalletConnected] = useState(false)

  let abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "initMessage",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "message",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newMessage",
          "type": "string"
        }
      ],
      "name": "update",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  let contractAddress = "CONTRACT_ADDRESS"

  useEffect(() => {
    window.ethereum ?
      ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        setAddress(accounts[0])
        let w3 = new Web3(ethereum)
        setWeb3(w3)
        let c = new w3.eth.Contract(abi, contractAddress)
        setContract(c)
      }).catch((err) => console.log(err)).finally(setWalletConnected(true))
      : console.log("Please install MetaMask")
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Generator</title>
        <meta name="description" content="NFT Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NFT Generator
        </h1>
        
        <p className={styles.description}>
          { isWalletConnected ? "Generate NFT" : "Please connect MetaMask wallet"}
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Elliot{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
