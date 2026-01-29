import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { TbRosetteDiscountFilled } from "react-icons/tb";
import { TfiMapAlt } from "react-icons/tfi";

const linkClass = ({ isActive }) =>
  `flex flex-col gap-1 items-center justify-center ${
    isActive ? "text-[#10B24A]" : "text-[#A0A0A7]"
  }`;

function NavMenu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#E4E0E5] px-5 pt-3  flex justify-between items-center">
      <NavLink to="/" className={linkClass}>
        <MdHomeFilled size={19} />
        <p className="text-sm">Головна</p>
      </NavLink>

      <NavLink to="/discounts" className={linkClass}>
        <TbRosetteDiscountFilled size={19} />
        <p className="text-sm">Акції</p>
      </NavLink>

      <NavLink to="/services" className={linkClass}>
        <FaCartShopping size={19} />
        <p className="text-sm">Послуги</p>
      </NavLink>

      <NavLink to="/map" className={linkClass}>
        <TfiMapAlt size={19} />
        <p className="text-sm">Мапа</p>
      </NavLink>

      <NavLink to="/profile" className={linkClass}>
        <FaUserAlt size={19} />
        <p className="text-sm">Профіль</p>
      </NavLink>
    </div>
  );
}

export default NavMenu;
