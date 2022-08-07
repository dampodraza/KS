import React from 'react';
const SkeletonCard = () => {
    return (
      <>
        <div className="flex w-full flex-1 flex-col items-center ">
          <div className=" w-full animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6 ">
            <div className="flex flex-col space-y-2">
              <div className="h-60 w-12/12 rounded-md bg-gray-300 "></div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default SkeletonCard;