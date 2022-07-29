import Image from "next/image";
import logo from '../components/images/logoFooter.png'
import facebook from '../components/images/icon/facebook.png'
import skype from '../components/images/icon/twitter.png'
import twitter from '../components/images/icon/skype.png'
const Footer = () => {
    return (
        <div
            className="bg-cover  bg-center flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url('https://i.ibb.co/nQYVp9M/footerBg.png')`
            }}
        >
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 py-14">
                <div>
                    <Image src={logo} alt="Logo Footer" />
                    <p className="text-gray-300 mt-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, repellendus illo officia animi mollitia numquam?
                    </p>
                    <div className="mt-6 cursor-pointer" >
                        <span>
                            <Image src={facebook} alt="" />
                        </span>
                        <span className="mx-5">
                            <Image src={twitter} alt="" />
                        </span>
                        <span>
                            <Image src={skype} alt="" />
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-white">Department</h2>
                    <a className="mt-5 text-white " href="#">Family Medicine</a>
                    <a className="mt-3 text-white" href="#">Woman's Health</a>
                    <a className="mt-3 text-white" href="#">Optician</a>
                    <a className="mt-3 text-white" href="#">Pediatrics</a>
                    <a className="mt-3 text-white" href="#">Dermatology</a>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-white">Quick Link</h2>
                    <a className="mt-5 text-white " href="#">Our Doctors</a>
                    <a className="mt-3 text-white" href="#">Appointment</a>
                    <a className="mt-3 text-white" href="#">Blog Post</a>
                    <a className="mt-3 text-white" href="#">Shop Product</a>
                    <a className="mt-3 text-white" href="#">Contact Us</a>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-white">Blog Post</h2>
                    <p className="text-secondary mt-5">22.05.2019</p>
                    <p className="mt-2 text-white">Excepteur sint occaecat <br /> cupidatat non proident,<br />sunt in culpa.</p>

                    <p className="text-secondary mt-5">22.05.2019</p>
                    <p className="mt-2 text-white">Excepteur sint occaecat <br /> cupidatat non proident,<br />sunt in culpa.</p>
                </div>

            </div>
            <footer className="border-t border-primary py-5 w-full">
                <p className="text-center text-white">Copyright  2019  All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;