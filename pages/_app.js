import '../styles/globals.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return 
  <>
  <Head>
        <title>
          Kasia Podraza | Psychologia, Coaching i joga
        </title>
        <meta
          name="description"
          content="Pracuję z drugim człowiekiem jako całością w wymiarze fizycznym, psychicznym, emocjonalnym i duchowym. Umów się na konsultację już dziś."
          key="desc"
        />
      </Head>
  <Component {...pageProps} />;
  </>
}

export default MyApp;
