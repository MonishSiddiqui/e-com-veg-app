import BlogCard from "./BlogCard";

const blogData = [
    {
        img:"https://www.qualitynaturalfood.com/wp-content/uploads/2022/06/vege-food-1000x565.jpg",
        desc:"Sample Description 1 some more text just to make UI a little attractive thats all"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUvsKaj3T9QM2Vew6zplc6l6psaaS3v5trfg&s",
        desc:"Sample Description 2 some more text just to make UI a little attractive thats all"
    },
    {
        img:"https://images.everydayhealth.com/images/diet-nutrition/what-is-a-vegan-diet-benefits-food-list-beginners-guide-alt-1440x810.jpg",
        desc:"Sample Description 3 some more text just to make UI a little attractive thats all"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRP3xNZ9ZtQS1eMV4yCeM535klF3hBmE0PDA&s",
        desc:"Sample Description 4 some more text just to make UI a little attractive thats all"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX3Kyx6FKsdpegqimvo3OGEEV9npyb4hUiA&s",
        desc:"Sample Description 4 some more text just to make UI a little attractive thats all"
    },
];

const Blogs = () => {
  return (
    <div className="py-20">
        <div className="container">
    <h2 className="text-xl md:text-4xl pb-4 sm:pb-0">Our Blogs</h2>
 {/* Grid */}
<div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">


{blogData.map((blog,index) => (
    <BlogCard
    key={index}
    img={blog.img}
    desc={blog.desc}/>
))}
</div>
        </div>      
    </div>
  );
};

export default Blogs;
