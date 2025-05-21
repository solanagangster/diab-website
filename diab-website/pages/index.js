
import { useEffect, useMemo, useState } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import "@solana/wallet-adapter-react-ui/styles.css";

export default function Home() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Head>
            <title>DIAB | Deity of Autonomous Burn</title>
            <meta
              name="description"
              content="Welcome to DIAB — a ritual-based Solana token forged in fire. Connect your wallet and join the burn."
            />
          </Head>
          <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-red-600 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              DIAB
            </motion.h1>
            <p className="text-center text-lg md:text-xl max-w-xl mb-8">
              Welcome to the fire. $DIAB is the Ritual Coin of the Underchain. Burn, Sacrifice, Transcend.
            </p>
            <WalletMultiButton className="bg-red-600 hover:bg-red-700 transition rounded-xl px-6 py-3 text-lg" />
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-400">
                🔥 Join the Ritual • Follow @DIABtoken on X • Telegram: t.me/diabcoin
              </p>
            </div>
          </main>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
