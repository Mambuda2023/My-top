/* eslint-disable @next/next/no-page-custom-font */

import "../app/styles/reset.css";
import "../app/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
