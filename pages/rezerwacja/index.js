import React, { useEffect } from 'react';
import Layout from '../../components/ui/layout';
import Cal, { getCalApi } from '@calcom/embed-react';

const Rezerwacja = () => {
    useEffect(() => {
        (async function () {
          const Cal = await getCalApi();
          Cal("preload", {
            calLink: 'damian-podraza-f6c5dg'
          });
          Cal("on", {
            action: "__windowLoadComplete",
            callback: (e) => {
              console.log('load complete');
            }
          });
        })();
      }, []);

  return (
    <Layout>
      <div className='pt-32 pb-16'>
    <Cal calLink='damian-podraza-f6c5dg'></Cal>
      </div>
    </Layout>
  );
};

export default Rezerwacja;
