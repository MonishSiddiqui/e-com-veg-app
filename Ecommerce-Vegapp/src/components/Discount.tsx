import Products from "./Products"

const productData =[
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzsD4v_bydoW7JpY4-t3us4IvNeWL01iUHQ&s",
        name:"McCormick Gourmet Orange",
        price:"$35.99",
    },
    {
        img:"https://i.pinimg.com/736x/65/b2/25/65b225741a9924f8d82b2cf8122ec359.jpg",
        name:"McCormick Gourmet Orange",
        price:"$35.99",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbifi3QgYY2jpfYL_XKTJinl0ipk_PhaEsMA&s",
        name:"McCormick Gourmet Orange",
        price:"$35.99",
    },
    {
        img:"https://static.vecteezy.com/system/resources/previews/049/420/690/non_2x/fresh-young-okra-isolated-on-white-background-free-photo.jpg",
        name:"McCormick Gourmet Orange",
        price:"$35.99",
    },

];

const Discount = () => {
  return (
    // 1 container
    <div className="py-20">
        {/* 2 Inner Container */}
      <div className="container">
        <h2 className="text-xl md:text-4xl pb-4 sm:pb-0">Discount</h2>
      {/* 3 grid */}
    <div className=" pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
   {/* discount */}
   <div className="relative w-fit mx-auto">
  <img className="h-full object-cover"
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaUsem_RImxDfs0hd97MmeQVYGtsRe3E9dQ&s"
   alt="discount_bg" />
   <div>
    <div className="absolute w-full h-full top-0 left-0 grid place-items-center text-white">
        <div className="text-xl flex flex-col gap-4">
            <h2 className="text-[40px] font-bold">$20</h2>
         <div>
            <p>Under Products</p>
            <p>Limited Time Only</p>
         </div>
        </div>
    </div>
   </div>

   </div>

   {/* Product Cards */}
 {productData.map((product)=>(
   <Products
    key={product.name}
    img={product.img}
    name={product.name}
    price={product.price}
   />
 ))}

    </div>


      </div>
    </div>
  );
};

export default Discount;
