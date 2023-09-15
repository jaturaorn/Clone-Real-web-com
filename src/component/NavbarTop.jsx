import  Image1  from "../images/M-logo_BG_white_resize.png";
import { AiFillCaretRight } from "react-icons/ai"
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

const NavbarTop = () => {
  return (
    <nav className="w-full h-11 flex justify-between bg-[#5A6EE6] sm:w-full">
            {/* box-out > img,h2-left */}
          <div className="flex place-items-center">
            <img src={Image1} width={50} height={30} className="px-2.5"/>
            <h2 className="text-white">Solar Power Plant</h2>
            <div className="flex pl-1 max-sm:hidden">
            <h2 className="text-white">Monitoring System</h2>
            </div>
          {/* box-in > icon,h2 right */}
            <div className="flex items-center max-lg:hidden">
            <AiFillCaretRight className="text-white " />
            <h2 className="text-white">Solar Floating - Installed 7,176 kWp - COD 2022-12-27</h2>
            </div>
          </div>
         {/* box-in > icons*/}
         <div className="flex justify-end gap-x-3 mr-3 pt-1">
            <MdOutlineAccountCircle className="text-4xl text-white" />
            <IoIosLogOut className="text-4xl text-white" />
         </div>
    </nav>
  )
}

export default NavbarTop