import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'
// import products from '../data/products.json'
import { useProducts } from '../hooks/useProducts'; 
import { ShoppingCartContext } from '../context/CartContext';
import TouchSlider from '../components/TouchSlider';
import { useLocation } from 'react-router-dom';
import ReactGA4 from 'react-ga4';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../hooks/useCurrency'; 



export default function ProductPage() {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA4.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location.pathname]); // Dependency on pathname only
  
  const products = useProducts(); // Use the custom hook
  const { cartItems, increaseCartQuantity, decreaseCartQuantity, remove } = useContext(ShoppingCartContext)
  const { id } = useParams()
  const productInCart = cartItems.find(item => id == item.id)
  const product = products.find(item => id == item.id)
  const {value, symbol, display} = useCurrency(product.price);



  return (
    <div className='ProductPage'>
      <div className='sliderForPhon'> <TouchSlider images={product.imgUrl} /> </div>
      <div className='container'>
        <div className='column1'>
          <ImageSlider img={product.imgUrl} />
        </div>
        <div className='column2'>
          <div className='name'>
            {product.name}
          </div>
          <div className='price'>
            {display}
          </div>
          <div className='changeQuantity'>
            {productInCart == null
              ? <button className='addToCartBtn' onClick={() => increaseCartQuantity(product.id)}> {t('add_to_cart')} </button>
              : <div className='inCart'>
                <div className='changeInCart'>
                  <button onClick={() => decreaseCartQuantity(product.id)}>&#8722;</button>
                  <span class="quantity"> {productInCart.quantity}</span>
                  <button onClick={() => increaseCartQuantity(product.id)}>+</button>
                </div>
                <button className='remove' onClick={() => remove(product.id)}> {t('remove')}</button>
              </div>
            }
          </div>
          <div className='description'>
            {/* <div className='title'>Description:</div> */}
            {/* {product.description} */}
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
            {/* {description} */}
          </div>

        </div>
      </div>
    </div>
  )
}




<ul class="slick-dots" style="display: block;">
  <li class="slick-active"><button>1</button></li>
  <li class=""><button>2</button></li>
  <li class=""><button>3</button></li>
  <li class=""><button>4</button></li>
</ul>