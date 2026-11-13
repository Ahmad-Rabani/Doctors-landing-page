import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Noble Dental Care — implant and comprehensive dentistry in Union City, Newark, and Hayward."
        />
        <meta name="theme-color" content="#0d5c59" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}