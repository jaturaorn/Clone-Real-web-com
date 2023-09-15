// component
import NavbarBottom from "../component/NavbarBottom"
import NavbarTop from "../component/NavbarTop"

const NavBar = () => {
  return (
    <div>
        <div className="w-full fixed z-40 top-0">
        <NavbarTop />
        <NavbarBottom />
        </div>
    </div>
  )
}

export default NavBar