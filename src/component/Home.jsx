import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../redux/action/CategoryAction';
import { getAllProduct } from '../redux/action/ProductAction';
import Category from './category/Category';
import Loading from './layouts/Loading';
import Message from './layouts/Message';
import MetaData from './layouts/MetaData';
import Product from './product/Product';
import Recentproduct from './product/Recentproduct';

const Home = () => {
  const dispatch = useDispatch()
  const { categories, loading, error } = useSelector((state) => state.c)
  // console.log(categories)

  const { products } = useSelector((state) => state.p)
  // console.log(products);

  useEffect(() => {
    dispatch(getAllCategory())
  }, [dispatch])

  useEffect(()=>{
    dispatch(getAllProduct())
  },[dispatch])



  return (

    <>
    <MetaData title="Home | ecommerce"/>

      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
        <div className="row px-xl-5 pb-3">

          {
            loading ? (<Loading />) : error ? (<Message variant={'danger'}>{error}</Message>)
              : (

                categories.map((cat) => (

                  <Category categorydata={cat} />

                )))
          }
        </div>
      </div>



      {/* <!-- Products Start --> */}
      <div class="container-fluid pt-5 pb-3">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Featured Products</span></h2>
        <div class="row px-xl-5">

          {
             loading ? (<Loading />) : error ? (<Message variant={'danger'}>{error}</Message>)
             : (
            products.map((prod) => (
              <Product productdata={prod} />
            )))

          }
        </div>
      </div>
      {/* <!-- Products End --> */}

      {/* <!-- Products Start --> */}
      <div class="container-fluid pt-5 pb-3">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Recent Products</span></h2>
        <div class="row px-xl-5">



          {
             loading ? (<Loading />) : error ? (<Message variant={'danger'}>{error}</Message>)
             : (
            products.map((prod) => (
              <Recentproduct productdata={prod} />
            )))

          }
        </div>
      </div>
      {/* <!-- Products End --> */}


    </>
  );
}

export default Home;
