import React from 'react'
import { Link, useParams } from 'react-router-dom';
import dummyImage from '../assets/images/placeholder.jpg'; 

const Prodcard = ({product}) => {

    
  const id = product.productId
  console.log(id);
  console.log(product);




  return (
      <>
      
      <div className='border border-solid border-gray-400 rounded-lg p-4 flex flex-col'>
      <h2 className='text-xl font-semibold mb-2'>{product.productName}</h2>
      <img src={dummyImage} alt="product thumbnail" className='w-full h-40 object-cover rounded-md mb-2' />
      <p className='text-black mb-2'>{product.description}</p>

      <div className="flex justify-between items-center">
        
    
          <Link to={`/review-display/${product.productId}`}>
            <button class=" rounded-full bg-teal-500 px-8 py-2 hover:outline-double  hover:outline-teal-500">View</button>     
            </Link>
     
      </div>
    </div>
      
      
      </>
  )
}

export default Prodcard