import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AddProductPage = () => {
  const [productName, setProductName] = useState('');
  const [productId, setproductId] = useState('')
  const [category, setProductCategory] = useState('MobilePhonesAccessories');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('Rs.5000')
  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault();
    const newProduct = {
      productName,
      productId,
      category,
      description,
      price
    }
    const res = addProductSubmit(newProduct)
    toast.success('Product added successfully')
    navigate('/products')
  }


    const addProductSubmit = async (newProduct) => {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(newProduct)
      })
      return res;
    }

    return (
      <>
        <Header />

        <section class="bg-white mb-20">
          <div class="container m-auto max-w-2xl py-2">
            <div class="px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">

              <form onSubmit={submitForm}>
                <h2 class="text-3xl text-black text-center font-semibold mb-6">
                  Add Product
                </h2>

                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    class="border rounded w-full py-2 px-3 mb-2"
                    placeholder="eg. Redmi "
                    required
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}

                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2">
                    Product Id
                  </label>
                  <input
                    type="text"
                    id="productId"
                    name="productId"
                    class="border rounded w-full py-2 px-3 mb-2"
                    placeholder="eg. 1"
                    required
                    value={productId}
                    onChange={(e) => setproductId(e.target.value)}

                  />
                </div>

                <div class="mb-4">
                  <label
                    htmlFor="category"
                    class="block text-gray-700 font-bold mb-2"
                  >
                    Product category
                  </label>
                  <select
                    id="category"
                    name="category"
                    class="border rounded w-full py-2 px-3"
                    required
                    value={category}
                    onChange={(e) => setProductCategory(e.target.value)}

                  >
                    <option value="MobilePhonesAccessories">Mobile Phones & Accessories</option>
                    <option value="Electronics" >Electronics</option>
                    <option value="Laptops">Laptops</option>
                  </select>
                </div>

                <div class="mb-4">
                  <label
                    htmlFor="description"
                    class="block text-gray-700 font-bold mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    class="border rounded w-full py-2 px-3"
                    rows="4"
                    placeholder="Small description on the Product"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div class="mb-6">
                  <label class="block text-gray-700 font-medium mb-2" htmlFor="price">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    class="border border-gray-300 rounded w-full py-2 px-4"
                    placeholder="e.g., 5000"
                    required
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div>
                  <button
                    class="bg-amber-400 hover:bg-orange-400 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  };

export default AddProductPage



