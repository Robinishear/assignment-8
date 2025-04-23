import React from 'react';
import { Link, NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <>
    <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        <div className='flex '>
        <img src="https://i.ibb.co.com/dsqrK5Zy/logo.png" className='w-8 h-8' />
        <a className="font-bold text-2xl">Law.BD</a>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
                <NavLink to="Home">Home</NavLink>
                </li>
            <li>
                <NavLink to="lawyer-details">My-Bookings</NavLink>
            </li>
            <li>
                <NavLink to="">Blogs</NavLink>
                </li>
            <li>
                <NavLink to="ErrorPage">Contact Us</NavLink>
                </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <button className="btn bg-green-600 text-white rounded-4xl">Contact Now</button>
        </div>
      </div>
        
        <div className='max-w-7xl mx-auto'> 
        
            <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100">
            
            <label className="swap swap-flip text-9xl">
  
  <input type="checkbox" />

  <div className="swap-on text-3xl font-bold text-blue-800">Error🙆</div>
  <img 
                    src="https://i.ibb.co/S4wMnpHw/404-error-page-not-found.jpg"
                    alt="Error 404: Page Not Found"
                    className="w-[400px] mt-6 rounded-lg  shadow-lg" 
                />
</label>
              

               
                <div role="alert" className="alert alert-error px-25 py-8 mt-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block stroke-current mr-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    
                    {/* Main Error Text */}
                    <span className="font-bold text-2xl">Error! Task failed successfully.</span>
                    <div className="flex justify-center space-x-2 mt-2">
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
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-200 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    
                   
                    <div className="tooltip">
                        <div className="tooltip-content">
                            <div className="animate-bounce bg-gray-800 -rotate-10 text-2xl font-black">Wow!</div>
                        </div>
                        <NavLink to="" className="text-xl font-bold">Home page</NavLink>
                    </div>
                  
                </NavLink>
            </div>
            </div>
               <footer className="footer footer-horizontal py-3 text-white bg-black footer-center text-base-content rounded p-1">
               <div className='flex '>
                   <img src="https://i.ibb.co.com/dsqrK5Zy/logo.png" className='w-8 h-8' />
                   <a className="font-bold text-2xl">Law.BD</a>
                   </div>
             <div className="navbar-center hidden lg:flex">
                      <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="Home">Home</NavLink>
                            </li>
                        <li>
                            <NavLink to="">My-Bookings</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Blogs</NavLink>
                            </li>
                        <li>
                            <NavLink to="ErrorPage">Contact Us</NavLink>
                            </li>
                      </ul>
                    </div>
             <nav>
               <div className="grid grid-flow-col gap-4">
                 <NavLink to={''}>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="fill-current">
                     <path
                       d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                   </svg>
                 </NavLink>
                 <NavLink to={'https://www.youtube.com/'}>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="fill-current">
                     <path
                       d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                   </svg>
                 </NavLink>
                 <NavLink to={'https://web.facebook.com/md.robin.ahmed.548869'}>
                   <svg
                     xmlns="http://www.w3.org/2000/sv"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="fill-current">
                     <path
                       d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                   </svg>
                 </NavLink>
               </div>
             </nav>
           </footer>
        </div>
        </>
    );
};

export default ErrorPage;
