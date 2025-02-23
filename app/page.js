import Header from "./Components/Header";
import FeaturedProductSlider from "./Components/Sliders";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { getFeaturedProducts } from "@/lib/firestore/products/read_server";
import CollectionProducts from "./Components/collections";
import Categories from "./Components/categories";
import ProductsGridView from "./Components/products";
import Testimonials from "./Components/CustomerReviews";
import SimpleSlider from "./Components/DownSlider";
import Footer from "./Components/Footer";


export default async function Home() {
  // const featuredProducts = await getFeaturedProducts();
  return (
    <main>
      <Header />
      <FeaturedProductSlider />
      <CollectionProducts/>
      <Categories/>
      <ProductsGridView />
      <Testimonials />
      <SimpleSlider/>
      <Footer />
    </main>
  );
}