import logo from './images/Logo.png'
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    const navs = ["home", "about", "department", "pages", "blog", "contact"]
    return (
        <div className='bg-primary'>
            <div className="navbar container mx-auto pb-4 pt-3 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-primary rounded-box w-52">
                            {
                                navs.map(nav => <li key={nav}>
                                    <Link href={nav}>
                                        <a className='capitalize'>{nav}</a>
                                    </Link>
                                </li>)
                            }
                            <button className="btn text-white btn-neutral">Get Appointment</button>
                        </ul>
                    </div>
                    <a className="btn btn-ghost  normal-case text-xl">
                        <Image style={{ width: '80%' }} src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            navs.map(nav => <li key={nav}>
                                <Link href={nav}>
                                    <a className='capitalize'>{nav}</a>
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>
                <div className="navbar-end ">
                    <button className="btn hidden lg:block text-white btn-neutral">Get Appointment</button>
                </div>
            </div>

        </div>
    );
}

export default Navbar;