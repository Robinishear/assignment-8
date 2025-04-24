import React from 'react';
import { Link, NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <>
  
        <div className='max-w-7xl mx-auto'> 
        
            <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100">
            
            <label className="swap swap-flip text-9xl">
  
  <input type="checkbox" />

  <div className="swap-on text-3xl font-bold text-cyan-300">Error <span> <img src="https://i.ibb.co.com/zTxSxgpK/download.jpg"  className='w-19 h-19 object-cover rounded'/> </span> </div>
  
  <img 
                    src="https://i.ibb.co.com/HfCbVMYD/electrocuted-caveman-animation-404-error-page.gif"
                    alt="Error 404: Page Not Found"
                    className="w-[400px] mt-6 rounded-lg  shadow-lg" 
                />
                <h1 className="text-8xl font-extrabold flex text-center bg-gradient-to-r justify-center from-pink-500 via-purple-900 to-indigo-100 bg-clip-text text-transparent">
  4<span className="animate-bounc"> <img src="https://i.ibb.co.com/4wDHJ9Sf/3e2cfee2eb4ed31f4325598ee53ece71.gif" className='w-19 h-19 object-cover rounded-full' /> </span>4
</h1>

</label>
              

               
                <div role="alert" className="alert alert-error px-25 py-8 mt-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-cyan-300 w-6 inline-block stroke-current mr-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    
                    {/* Main Error Text */}
                    <span className="font-bold text-2xl text-cyan-300">Error! Task failed successfully.</span>
                    <div className="flex justify-center space-x-2 mt-2 text-cyan-300">
                        <span className="loading loading-ring loading-xs"></span>
                        <span className="loading loading-ring loading-sm"></span>
                        <span className="loading loading-ring loading-md"></span>
                        <span className="loading loading-ring loading-lg"></span>
                        <span className="loading loading-ring loading-xl"></span>
                    </div>
                </div>
                <div className="mt-8 py-2">
                <NavLink className="relative px-1 inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                    {/* Button Hover Animation */}
                    <span className="absolute w-0 h-0 transition-all duration-2000 ease-out bg-green-200 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    
                   
                    <div className="tooltip">
                        <div className="tooltip-content">
                            <div className=" bg-gray-800  text-2xl font-black">Wow!</div>
                        </div>
                        <NavLink to="/" className="text-xl font-bold text-cyan-300">Home page</NavLink>
                    </div>
                  
                </NavLink>
            </div>
            </div>
            
        </div>
        </>
    );
};

export default ErrorPage;
