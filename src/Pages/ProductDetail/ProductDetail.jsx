
import classes from './ProductDetail.module.css';
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { productUrl } from '../../Api/EndPoint';
import ProductCard from '../../Components/product/ProductCard';
import Loader from '../../Components/Loader/Loader';

function ProductDetail() {
  const {productId} = useParams()
  const [product, setproduct] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
      setIsLoading(true)
      axios.get(`${productUrl}/products/${productId}`)
      .then((res)=>{
        setproduct(res.data);
        setIsLoading(false)
      }).catch((err)=> {
        console.log(err)
        setIsLoading(false)
      })
      }, [])
      return (
        <LayOut>
          {isLoading? (<Loader />):(<ProductCard product={product} 
          flex ={true}
          renderDesk={true}
          renderAdd={true}
        />)}
        </LayOut>
      );
}
  
export default ProductDetail