import React from "react";

const Token = () => {
  return (
    <div className="py-[50px] w-full bg-black text-white">
      <div className="container gap-y-7 gap-x-4 flex flex-wrap justify-center md:justify-between items-center">
        <div className="h-40 w-40 bg-primary capitalize text-white rounded-lg flex justify-center flex-col gap-3 text-center">
          <h1 className="text-4xl">0%</h1>
          <p className="text-2xl capitalize">tax</p>
        </div>
        <div className="h-40 w-40 bg-primary capitalize text-white rounded-lg flex justify-center flex-col gap-3 text-center">
          <h1 className="text-4xl">3k$</h1>
          <p className="text-2xl capitalize">starting mc</p>
        </div>
        <div className="h-40 w-40 bg-primary capitalize text-white rounded-lg flex justify-center flex-col gap-3 text-center">
          <h1 className="text-4xl">1Million</h1>
          <p className="text-2xl capitalize">supply</p>
        </div>
        <div className="h-40 w-44 bg-primary capitalize text-white rounded-lg flex justify-center flex-col gap-3 text-center">
          <h1 className="text-4xl">renounced </h1>
          <p className="text-2xl capitalize">ownership</p>
        </div>
      </div>
    </div>
  );
};

export default Token;
