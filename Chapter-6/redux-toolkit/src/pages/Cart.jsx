import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart)
    const handleRem = (productId) => {
        dispatch(remove(productId))
    }
    return (
        <div>
            <h2>Cart</h2>
            <div className="cartWrapper">
                {
                    products.map(product => (
                        <div key={product.id} className='cartCard'><img src={product.image} alt="" />
                            <h4>{product.title}</h4>
                            <h5>{product.price}</h5>
                            <button className='btn' onClick={() => handleRem(product.id)}>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart;