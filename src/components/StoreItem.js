import React from 'react'
import { Link} from "react-router-dom";


export default function StoreItem({ id, name, price, imgUrl }) {
    return (
        <div className='StoreItem'>
            <div className='imgConatainer'>
                <Link to={`../product/${id} `}   > <img src={imgUrl[0]} /> </Link>
            </div>
            <div className='product_name'>
                <span>{name}</span>
                <span className='price'>$ {price}</span>
            </div>
            <div className='changeQuantity'>
                Change quantity
            </div>
        </div>
    )
}
