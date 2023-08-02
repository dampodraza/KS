import React from 'react';
import Head from 'next/head';
import Navigation from '../Navigation/navigation.component';
import Footer from '../Footer/footer.component';
import PageWrapper from './pageWrapper';

const Layout = ({ children, noPadding = false }) => {
  return (
    <div className='bg-[#DFD8D7]'>
      <main>
        <Head>
          <title>Kasia Podraza | Psychologia, zdrowie i coaching</title>
          <meta name='description' content='Pracuję z drugim człowiekiem jako całością w wymiarze fizycznym, psychicznym, emocjonalnym i duchowym. Umów się na konsultację już dziś.' />
          <meta property="og:image" content="/landing-facebook.png" />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Navigation />
        <PageWrapper noPadding={noPadding}>{children}</PageWrapper>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
