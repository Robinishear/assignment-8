import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { LawyerData } from "../../../Context/ContextProvider/ContextProvider";
import toast from "react-hot-toast";

const LawyerDetails = () => {
  const { id } = useParams();

  const { lawyers } = useContext(LawyerData);

  const singleLawyer = lawyers.find(lawyer => lawyer.registration_number === id);
  const navigate = useNavigate()

const handleAppointment =()=> {
    toast.success('appointment Booked')
    setTimeout(() => {

        navigate('/My-Bookings')
    }, 200);
}

  return <div>
    <div className='text-center max-w-7xl mx-auto  bg-blue-50 py-12 my-8 rounded-2xl'>  
      <h1 className="text-2xl font-bold py-3">Lawyer.s Profile Details</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis <br/>. turpis imperdiet mattis donec dignissim volutpat.</p>
    </div>
      
      <div className='text-center max-w-7xl mx-auto  bg-blue-50 py-12 my-8 rounded-2xl'>
      <div className="flex">
                            <img
                                className="w-24 h-24 object-cover rounded-2xl mx-10 my-10"
                                // src="image"
                                // src="image"
                            />
                            <div className="p-4 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                                            
                                        </span>
                                        <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                                           
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mb-1"></h3>

                                    {/* Education (first line only) */}
                                    <p className="text-sm text-gray-600 mb-2">
                                       
                                    </p>

                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <span className="text-xl">tgyh</span>
                                        <span>jj</span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                 
                                </div>
                            </div>
                        </div>
      </div>
    
    
      <div className="text-center py-10 bg-blue-50  max-w-7xl mx-auto rounded-2xl">
        <div className="py-3 text-xl font-bold">
          <h1>Book an Appointment</h1>
        </div>
      <div className="flex justify-between items-center  py-6 mx-3 ">
        <h1>Availability </h1>
        <span className="bg-blue-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
        Lawyer  Available Today
    </span>
      </div>
  <div role="alert" className="alert bg-green-100 mx-15 rounded-b-full text-amber-400 ml-2 shadow-none">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
      <path strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>
      Due to high patient volume, we are currently accepting appointments for today only.
      We appreciate your understanding and cooperation.
    </span>
  </div>

  {/* Just added mt-4 here */}
  <div className="mx-10 mt-4 py-1 text-white rounded-full bg-green-600 shadow-none">
    <button className="btn py-3 bg-green-600 text-white rounded-2xl" onClick={handleAppointment}>
      Book Appointment Now
    </button>
  </div>
</div>

  </div>;
};

export default LawyerDetails;
