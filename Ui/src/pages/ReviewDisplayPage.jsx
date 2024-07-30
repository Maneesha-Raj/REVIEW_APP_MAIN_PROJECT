
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Reviewcard from '../components/Reviewcard';
import { useLoaderData } from 'react-router-dom';
import { productLoader } from './Viewreviewpage';
import HeaderComponent from '../components/HeaderComponent';
import Footer from '../components/Footer';
import dummyImage from '../assets/images/placeholder.jpg'

const ReviewDisplayPage = () => {

    const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/all-products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
          setReviews(data.reviews || []); // Use an empty array if reviews are undefined
        } else {
          throw new Error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (id) {
      fetchProductDetails(product);
    }
  }, [id]);



  return (
      <>
          <HeaderComponent />
      <form className="mx-52 my-12 bg-white p-24 shadow-md h-full max-h-fit">
        <p className="text-xl font-semibold p-6">{product?.productName || 'Loading...'}</p>
        <div className="grid grid-cols-2 gap-8">
          {/* <img src={product?.imageUrl || 'dummyImage'} alt="Product" className="h-48 border border-solid" /> */}
          <img src={ dummyImage} alt="Product" className="h-48 border border-solid rounded-lg" />
        <div>
            <p className="text-3xl font-sans font-semibold">{product?.productName}</p>
            <p className="text-2xl font-bold">{product?.description}</p>
            <p className="text-xl font-semibold">Price: {product?.price}</p>
          </div>
          
        </div>
        <br />
        <Link to='/login'>
          <button className="rounded-full float-right bg-cyan-500 px-4 py-2 hover:outline-double hover:outline-cyan-500">Add a Review</button>
        </Link>

        
        <br />

        <p className="text-xl font-bold">Customer Ratings</p>

        <div className="my-12">
          <div className="overflow-x-auto">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <Reviewcard key={index} review={review} />
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
          </form>
        
          
          <Footer />

      
      
      
      
      </>
  )
}

const prodLoader = async ({ params }) => {
    const res = await fetch(`/api/all-products/${params.id}`);
    const data = await res.json();
    return data;
  }
  

export { ReviewDisplayPage as default,prodLoader}