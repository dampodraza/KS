import React, { useEffect } from 'react';
import Layout from '../../components/ui/layout';
import Cal, { getCalApi } from '@calcom/embed-react';

const Rezerwacja = () => {
  useEffect(() => {
    (async function () {
      const Cal = await getCalApi();
      Cal('preload', {
        calLink: 'kasiapodraza',
      });
      Cal('on', {
        action: '__windowLoadComplete',
        callback: (e) => {
          console.log('load complete');
        },
      });
    })();
  }, []);

  return (
    <Layout noPadding>
      <div className='pt-32 md:pb-16 md:pt-32 md:px-8 mt-[-125px] md:mt-0'>
        <Cal calLink='kasiapodraza'></Cal>
      </div>
    </Layout>
  );
};

export default Rezerwacja;
