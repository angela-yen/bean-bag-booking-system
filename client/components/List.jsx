import React from 'react'
import { Link } from 'react-router-dom'

function List ({ products }) {
  const total = products
    .map(product => product.price)
    .reduce((total, val) => total + val, 0)

  return (
    <div>
      {products.map(({ product, price, id }) =>
        <>
          {/* <div><Link to={`/details/${id}`}>{product}</Link></div> */}
        </>
      )}
    </div>
  )
}

export default List
