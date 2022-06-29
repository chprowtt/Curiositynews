import React from "react";

function Home() {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'> 
  
      <div className= " px-8 py-16 mb-0 ">
        <div className="border-4 border-yellow-300 max-w-2xl justify-center">
          <h2 className="text-2xl sm:text-7xl font-bold text-[#ececec] py-10 x position:absolute">
            Hi and Welcome
          </h2>
          <h1 className="text-2xl sm:text-2xl font-bold text-[#ffffff] ">
            Here we share the latest news about{" "}
          </h1>
          <p className="text-1xl sm:text-1xl font-bold text-[#8892b0] py-5">
            The world is pretty weird...in fact, it's a whole lot weirder than
            you think. If you haven't learned something new today, you're
            missing out. Curiosity is the place to immerse yourself in weird news,
            fun facts and cool tidbits on history, entertainment, science, and
            plenty more.
          </p>
          <button className="bg-yellow-300 py-2 hover:scale-125 top-10  px-4 text-lg rounded-md text-white font-bold">Explore different topics</button>
        </div>
        </div>
      </div>
     
  );
}

export default Home;
