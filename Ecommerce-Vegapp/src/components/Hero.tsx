
const Hero = () => {
  return (
    // Main
    <div className="relative bg-[url(/hero.png)] sm:min-ph-[25vh] sm:h-[45vh] sm:max-h-[50vh] bg-cover bg-right bg-no-repeat">
      {/* Content Arrangement */}
      <div className="container py-8 sm:py-0 sm:flex justify-between items-center h-full ">

        {/* text */}
     <div className="flex items-center h-full">
     <div>
      {/* short Text */}
      <p className="uppercase text-Primary font-bold">
        Shop Our Freshest
      </p>
      {/* Mukhya headliine */}
      <h2 className="text-primaryDark font-bold text-[24px] sm:text-[30px] md:text-[40px] lg:text-[48px] pb-8 leading-tight">
        Fresh Hand-Picked Vegetables
        <br />
        <span className="text-Primary">
          Everyday
        </span>
      </h2>
     {/* Discover More */}
     <a className="border-b border-black" href=""></a>
      Discover More
     </div>
     </div>


     {/* Image Section */}
     <div>
      <img 
      src="/VegetableWoBasket.png"
       alt="veg-basket"
       className="w-[200px] h-auto sm:w-[400px] lg:w-[400px]"
       />
     </div>



      </div>
    </div>
  )
}

export default Hero;
