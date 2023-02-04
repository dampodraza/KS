import React from 'react';
import Layout from '../../components/ui/layout';
import RodzinaWartosci from '../../components/MojaHistoria/rodzinawartosci.component';
import KarieraPasja from '../../components/MojaHistoria/karierapasja.component';
import ZmianyZawody from '../../components/MojaHistoria/zmianyzawody.component';
import ZycieMilosc from '../../components/MojaHistoria/zyciemilosc.component';
import CeleMarzenia from '../../components/MojaHistoria/celemarzenia.component';

const MojaHistoriaPage = () => {
  return (
    <Layout>
      <div className='px-60 pt-48'>
        <p className='font-spartan-bold mb-2 md:text-6xl text-center'>
          Rodzina i wartości
        </p>
        <RodzinaWartosci />
        <KarieraPasja />
        <ZmianyZawody />
        <ZycieMilosc />
        <CeleMarzenia />
      </div>
    </Layout>
  );
};

export default MojaHistoriaPage;
