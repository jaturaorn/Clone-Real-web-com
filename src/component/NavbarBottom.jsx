// react-icons
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidMapAlt } from 'react-icons/bi';
import { AiOutlineClockCircle } from "react-icons/ai";

// react-router
import { Link } from "react-router-dom";

const NavbarBottom = () => {
  return (
    <nav className="w-full h-14 flex justify-between shadow-md bg-[#FFFFFF]">
        {/* box-left */}
        <div className="flex place-items-center gap-x-2">
            <FaLocationDot className="pl-3 text-3xl" />
            <h2 className="text-xl text-[#5A6EE6]">2B</h2>
            {/* box-in-mid */}
            <div className="flex max-md:hidden">
            <h2 className="text-xl text-[#5A6EE6]">, HEBAOYU CHIAYI ,</h2>
            </div>
            {/* box-in-right */}
            <div className="flex max-sm:hidden">
            <h2 className="text-xl text-[#5A6EE6]">Taiwan</h2>
            </div>
        </div>
        {/* box-link-mid */}
        <div className="flex place-items-center max-sm:mr-2">
            <ul className="flex justify-center gap-x-4 cursor-pointer">
                <li className="flex items-center hover:text-[#5A6EE6]">
                    <BiSolidMapAlt className="mx-1" />
                    <Link to={"/"} className="text-xl">Map</Link>
                </li>
                <li className="hover:text-[#5A6EE6] active:text-[#5A6EE6]">
                    <Link to={"/"} className="text-xl">Overview</Link>
                </li>
                <li className="hover:text-[#5A6EE6]">
                    <Link to={"/ACSLD"} className="text-xl">AC SLD</Link>
                </li>
                <li className="hover:text-[#5A6EE6]">
                    <Link to={"/INV"} className="text-xl">INV</Link>
                </li>
            </ul>
        </div>
        {/* box-Time-right */}
        <div className="flex items-center gap-3 max-md:hidden max-lg:hidden">
            <AiOutlineClockCircle className="text-2xl" />
            <p>Last update (Taiwan): 0000-00-00 00:00</p>
        </div>
    </nav>
  )
}

export default NavbarBottom