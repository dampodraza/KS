import Carousel from '../Carousel/carousel';
import seeTheGood from '../../public/images/see-the-good.jpg';
import quoteIcon from '../../public/icons/quote.svg';
import Image from 'next/image';

const Opinions = () => {
  return (
    // <section className="lg:pt-16 mb-8 md:mb-16">
    <section className=''>
      <div className='flex flex-row items-center justify-center xl:justify-between '>
        <Image
          src={seeTheGood}
          alt='see-the-good'
          width={511}
          height={519}
          className='hidden rounded-[35px] xl:block'
        />
        <div className='flex flex-row justify-center'>
          <div className='item-center flex flex-col justify-center'>
            <div className='item-center flex justify-center'>
              {' '}
              <Image src={quoteIcon} alt='quote' width={50} />
            </div>

            <div >
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opinions;
