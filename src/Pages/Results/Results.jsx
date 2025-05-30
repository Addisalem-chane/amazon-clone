import LayOut from '../../Components/LayOut/LayOut'
import classes from './Results.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/EndPoint'
import { useEffect, useState } from 'react'
import ProductCard from '../../Components/product/ProductCard'
import Loader from '../../Components/Loader/Loader'

function Results() {
  const [results, setResults] = useState();
  const{categoryName} =useParams()
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res)=>{
        setResults(res.data);
        setIsLoading(false);
      }).catch((err)=>{
        console.log(err);
        setIsLoading(false);
      })
  }, [])
  
  return (
    <LayOut>
      {isLoading ? (
        <Loader />) : (<section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/ {categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} renderDesk={false} renderAdd={true} />
            ))}
          </div>
        </section>
      )}
    </LayOut>
  );
}

export default Results