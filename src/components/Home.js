import React from 'react'
import ImageRow from './ImageRow'
import ProductPersentation from './ProductPersentation'

export default function Home() {
  return (
    <div className='Home'>
        <img src="/img/baner7.jpg" alt="baner imge"/> 
        <ImageRow/>
        <ProductPersentation/>
    </div>
  )
}
