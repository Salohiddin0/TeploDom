'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../../features/products/productSlice'
import { Link } from 'react-router-dom'
import ProductItem from '../item/ProductItem'

const PopularProducts = () => {
  const productState = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    if (productState.status === 'idle') dispatch(fetchAllProducts())
  }, [productState, dispatch])

  return (
    <section className='popular-products py-8 md:py-12 lg:py-[100px]'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex justify-between items-center mb-6 md:mb-8 lg:mb-[30px]'>
          <h2 className='font-semibold text-xl md:text-2xl lg:text-[30px]'>
            Популярные товары
          </h2>
          <Link
            to={`/category/products/popular`}
            className='flex items-center gap-2 text-sm md:text-base'
          ></Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-[30px] justify-items-center'>
          {!productState.isLoading && (
            <>
              {productState.popularProducts.slice(0, 8).map((p, i) => (
                <ProductItem key={i} product={p} isLiked={p.isLiked ?? false} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
