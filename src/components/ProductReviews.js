import React, { useState } from 'react'
import { BsStarFill, BsStar } from 'react-icons/bs'
import {
    Loading,
    Error,
  } from '../components';
import './stars.css'

const ProductReviews = ({reviews, loading, error}) => {

    reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    const [stars, setStars] = useState(0)
    const rating = [1, 2, 3, 4, 5]
    const updateStars = (e) => setStars(e.target.value)

    if (loading) {
        return <Loading />;
      }
      if (error) {
        return <Error />;
      }
    return(
        <div className='reviews bg-[#6499E9] p-3 my-3 rounded-lg'>
        <h3 className=' text-center'>Reviews</h3>
        <div className='lg:grid lg:grid-cols-2 gap-3'>
            <div>
                <p>Write a review</p>
                <div className='bg-white rounded-lg p-2'>
                    <h5 className='font-semibold'>Rating:</h5>
                    <div className='flex flex-row'>
                        {rating.map((star, index) => {
                            return (
                                <button
                                    type='button'
                                    onClick={() => {
                                        stars === star + 1 ? setStars(0) : updateStars({target: {value: star + 1}})
                                    }}>
                                    <span key={index} className='star pt-[0.25rem]'>
                                        {stars > star ? (
                                            <BsStarFill/>
                                        ): (<BsStar />)
                                        }
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                    <h5 className='font-semibold mt-3'>Comment:</h5>
                    <textarea className='w-full p-2 border-2 border-black rounded-lg resize-none'/>
                    <button className='btn'>Submit Review</button>
                </div>
            </div>
            <div>
                <p>{reviews.length} customer {reviews.length > 1 ? <>reviews</> : <>review</>}</p>
                {reviews.length > 0 && reviews.map(content => {
                    const { createdAt, review, username, id } = content
                    return(
                        <div className='bg-white rounded-lg mb-3 p-3' key={id}>
                            <div className='grid grid-cols-2'>
                                <p className='mx-auto'>{username}</p>
                                <p className='text-center'>{createdAt}</p>
                            </div>
                            <p className='ml-[75px]'>{review}</p>
                        </div>
                    )
                })}
                {reviews.length === 0 && <h5>No reviews yet</h5>}
            </div>
        </div>
        </div>
    )
}

export default ProductReviews