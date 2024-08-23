import React, { useEffect } from 'react'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import { Link } from 'react-router-dom'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import "./featured.css";
import { products_url } from '../utils/constants'

const FeaturedProducts = () => {
  const {products_loading, products_error, featured_products} = useProductsContext()

  //use loading component, while fetch data
  if(products_loading){
    return <Loading/>
  }

  //use error component, if error thrown
  if(products_error){
    return <Error/>
  }

  //return featured products
  return (
    <div className='section-featured mt-4'>
      <div className='grid grid-cols-2'>
        <h2 className='text-[#071952] font-semibold text-center pt-3'>Featured Products</h2>
        <Link to='/products' className='btn'>Browse all Products</Link>
      </div>
      <div className='featured grid-cols-2 md:grid-cols-3'>
      {featured_products && featured_products.map(item => {
        console.log(item)
        const {_id} = item
        return <Product key={_id} {...item}/>
      })}
      </div>
    </div>
  )
}


export default FeaturedProducts
