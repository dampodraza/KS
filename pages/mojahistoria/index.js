import React from 'react';
import Layout from '../../components/ui/layout';
import RodzinaWartosci from '../../components/MojaHistoria/rodzinawartosci.component';
import KarieraPasja from '../../components/MojaHistoria/karierapasja.component';
import ZmianyZawody from '../../components/MojaHistoria/zmianyzawody.component';
import ZycieMilosc from '../../components/MojaHistoria/zyciemilosc.component';
import CeleMarzenia from '../../components/MojaHistoria/celemarzenia.component';
import Image from 'next/legacy/image';

const MojaHistoriaPage = () => {
  return (
    <Layout>
      <div className='px-8 md:px-20 pt-12 md:pt-48'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
          <div>
            <p className='mb-8 text-center text-2xl font-spartan-bold md:text-4xl'>
              Rodzina i wartości
            </p>
            <RodzinaWartosci />
            <p className='mb-8 mt-8 text-center  text-2xl font-spartan-bold md:text-4xl'>
              Zmiany
            </p>
            <ZmianyZawody />
            <p className='mb-8 mt-8 text-center  text-2xl font-spartan-bold md:text-4xl'>
              Cele i marzenia
            </p>
            <CeleMarzenia />
          </div>
          <div>
            <p className='mb-8 text-center  text-2xl font-spartan-bold md:text-4xl'>
              Kariera i pasja
            </p>
            <KarieraPasja />
            <p className='mb-8 mt-8 text-center  text-2xl font-spartan-bold md:text-4xl'>
              Miłość
            </p>
            <ZycieMilosc />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MojaHistoriaPage;
