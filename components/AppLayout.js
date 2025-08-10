import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>Aibo Li - Blog</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Aibo Li Tech blog" />
        <meta
          name="keywords"
          content="HTML JS javascript Tech personal blog Aibo Li aibolilab React css strapi nextjs next ymf aiboli developer software"
        />
        <meta name="author" content="Aibo Li" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content="ca-pub-8073958171092439" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8073958171092439"
          crossorigin="anonymous"
        ></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K9WQP5R2DB"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K9WQP5R2DB');
        </script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      {children}
      <Footer></Footer>
    </>
  );
}
