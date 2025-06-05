import LayOut from '../../Components/LayOut/LayOut'
import classes from './Orders.module.css'
import { db } from '../../Utility/firebase'
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { DataContext } from '../../Components/DataProvider/DataProvider'
import { useContext, useEffect, useState } from 'react'
import ProductCard from '../../Components/product/ProductCard';

function Orders() {

  const [{user}, dispatch] = useContext(DataContext);
  const[ orders, setOrders] = useState([])

  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, "users", user.uid, "orders");
      const q = query(ordersRef, orderBy("created", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(fetchedOrders);
      });
        
      // Cleanup listener on unmount
      return () => unsubscribe();
    }
  }, [user]);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && <div style={{padding: "20px"}}>
              you don't have orders yet
            </div>
          }
          {/* ordered items */}
          <div>{
            orders?.map((eachOrder, i)=>{

              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {
                  eachOrder?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })
            }</div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders