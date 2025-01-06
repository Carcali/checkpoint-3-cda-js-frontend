import "@/styles/globals.scss";
import "@/components/Header.scss";
import "@/components/Form.scss";
import Header from "@/components/Header";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/client";

function App({ Component, pageProps, }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
