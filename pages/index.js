import React from 'react';
import CzegoPotrzebujesz from '../components/CzegoPotrzebujesz/czegopotrzebujesz.component';
import MojaHistoria from '../components/MojaHistoria/mojahistoria.component';
import Poczytaj from '../components/Poczytaj/poczytaj.component';
import Quote from '../components/Quote/quote.component';
import DlaczegoJa from '../components/DlaczegoJa/dlaczegoJa.component';
import Layout from '../components/ui/layout';
import FrontSection from '../components/FrontSection/frontsection.component';
import IntroSection from '../components/IntroSection/introSection.component';
import Opinions from '../components/DlaczegoJa/opinions.component';
import Posluchaj from '../components/Posluchaj/posluchaj.component';

export default function Home({ postDesc, postImage, postTitle, postLink }) {
  return (
    <Layout noPadding={true}>
      <FrontSection />
      <div className='grid grid-cols-1 gap-16 pt-10 pb-10 md:mt-16 md:px-32 md:pb-16'>
        <IntroSection />
        <DlaczegoJa />
        <Opinions />
        <CzegoPotrzebujesz />
        <MojaHistoria />
        <Poczytaj
          postImage={postImage}
          postDesc={postDesc}
          postTitle={postTitle}
          postLink={postLink}
        />
        <Posluchaj />
        <Quote />
      </div>
    </Layout>
  );
}
// TODO: add next seo on each page
export async function getStaticProps() {
  let post;
  try {
    post = await fetch('https://blog.podobro.pl/wp-json/wp/v2/posts?per_page=1')
      .then((res) => {
        return res.json();
      })
      .then();
  } catch (err) {
    console.log('err', err);
  }

  return {
    props: {
      postDesc: post[0].excerpt.rendered,
      postImage: post[0].yoast_head_json.og_image[0].url || '',
      postTitle: post[0].title.rendered,
      postLink: post[0].link,
    },
  };
}
