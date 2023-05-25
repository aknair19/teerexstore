import React from 'react'

const ProductTile = () => {
  return (
    <div className="  container  flex flex-col rounded-md border  w-48 h-60 hover:shadow-md shadow-inner  ">
          <img className="w-full h-30 p-2" alt="#" src='https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png' />

<div className='p-2 font-semibold text-sm flex justify-between items-center'>
    <p>Rs.320</p>
    <button className='p-1 px-2 bg-blue-400 text-white border-none  rounded-sm ' >Add to Cart</button>
</div>

    </div>
  )
}

export default ProductTile
