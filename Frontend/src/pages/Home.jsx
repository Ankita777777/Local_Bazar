import ProductCard from "../components/ProductCard";
import NavBar from "../components/Navbar";
import bag from "../assets/bag.webp";
const products = [
  {
    id: 1,
    name: "Handmade Keychain",
    price: 250,
    image: bag,
  },
  {
    id: 2,
    name: "Bracelet",
    price: 400,
    image: bag,
  },
  {
    id: 3,
    name: "Gift Bag",
    price: 1200,
    image:bag,
  },
];

export default function Home(){
return(
    <div>
        <NavBar/>
         <h2>Welcome to Local Bazar!</h2>
 <div className="d-flex gap-3 flex-wrap">
    {products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
    ))}
    </div>
    </div>
   
)
};