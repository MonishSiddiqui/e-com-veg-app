import Products from "./Products";

const productData =[
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8gLJD9-dDgTAvprFCLa9IbcPmatbzKZRog&s",
        name:"Organic Barlett Pear",
        price:"$35.90",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9NRpPEUCYQsdnF3LYtlHMeCCqPy8CN9i0g&s",
        name: "Organic Fuji Apple",
        price: "$25.90",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlakZ8_fNv69_be0E5CFIVempC6tMvJimZQ&s",
        name: "Organic Avocado",
        price: "$45.00",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfuIOwgv4_O476JzkOnMg05QKNF3Z6GCqwA&s",
        name: "Fresh Bananas",
        price: "$10.50",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tODv-yzktdfT9fZclUOhp8_DCIUklI4k5w&s",
        name: "Organic Blueberries",
        price: "$20.90",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32fNwB5TnlzsDQ-zegZELXKfJGxiqvi8ywg&s",
        name: "Organic Barlett Pear",
        price: "$35.90",
      },
      {
        img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6rgHhzrjvtv5u10c8RNIfFd-mlZfZ8XeIQ&s",
        name: "Organic Fuji Apple",
        price: "$25.90",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9sgAAN34F9MtxDns7AUOXrq8k-Islej-5mA&s",
        name: "Organic Avocado",
        price: "$45.00",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0xBPRozlrc8mOoofMOGdtHdXBEpUYS_bsg&s",
        name: "Fresh Bananas",
        price: "$10.50",
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0434/5475/9072/products/FRU-59_large.jpg?v=1689679852",
        name: "Organic Blueberries",
        price: "$20.90",
      },
]


const FeaturesProducts = () => {
  return (
    <div className="pt-20">
        <div className="container">

            {/* Header */}
         <div className="sm:flex justify-between items-center">
            <div className="text-xl md:text-4xl pb-4 sm:pb-0">Features Products</div>
           <div className="flex gap-8 text-[14px] md:text-lg">
            <button className="border-b border-[#000]">Best Seller</button>
            <button>Most Populer</button>
           </div>
         </div>


         {/* Grid */}
          
          <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
         {productData.map((product,index) =>(
            <Products
            key={index}
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

export default FeaturesProducts;

