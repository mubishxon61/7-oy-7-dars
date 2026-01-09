import Footer from "../../components/Footer/Footer"
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar"
import ProductCard from "../../components/ProductCard";
import useApi from "../../hooks/useApi";

function Home() {
  const {data, loading} = useApi();
  
  if (loading) {
    return <Loading/>;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* products */}
        <div className="container">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data && data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </ul>
        </div>

    </div>
  );
}

export default Home