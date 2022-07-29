import { Rating } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import quote from '../images/icon/Quote.png'
const TestCard = ({ review }) => {
    const [value , setValue] = useState(0)
    
    return (
        <div >

            <div className="card w-full bg-red-50 h-80  shadow-xl">
                <div className="card-body">

                    <div className="flex items-center justify-between">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={review.photoURL} alt='profile image' />
                            </div>
                        </div>
                        <div>
                            <div className="w-16 rounded-full">
                                <Image src={quote} alt='quote' />
                            </div>
                        </div>

                    </div>
                    <div className='flex items-end justify-between'>
                        <div className='ml-3'>
                            <h3 className='text-xl text-neutral font-bold capitalize'>{review.name}</h3>
                            <p className='mt-1'>Product Designer</p>
                        </div>
                        <Rating
                            name="simple-controlled"
                            value={review.ratings}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </div>
                    <p className='font-bold capitalize mt-4 text-neutral'>{review.description.slice(0, 50)}</p>
                    <p className=''>{review.description.slice(0, 100)}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestCard