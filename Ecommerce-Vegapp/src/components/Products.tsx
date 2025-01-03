import { IoMdStar } from "react-icons/io"; 
import { TfiShoppingCartFull } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";


interface PropsType{
  img:string;
  name:string;
  price:string;
}



const Products = ({img,name,price}:PropsType) => {
  return (
    // 1 Product Card Wrapper
    <div className="border border-gray-300 p-4 cursor-pointer relative group hover:shadow-2xl">
      {/* 2Image */}
      <img className="mx-auto" src={img} alt={name} />
     {/* Product Details */}
     <div className="pt-8">
      <p className="text-gray-500">Fruits</p>
      <h2>{name}</h2>
      
     <div className="pt-1 flex items-center gap-2">
     {/* Star Rating */}
     <div className="text-[#ffc78b] text-[14px] flex">
        <IoMdStar/>
        <IoMdStar/>
        <IoMdStar/>
        <IoMdStar/>
        <IoMdStar/>
     </div>
     <p className="text-gray-500 text-[12px]">(321,888)</p>
     </div>

     {/* 6Price */}
     <h3 className="text-Primary text-xl pt-2">{price}</h3>

     </div>

     {/* hover */}
     <div className="absolute w-full h-full top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100">

     {/* icons */}
     <div className="flex gap-2 absolute left-[50%] top-[55%] transition-x-[-50%]">

      {/* shopIcon */}
      <div className="bg-[#f3e8d6] h-[40px] w-[40px] rounded-full grid place-items-center text-[20px] hover:bg-primaryDark hover:text-white">
      <TfiShoppingCartFull />

      </div>

      {/* Heart Icon */}
      <div className="bg-[#f3e8d6] h-[40px] w-[40px] rounded-full grid place-items-center text-[20px] hover:bg-primaryDark hover:text-white">
      <CiHeart />
      </div>

     </div>


     </div>

    </div>
  );
};

export default Products;
