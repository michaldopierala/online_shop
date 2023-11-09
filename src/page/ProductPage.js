import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'
import products from '../data/products.json'
import { ShoppingCartContext } from '../context/CartContext';



export default function ProductPage() {

  const { cartItems, increaseCartQuantity, decreaseCartQuantity, remove } = useContext(ShoppingCartContext)
  const { id } = useParams()
  const productInCart = cartItems.find(item => id == item.id)
  console.log('productInCart')
  console.log(productInCart)


  const product = products.find(item => id == item.id)

  return (
    <div className='ProductPage'>
      <div className='container'>
        <div>
          <ImageSlider img={product.imgUrl} />
        </div>
        <div className='column2'>
          <div className='name'>
            {product.name}
          </div>
          <div className='price'>
          $  {product.price}
          </div>
          <div className='changeQuantity'>
            {productInCart == null
              ? <button className='addToCartBtn' onClick={() => increaseCartQuantity(product.id)}> Add to Cart </button>
              : <div className='inCart'>
                <div className='changeInCart'>
                  <button onClick={() => decreaseCartQuantity(product.id)}>&#8722;</button>
                  <span class="quantity"> {productInCart.quantity}</span>
                  <button onClick={() => increaseCartQuantity(product.id)}>+</button>
                </div>
                <button className='remove' onClick={() => remove(product.id)}> Remove</button>
              </div>
            }
          </div>
          <div className='description'>
            <div className='title'>Description</div>
            {product.description}
          </div>

        </div>
      </div>
    </div>
  )
}
