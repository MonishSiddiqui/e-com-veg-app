import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
  {/* 1 */}
    <nav className="bg-white md:bg-primaryDark">

      {/* 2 desktop Nav */}
        <div className="container justify-between items-center py-3 hidden md:flex">

            {/* logo and search */}
            <div className="flex gap-8 items-center">
              <h2 className="text-white text-[40px]">Logo</h2>
              <div className="relative">
                <input 
                className="px-4 py-3 rounded-sm w-[300px]"
                type="text"
                placeholder="Search"
                />            

              </div>
            </div>


            {/*  Icons Section*/}

            <div className="text-white flex gap-6 text-[26px]">

                {/* Usericon */}
                <FaUser />
                {/* ShoppingcartIcon */}
                <div className="relative">
                <FaCartShopping />
                <div className="bg-red-600 w-[20px] h-[20px] grid place-content-center
                 text-[12px] rounded-full absolute right-[-10px] top-[15px]">
                   0
                </div>
                </div>

                {/* Menu Icon */}
                <IoMenu />

            </div>
        </div>
        {/* Mobile Visible */}
    <div className="container flex justify-between items-center text-[26px] py-4 md:hidden">
    <IoMenu aria-label="Menu" />
    {/* mobLogo */}
    <div className="text-primaryDark text-[22px] font-bold">Logo</div>
     {/* Mob Shopping cart */}
     <div className="relative">
                <FaCartShopping />
                <div className="bg-red-600 w-[20px] h-[20px] grid place-content-center
                 text-[12px] rounded-full absolute right-[-10px] top-[15px]">
                   0
                </div>
     </div>
    </div>
    </nav>

    {/* Navigation Links */}
    <div className="bg-Primary hidden  md:block">
        <ul className="container flex gap-8 uppercase py-4 text-white" >
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Shop</a>
            </li>
            <li>
                <a href="">Blog</a>
            </li>
            <li>
                <a href="">Pages</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>        


        </ul>

    </div>
      
    </>
  )
}

export default Navbar
