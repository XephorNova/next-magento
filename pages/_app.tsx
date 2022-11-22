import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "../components";

export const client = new ApolloClient({
  ssrMode: true,
  uri: "https://magentopractice.m2dev.invanos.net/kagento/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </ApolloProvider>
  );
}
