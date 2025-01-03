import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import ServiceCard from "./ServiceCard";

const data = [
    {
        title:"FAST AND FREE DELIVERY",
        icon:<MdOutlineShoppingCart />,
        desc:"Free delivery for all orders over $140",

    },
    {
        title:"24/7 CUSTOMER SUPPORT",
        icon:<FaHeadset />,
        desc:"Friendly 24/7 Customer Support",


    },
    {
        title:"MONEY BACK GUARANTEE",
        icon:<IoShieldCheckmarkOutline />,
        desc:"We return Money with 30 days",

    },
    {
        title:"MEMBER GIFTS",
        icon:<FiGift />,
        desc:"We return money within 30 day",
    },
    ]

   
    const Services = () => {
      return (
        <div className="bg-[#f7f5ee] py-5">
          <div className="container grid gap-8 md:grid-cols-2 xl:grid-cols-4 py-4">
           {data.map((item)=>(
         <ServiceCard key={item.title}
         title={item.title}
         icon={item.icon}
         desc={item.desc}         
         />
         ))}
          </div>
        </div>
      )
    }
    
    export default Services;
    