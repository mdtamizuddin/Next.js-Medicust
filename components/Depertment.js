import DepertmentCard from "./Cards";
import dental from './images/icon/dental.png'
import cradiology from './images/icon/cradiology.png'
import gastrology from './images/icon/gastrology.png'
import gynecology from './images/icon/gynecology.png'
import neurology from './images/icon/neurology.png'
import plastic from './images/icon/plastic-surgery.png'
import opthalmology from './images/icon/opthalmology.png'
import pediatrics from './images/icon/pediatrics.png'
const Depertment = () => {
    return (
        <div className="py-14">
            <section className='container mx-auto my-10'>
                <h1 className='text-center text-5xl font-bold text-neutral'>Our All Department</h1>
                <p className='text-center mt-5 text-mini'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat <br /> sunt culpa officia deserunt mollit anim est laborum.</p>


                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-14 gap-10">
                    <DepertmentCard icon={dental} name={"Dental"}/>
                    <DepertmentCard icon={cradiology} name={"Cradiology"}/>
                    <DepertmentCard icon={gastrology} name={"Gastrology"}/>
                    <DepertmentCard icon={gynecology} name={"Gynecology"}/>
                    <DepertmentCard icon={neurology} name={"Neurology"}/>
                    <DepertmentCard icon={plastic} name={"Plastic Surgery"}/>
                    <DepertmentCard icon={opthalmology} name={"Opthalmology"}/>
                    <DepertmentCard icon={pediatrics} name={"Pediatrics"}/>
                </div>
            </section>

        </div>
    );
}

export default Depertment;