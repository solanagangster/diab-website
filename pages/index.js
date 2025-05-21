import dynamic from "next/dynamic";
const WalletMultiButton = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-red-600">$DIAB</h1>
      <p className="text-lg text-center max-w-xl mb-6">
        The hellfire token forged in darkness. Rise with the Ritual. Powered by Solana.
      </p>
      <WalletMultiButton className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" />

      <div className="mt-10 w-full max-w-2xl space-y-6">
        <div className="bg-red-900/30 p-6 rounded-2xl shadow-lg border border-red-700">
          <h2 className="text-2xl font-semibold mb-2">🔥 About DIAB</h2>
          <p className="text-sm">
            $DIAB isn't just a meme — it's a symbol of chaos, freedom, and digital power. Fueled by
            the underworld's energy, it's your key to the Ritual economy.
          </p>
        </div>

        <div className="bg-red-900/30 p-6 rounded-2xl shadow-lg border border-red-700">
          <h2 className="text-2xl font-semibold mb-2">📜 Tokenomics</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>1,000,000,000 Total Supply</li>
            <li>50% Liquidity Pool</li>
            <li>30% Community Rewards & Burns</li>
            <li>10% Ritual Developer Fee</li>
            <li>10% Strategic Partnerships</li>
          </ul>
        </div>

        <div className="bg-red-900/30 p-6 rounded-2xl shadow-lg border border-red-700">
          <h2 className="text-2xl font-semibold mb-2">📈 Token Tracker</h2>
          <p className="text-sm mb-2">
            Track DIAB on Solscan or Birdeye to monitor its rise from the depths:
          </p>
          <ul className="list-inside text-sm text-blue-400">
            <li><a href="#" target="_blank" rel="noopener noreferrer">Solscan</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Birdeye</a></li>
          </ul>
        </div>

        <div className="bg-red-900/30 p-6 rounded-2xl shadow-lg border border-red-700">
          <h2 className="text-2xl font-semibold mb-2">🗺️ Roadmap</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Phase 1: Launch Ritual & Website</li>
            <li>Phase 2: Community Growth & Marketing</li>
            <li>Phase 3: Ritual-Based dApps</li>
            <li>Phase 4: Listings & Expansion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
