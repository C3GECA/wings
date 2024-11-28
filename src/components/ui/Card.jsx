import React from 'react';

const Card = () => {
  return (
    <a href="#" className="group relative block max-w-screen-sm mx-auto sm:h-60 lg:h-72">
      <span className="absolute inset-0 border-2 border-dashed border-black" />
      <div className="relative flex h-full w-60 transform items-end border-2 border-black bg-white transition-transform group-hover:scale-105">
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <h2 className="mt-4 text-xl font-medium sm:text-2xl">Hon. G. Sreekanth Sir</h2>
        </div>
        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">Hon. G. Sreekanth Sir</h3>
          <p className="mt-4 text-sm sm:text-base">
            Commissioner, Chh. Sambhajinagar Municipal Corporation & CEO, CSSCDCL (Chh. Sambhajinagar Smart City Development Corporation Limited)
          </p>
          <p className="mt-8 font-bold">Read more</p>
        </div>
      </div>
    </a>
  );
}

export default Card;