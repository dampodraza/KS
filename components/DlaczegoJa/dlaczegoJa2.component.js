import React from 'react';
import IconBlock from '../IconBlock/iconblock.component';
import Carousel from '../Carousel/carousel';
import { coachingWsparcie, jogaZdrowie } from '../../content/coRobie';
const DlaczegoJa2 = ({isMobile}) => {
    return (
        <section className="flex bg-[#F8F3F0] justify-center items-center">
            <>
              <div className="flex flex-col justify-center items-center">
                  {coachingWsparcie.map(({ iconName, title, description }, i) => (
                    <IconBlock
                      key={i}
                      iconName={iconName}
                      title={title}
                      description={description}
                    />
                  ))}
                  {jogaZdrowie.map(({ iconName, title, description }, i) => (
                    <IconBlock
                      key={i}
                      iconName={iconName}
                      title={title}
                      description={description}
                    />
                  ))}
                <div className="flex flex-row justify-center mt-10	">
                  <div>
                    {" "}
                    <img src="/icons/quote.svg" alt="quote" />
                  </div>
                </div>
                <div className="mb-10">
                  <Carousel />
                </div>
              </div>
            </>
        </section>
    )
}

export default DlaczegoJa2;