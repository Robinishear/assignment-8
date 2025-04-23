import React, { useEffect, useState } from 'react';

const LawyersList = () => {
    const [lawyers, setLawyers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await fetch('/file1.json');
                const data1 = await response1.json();

                const response2 = await fetch('/file2.json');
                const data2 = await response2.json();

                setLawyers([...data1, ...data2]); 
            } catch (error) {
                console.error('Error loading JSON:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lawyers.map(lawyer => (
                <div
                    key={lawyer.registration_number}
                    className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col"
                >
                    <div className="p-4 flex-grow">
                        <div className="flex justify-center mb-4">
                            <img
                                className="w-24 h-24 object-cover rounded-2xl"
                                src={lawyer.image}
                                alt={lawyer.name}
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center">{lawyer.name}</h3>
                            <p className="text-sm text-gray-600 mb-2 text-center">{lawyer.specialty}</p>
                            <p className="text-sm text-gray-500 text-center">{lawyer.experience} Experience</p>
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-2">
                                <span className="text-xl">®</span>
                                <span>Reg No: {lawyer.registration_number}</span>
                            </div>
                            <div className="flex justify-center mt-2">
                                Availability: {lawyer.available_weekday.join(', ')}
                            </div>
                            <p className="text-lg text-blue-600 text-center mt-2">Fees: ${lawyer.fees}</p>
                        </div>
                    </div>
                    <button className="w-full text-blue-600 border-t border-gray-200 font-medium py-2 rounded-b-2xl hover:bg-blue-600 hover:text-white transition duration-300">
                        View Details
                    </button>
                </div>
            ))}
        </div>
    );
};

export default LawyersList;