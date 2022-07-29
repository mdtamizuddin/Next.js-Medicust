import Link from "next/link";
import Doctors from "../components/Doctors";


const about = () => {
    return (
        <div>
            <header
                style={{ backgroundImage: `url('https://i.ibb.co/dgGvgJ8/hero.png')` }}
                className='w-full lg:h-72 h-auto bg-cover bg-right flex flex-col justify-center'>
                <div className="flex flex-col justify-center container mx-auto">
                    <h1 className="text-5xl font-bold text-neutral">About Us</h1>
                    <div class="text-sm breadcrumbs mt-5">
                        <ul>
                            <li>
                                <Link href={'/'}>
                                    <a className="text-neutral text-mini">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about'}>
                                    <a className="text-neutral text-mini">About</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <Doctors />
        </div>
    );
}

export default about;

