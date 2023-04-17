import "@/styles/globals.css";
import Layout from "../components/Layout";
import { Antonio, League_Spartan } from "next/font/google";

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--antonio-font",
});
const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--spartan-font",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${antonio.variable} ${spartan.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
