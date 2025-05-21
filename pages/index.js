
import dynamic from "next/dynamic";
const WalletMultiButton = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", paddingTop: "50px" }}>
      <h1>🔥 Welcome to DIAB</h1>
      <p>The dark token of the underworld. Built on Solana. Powered by Ritual.</p>
      <div style={{ marginTop: "20px" }}>
        <WalletMultiButton />
      </div>
    </div>
  );
}
