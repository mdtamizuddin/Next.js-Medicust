import { useEffect, useState } from "react";
import Doctorscard from "./card/DoctorsCard";

const Doctors = () => {
    const [doctor, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mdtamizuddin/Next.js-Medicust/main/pages/api/doctors.json').then(res => res.json()).then(data => setDoctors(data))
    }, []);
    console.log(doctor)
    return (
        <div>
            <section className='container mx-auto my-10 pt-10'>
                <h1 className='text-3xl lg:text-5xl mt-10 lg:mt-0 font-bold text-center text-neutral'>Professional Care provider</h1>
                <p className='text-mini text-center mt-3'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat <br /> sunt culpa officia deserunt mollit anim est laborum</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
                    {doctor?.map((doctor, index) => <Doctorscard key={index} doctor={doctor} />)}
                    <div className='flex flex-col justify-center items-center bg-primary rounded-3xl ld:py-0 py-10 cursor-pointer'>
                        <h2 className='text-white text-center font-semibold text-2xl'>Join our team</h2>
                        <p className='text-center mt-2 text-white'>Lorem ipsum dolor amet <br /> consectetur adipiscing elit <br /> sed eiusmod tempor</p>
                        <button className='btn text-white rounded-full btn-secondary mt-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Doctors;

