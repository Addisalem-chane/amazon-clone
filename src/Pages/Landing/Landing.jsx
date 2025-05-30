import LayOut from "../../Components/LayOut/LayOut";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Category from "../../Components/Category/Category";
import Product from "../../Components/product/Product";

function Landing() {
  return (
    <LayOut>
        <CarouselEffect />
        <Category />
        <Product />
    </LayOut>
  );
}

export default Landing