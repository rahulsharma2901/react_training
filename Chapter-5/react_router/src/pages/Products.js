import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Products() {
    return (
        <>
            <div>
                <h1>Welcome to Products</h1>
            </div>
            <nav>
                <Link to='shirts'>Shirts</Link>
                <Link to='jeans'>Jeans</Link>
                <Link to='shoes'>Shoes</Link>
                <Link to='accessories'>Accessories</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Products;
