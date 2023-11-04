import React from 'react'
import products from '../data/products.json'
import StoreItem from '../components/StoreItem'


export default function Store() {
    return (
        <div className='Store'>
                  {products.map((item) => <StoreItem key={item.id} {...item} />)}
        </div>
    )
}
