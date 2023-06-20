import React from 'react';
import Link from 'next/link';

const Button = ({ color, text, withIcon = false, withLink = false, link }) => {
  return (
    <div className='relative w-[146px] h-[41px] text-center my-0 mx-auto mt-6 mb-4 lg:w-[190px] lg:h-[50px] xl:w-[283px] xl:h-[60px] z-10'>
      <div
        className={`rounded-md absolute bg-black w-[146px] h-[41px] top-[8px] left-[5px] lg:w-[190px] lg:h-[50px] xl:w-[283px] xl:h-[50px]`}
      ></div>
      {withLink ? (
        <Link href={link} passHref={true}>
          <div
            className={`items-center inline-flex justify-center align-center 
        rounded-md ${color} relative  w-[146px] h-[41px] border
         border-black hover:bg-[#F8F3F0] cursor-pointer lg:w-[190px] lg:h-[50px]	xl:w-[283px] xl:h-[50px]`}
          >
            {withIcon && (
              <svg
                width='12'
                height='14'
                viewBox='0 0 12 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3.23077 0C3.35318 0 3.47057 0.0567306 3.55713 0.157712C3.64368 0.258693 3.69231 0.395653 3.69231 0.538462V1.07692H8.30769V0.538462C8.30769 0.395653 8.35632 0.258693 8.44287 0.157712C8.52943 0.0567306 8.64682 0 8.76923 0C8.89164 0 9.00903 0.0567306 9.09559 0.157712C9.18214 0.258693 9.23077 0.395653 9.23077 0.538462V1.07692H10.6154C10.9826 1.07692 11.3348 1.24712 11.5945 1.55006C11.8541 1.853 12 2.26388 12 2.69231V12.3846C12 12.813 11.8541 13.2239 11.5945 13.5269C11.3348 13.8298 10.9826 14 10.6154 14H1.38462C1.01739 14 0.66521 13.8298 0.405544 13.5269C0.145879 13.2239 0 12.813 0 12.3846V2.69231C0 2.26388 0.145879 1.853 0.405544 1.55006C0.66521 1.24712 1.01739 1.07692 1.38462 1.07692H2.76923V0.538462C2.76923 0.395653 2.81786 0.258693 2.90441 0.157712C2.99097 0.0567306 3.10836 0 3.23077 0ZM8.30769 2.15385V2.69231C8.30769 2.83512 8.35632 2.97208 8.44287 3.07306C8.52943 3.17404 8.64682 3.23077 8.76923 3.23077C8.89164 3.23077 9.00903 3.17404 9.09559 3.07306C9.18214 2.97208 9.23077 2.83512 9.23077 2.69231V2.15385H10.6154C10.7378 2.15385 10.8552 2.21058 10.9417 2.31156C11.0283 2.41254 11.0769 2.5495 11.0769 2.69231V4.30769H0.923077V2.69231C0.923077 2.5495 0.971703 2.41254 1.05826 2.31156C1.14481 2.21058 1.26221 2.15385 1.38462 2.15385H2.76923V2.69231C2.76923 2.83512 2.81786 2.97208 2.90441 3.07306C2.99097 3.17404 3.10836 3.23077 3.23077 3.23077C3.35318 3.23077 3.47057 3.17404 3.55713 3.07306C3.64368 2.97208 3.69231 2.83512 3.69231 2.69231V2.15385H8.30769ZM0.923077 5.38462V12.3846C0.923077 12.5274 0.971703 12.6644 1.05826 12.7654C1.14481 12.8663 1.26221 12.9231 1.38462 12.9231H10.6154C10.7378 12.9231 10.8552 12.8663 10.9417 12.7654C11.0283 12.6644 11.0769 12.5274 11.0769 12.3846V5.38462H0.923077ZM5.53846 7C5.53846 6.85719 5.58709 6.72023 5.67364 6.61925C5.7602 6.51827 5.87759 6.46154 6 6.46154C6.12241 6.46154 6.2398 6.51827 6.32636 6.61925C6.41291 6.72023 6.46154 6.85719 6.46154 7C6.46154 7.14281 6.41291 7.27977 6.32636 7.38075C6.2398 7.48173 6.12241 7.53846 6 7.53846C5.87759 7.53846 5.7602 7.48173 5.67364 7.38075C5.58709 7.27977 5.53846 7.14281 5.53846 7ZM7.84615 6.46154C7.72375 6.46154 7.60635 6.51827 7.5198 6.61925C7.43324 6.72023 7.38462 6.85719 7.38462 7C7.38462 7.14281 7.43324 7.27977 7.5198 7.38075C7.60635 7.48173 7.72375 7.53846 7.84615 7.53846C7.96856 7.53846 8.08596 7.48173 8.17251 7.38075C8.25907 7.27977 8.30769 7.14281 8.30769 7C8.30769 6.85719 8.25907 6.72023 8.17251 6.61925C8.08596 6.51827 7.96856 6.46154 7.84615 6.46154ZM9.23077 7C9.23077 6.85719 9.2794 6.72023 9.36595 6.61925C9.45251 6.51827 9.5699 6.46154 9.69231 6.46154C9.81472 6.46154 9.93211 6.51827 10.0187 6.61925C10.1052 6.72023 10.1538 6.85719 10.1538 7C10.1538 7.14281 10.1052 7.27977 10.0187 7.38075C9.93211 7.48173 9.81472 7.53846 9.69231 7.53846C9.5699 7.53846 9.45251 7.48173 9.36595 7.38075C9.2794 7.27977 9.23077 7.14281 9.23077 7ZM9.69231 8.61539C9.5699 8.61539 9.45251 8.67212 9.36595 8.7731C9.2794 8.87408 9.23077 9.01104 9.23077 9.15385C9.23077 9.29666 9.2794 9.43362 9.36595 9.5346C9.45251 9.63558 9.5699 9.69231 9.69231 9.69231C9.81472 9.69231 9.93211 9.63558 10.0187 9.5346C10.1052 9.43362 10.1538 9.29666 10.1538 9.15385C10.1538 9.01104 10.1052 8.87408 10.0187 8.7731C9.93211 8.67212 9.81472 8.61539 9.69231 8.61539ZM7.38462 9.15385C7.38462 9.01104 7.43324 8.87408 7.5198 8.7731C7.60635 8.67212 7.72375 8.61539 7.84615 8.61539C7.96856 8.61539 8.08596 8.67212 8.17251 8.7731C8.25907 8.87408 8.30769 9.01104 8.30769 9.15385C8.30769 9.29666 8.25907 9.43362 8.17251 9.5346C8.08596 9.63558 7.96856 9.69231 7.84615 9.69231C7.72375 9.69231 7.60635 9.63558 7.5198 9.5346C7.43324 9.43362 7.38462 9.29666 7.38462 9.15385ZM6 8.61539C5.87759 8.61539 5.7602 8.67212 5.67364 8.7731C5.58709 8.87408 5.53846 9.01104 5.53846 9.15385C5.53846 9.29666 5.58709 9.43362 5.67364 9.5346C5.7602 9.63558 5.87759 9.69231 6 9.69231C6.12241 9.69231 6.2398 9.63558 6.32636 9.5346C6.41291 9.43362 6.46154 9.29666 6.46154 9.15385C6.46154 9.01104 6.41291 8.87408 6.32636 8.7731C6.2398 8.67212 6.12241 8.61539 6 8.61539ZM3.69231 9.15385C3.69231 9.01104 3.74093 8.87408 3.82749 8.7731C3.91404 8.67212 4.03144 8.61539 4.15385 8.61539C4.27625 8.61539 4.39365 8.67212 4.4802 8.7731C4.56676 8.87408 4.61538 9.01104 4.61538 9.15385C4.61538 9.29666 4.56676 9.43362 4.4802 9.5346C4.39365 9.63558 4.27625 9.69231 4.15385 9.69231C4.03144 9.69231 3.91404 9.63558 3.82749 9.5346C3.74093 9.43362 3.69231 9.29666 3.69231 9.15385ZM2.30769 8.61539C2.18528 8.61539 2.06789 8.67212 1.98134 8.7731C1.89478 8.87408 1.84615 9.01104 1.84615 9.15385C1.84615 9.29666 1.89478 9.43362 1.98134 9.5346C2.06789 9.63558 2.18528 9.69231 2.30769 9.69231C2.4301 9.69231 2.54749 9.63558 2.63405 9.5346C2.7206 9.43362 2.76923 9.29666 2.76923 9.15385C2.76923 9.01104 2.7206 8.87408 2.63405 8.7731C2.54749 8.67212 2.4301 8.61539 2.30769 8.61539ZM1.84615 11.3077C1.84615 11.1649 1.89478 11.0279 1.98134 10.9269C2.06789 10.826 2.18528 10.7692 2.30769 10.7692C2.4301 10.7692 2.54749 10.826 2.63405 10.9269C2.7206 11.0279 2.76923 11.1649 2.76923 11.3077C2.76923 11.4505 2.7206 11.5875 2.63405 11.6884C2.54749 11.7894 2.4301 11.8462 2.30769 11.8462C2.18528 11.8462 2.06789 11.7894 1.98134 11.6884C1.89478 11.5875 1.84615 11.4505 1.84615 11.3077ZM4.15385 10.7692C4.03144 10.7692 3.91404 10.826 3.82749 10.9269C3.74093 11.0279 3.69231 11.1649 3.69231 11.3077C3.69231 11.4505 3.74093 11.5875 3.82749 11.6884C3.91404 11.7894 4.03144 11.8462 4.15385 11.8462C4.27625 11.8462 4.39365 11.7894 4.4802 11.6884C4.56676 11.5875 4.61538 11.4505 4.61538 11.3077C4.61538 11.1649 4.56676 11.0279 4.4802 10.9269C4.39365 10.826 4.27625 10.7692 4.15385 10.7692ZM5.53846 11.3077C5.53846 11.1649 5.58709 11.0279 5.67364 10.9269C5.7602 10.826 5.87759 10.7692 6 10.7692C6.12241 10.7692 6.2398 10.826 6.32636 10.9269C6.41291 11.0279 6.46154 11.1649 6.46154 11.3077C6.46154 11.4505 6.41291 11.5875 6.32636 11.6884C6.2398 11.7894 6.12241 11.8462 6 11.8462C5.87759 11.8462 5.7602 11.7894 5.67364 11.6884C5.58709 11.5875 5.53846 11.4505 5.53846 11.3077ZM7.84615 10.7692C7.72375 10.7692 7.60635 10.826 7.5198 10.9269C7.43324 11.0279 7.38462 11.1649 7.38462 11.3077C7.38462 11.4505 7.43324 11.5875 7.5198 11.6884C7.60635 11.7894 7.72375 11.8462 7.84615 11.8462C7.96856 11.8462 8.08596 11.7894 8.17251 11.6884C8.25907 11.5875 8.30769 11.4505 8.30769 11.3077C8.30769 11.1649 8.25907 11.0279 8.17251 10.9269C8.08596 10.826 7.96856 10.7692 7.84615 10.7692Z'
                  fill='black'
                />
              </svg>
            )}

            <span
              className={`${
                withIcon && 'ml-2'
              } mt-1 font-spartan-bold text-[10px] uppercase lg:text-[14px] xl:text-[16px]`}
            >
              {text}
            </span>
          </div>
        </Link>
      ) : (
        <div
          className={`items-center inline-flex justify-center align-center 
        rounded-md ${color} relative  w-[146px] h-[41px] border border-black hover:bg-[#F8F3F0] cursor-pointer 
        lg:w-[190px] lg:h-[50px]	xl:w-[283px] xl:h-[50px]`}
        >
          {withIcon && (
            <svg
              width='12'
              height='14'
              viewBox='0 0 12 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.23077 0C3.35318 0 3.47057 0.0567306 3.55713 0.157712C3.64368 0.258693 3.69231 0.395653 3.69231 0.538462V1.07692H8.30769V0.538462C8.30769 0.395653 8.35632 0.258693 8.44287 0.157712C8.52943 0.0567306 8.64682 0 8.76923 0C8.89164 0 9.00903 0.0567306 9.09559 0.157712C9.18214 0.258693 9.23077 0.395653 9.23077 0.538462V1.07692H10.6154C10.9826 1.07692 11.3348 1.24712 11.5945 1.55006C11.8541 1.853 12 2.26388 12 2.69231V12.3846C12 12.813 11.8541 13.2239 11.5945 13.5269C11.3348 13.8298 10.9826 14 10.6154 14H1.38462C1.01739 14 0.66521 13.8298 0.405544 13.5269C0.145879 13.2239 0 12.813 0 12.3846V2.69231C0 2.26388 0.145879 1.853 0.405544 1.55006C0.66521 1.24712 1.01739 1.07692 1.38462 1.07692H2.76923V0.538462C2.76923 0.395653 2.81786 0.258693 2.90441 0.157712C2.99097 0.0567306 3.10836 0 3.23077 0ZM8.30769 2.15385V2.69231C8.30769 2.83512 8.35632 2.97208 8.44287 3.07306C8.52943 3.17404 8.64682 3.23077 8.76923 3.23077C8.89164 3.23077 9.00903 3.17404 9.09559 3.07306C9.18214 2.97208 9.23077 2.83512 9.23077 2.69231V2.15385H10.6154C10.7378 2.15385 10.8552 2.21058 10.9417 2.31156C11.0283 2.41254 11.0769 2.5495 11.0769 2.69231V4.30769H0.923077V2.69231C0.923077 2.5495 0.971703 2.41254 1.05826 2.31156C1.14481 2.21058 1.26221 2.15385 1.38462 2.15385H2.76923V2.69231C2.76923 2.83512 2.81786 2.97208 2.90441 3.07306C2.99097 3.17404 3.10836 3.23077 3.23077 3.23077C3.35318 3.23077 3.47057 3.17404 3.55713 3.07306C3.64368 2.97208 3.69231 2.83512 3.69231 2.69231V2.15385H8.30769ZM0.923077 5.38462V12.3846C0.923077 12.5274 0.971703 12.6644 1.05826 12.7654C1.14481 12.8663 1.26221 12.9231 1.38462 12.9231H10.6154C10.7378 12.9231 10.8552 12.8663 10.9417 12.7654C11.0283 12.6644 11.0769 12.5274 11.0769 12.3846V5.38462H0.923077ZM5.53846 7C5.53846 6.85719 5.58709 6.72023 5.67364 6.61925C5.7602 6.51827 5.87759 6.46154 6 6.46154C6.12241 6.46154 6.2398 6.51827 6.32636 6.61925C6.41291 6.72023 6.46154 6.85719 6.46154 7C6.46154 7.14281 6.41291 7.27977 6.32636 7.38075C6.2398 7.48173 6.12241 7.53846 6 7.53846C5.87759 7.53846 5.7602 7.48173 5.67364 7.38075C5.58709 7.27977 5.53846 7.14281 5.53846 7ZM7.84615 6.46154C7.72375 6.46154 7.60635 6.51827 7.5198 6.61925C7.43324 6.72023 7.38462 6.85719 7.38462 7C7.38462 7.14281 7.43324 7.27977 7.5198 7.38075C7.60635 7.48173 7.72375 7.53846 7.84615 7.53846C7.96856 7.53846 8.08596 7.48173 8.17251 7.38075C8.25907 7.27977 8.30769 7.14281 8.30769 7C8.30769 6.85719 8.25907 6.72023 8.17251 6.61925C8.08596 6.51827 7.96856 6.46154 7.84615 6.46154ZM9.23077 7C9.23077 6.85719 9.2794 6.72023 9.36595 6.61925C9.45251 6.51827 9.5699 6.46154 9.69231 6.46154C9.81472 6.46154 9.93211 6.51827 10.0187 6.61925C10.1052 6.72023 10.1538 6.85719 10.1538 7C10.1538 7.14281 10.1052 7.27977 10.0187 7.38075C9.93211 7.48173 9.81472 7.53846 9.69231 7.53846C9.5699 7.53846 9.45251 7.48173 9.36595 7.38075C9.2794 7.27977 9.23077 7.14281 9.23077 7ZM9.69231 8.61539C9.5699 8.61539 9.45251 8.67212 9.36595 8.7731C9.2794 8.87408 9.23077 9.01104 9.23077 9.15385C9.23077 9.29666 9.2794 9.43362 9.36595 9.5346C9.45251 9.63558 9.5699 9.69231 9.69231 9.69231C9.81472 9.69231 9.93211 9.63558 10.0187 9.5346C10.1052 9.43362 10.1538 9.29666 10.1538 9.15385C10.1538 9.01104 10.1052 8.87408 10.0187 8.7731C9.93211 8.67212 9.81472 8.61539 9.69231 8.61539ZM7.38462 9.15385C7.38462 9.01104 7.43324 8.87408 7.5198 8.7731C7.60635 8.67212 7.72375 8.61539 7.84615 8.61539C7.96856 8.61539 8.08596 8.67212 8.17251 8.7731C8.25907 8.87408 8.30769 9.01104 8.30769 9.15385C8.30769 9.29666 8.25907 9.43362 8.17251 9.5346C8.08596 9.63558 7.96856 9.69231 7.84615 9.69231C7.72375 9.69231 7.60635 9.63558 7.5198 9.5346C7.43324 9.43362 7.38462 9.29666 7.38462 9.15385ZM6 8.61539C5.87759 8.61539 5.7602 8.67212 5.67364 8.7731C5.58709 8.87408 5.53846 9.01104 5.53846 9.15385C5.53846 9.29666 5.58709 9.43362 5.67364 9.5346C5.7602 9.63558 5.87759 9.69231 6 9.69231C6.12241 9.69231 6.2398 9.63558 6.32636 9.5346C6.41291 9.43362 6.46154 9.29666 6.46154 9.15385C6.46154 9.01104 6.41291 8.87408 6.32636 8.7731C6.2398 8.67212 6.12241 8.61539 6 8.61539ZM3.69231 9.15385C3.69231 9.01104 3.74093 8.87408 3.82749 8.7731C3.91404 8.67212 4.03144 8.61539 4.15385 8.61539C4.27625 8.61539 4.39365 8.67212 4.4802 8.7731C4.56676 8.87408 4.61538 9.01104 4.61538 9.15385C4.61538 9.29666 4.56676 9.43362 4.4802 9.5346C4.39365 9.63558 4.27625 9.69231 4.15385 9.69231C4.03144 9.69231 3.91404 9.63558 3.82749 9.5346C3.74093 9.43362 3.69231 9.29666 3.69231 9.15385ZM2.30769 8.61539C2.18528 8.61539 2.06789 8.67212 1.98134 8.7731C1.89478 8.87408 1.84615 9.01104 1.84615 9.15385C1.84615 9.29666 1.89478 9.43362 1.98134 9.5346C2.06789 9.63558 2.18528 9.69231 2.30769 9.69231C2.4301 9.69231 2.54749 9.63558 2.63405 9.5346C2.7206 9.43362 2.76923 9.29666 2.76923 9.15385C2.76923 9.01104 2.7206 8.87408 2.63405 8.7731C2.54749 8.67212 2.4301 8.61539 2.30769 8.61539ZM1.84615 11.3077C1.84615 11.1649 1.89478 11.0279 1.98134 10.9269C2.06789 10.826 2.18528 10.7692 2.30769 10.7692C2.4301 10.7692 2.54749 10.826 2.63405 10.9269C2.7206 11.0279 2.76923 11.1649 2.76923 11.3077C2.76923 11.4505 2.7206 11.5875 2.63405 11.6884C2.54749 11.7894 2.4301 11.8462 2.30769 11.8462C2.18528 11.8462 2.06789 11.7894 1.98134 11.6884C1.89478 11.5875 1.84615 11.4505 1.84615 11.3077ZM4.15385 10.7692C4.03144 10.7692 3.91404 10.826 3.82749 10.9269C3.74093 11.0279 3.69231 11.1649 3.69231 11.3077C3.69231 11.4505 3.74093 11.5875 3.82749 11.6884C3.91404 11.7894 4.03144 11.8462 4.15385 11.8462C4.27625 11.8462 4.39365 11.7894 4.4802 11.6884C4.56676 11.5875 4.61538 11.4505 4.61538 11.3077C4.61538 11.1649 4.56676 11.0279 4.4802 10.9269C4.39365 10.826 4.27625 10.7692 4.15385 10.7692ZM5.53846 11.3077C5.53846 11.1649 5.58709 11.0279 5.67364 10.9269C5.7602 10.826 5.87759 10.7692 6 10.7692C6.12241 10.7692 6.2398 10.826 6.32636 10.9269C6.41291 11.0279 6.46154 11.1649 6.46154 11.3077C6.46154 11.4505 6.41291 11.5875 6.32636 11.6884C6.2398 11.7894 6.12241 11.8462 6 11.8462C5.87759 11.8462 5.7602 11.7894 5.67364 11.6884C5.58709 11.5875 5.53846 11.4505 5.53846 11.3077ZM7.84615 10.7692C7.72375 10.7692 7.60635 10.826 7.5198 10.9269C7.43324 11.0279 7.38462 11.1649 7.38462 11.3077C7.38462 11.4505 7.43324 11.5875 7.5198 11.6884C7.60635 11.7894 7.72375 11.8462 7.84615 11.8462C7.96856 11.8462 8.08596 11.7894 8.17251 11.6884C8.25907 11.5875 8.30769 11.4505 8.30769 11.3077C8.30769 11.1649 8.25907 11.0279 8.17251 10.9269C8.08596 10.826 7.96856 10.7692 7.84615 10.7692Z'
                fill='black'
              />
            </svg>
          )}

          <span
            className={`${
              withIcon && 'ml-2'
            } mt-1 font-spartan-bold text-[10px] uppercase lg:text-[14px] xl:text-[16px]`}
          >
            {text}
          </span>
        </div>
      )}
    </div>
  );
};

export default Button;
