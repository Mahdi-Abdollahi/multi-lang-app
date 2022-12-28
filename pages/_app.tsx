import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import LangeguageContexProvider from "../context/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangeguageContexProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LangeguageContexProvider>
  );
}
