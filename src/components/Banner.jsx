import React from 'react'
import IconRating from '../assets/rating.png';
import IconHaft from '../assets/rating-half.png';
import ImgTemp from '../assets/temp-1.jpeg';
import iconplay from '../assets/play-button.png';
const Banner = () => {
    return (
        <div className='w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative'>
            <div className="absolute top-0 left-0 w-full h-full bg-black/40">
                <div className="flex items-center justify-center w-full h-full space-x-[30px] p-4 z-20 relative">
                    <div className='flex flex-col items-baseline space-y-5 w-[50%]'>
                        <p className='px-3 py-2 text-white text-md bg-gradient-to-r from-red-600 to-red-300'>
                            TV Show
                        </p>
                        <div className='flex flex-col space-y-4'>
                            <h2 className='text-3xl text-white'>Nghe Nói em thích tôi</h2>
                            <div className='flex items-center space-x-3'>
                                <img src={IconRating} alt="rating" srcset="" className='w-8 h-8' />
                                <img src={IconRating} alt="rating" srcset="" className='w-8 h-8' />
                                <img src={IconRating} alt="rating" srcset="" className='w-8 h-8' />
                                <img src={IconRating} alt="rating" srcset="" className='w-8 h-8' />
                                <img src={IconHaft} alt="rating" srcset="" className='w-8 h-8' />
                            </div>
                            <p className="text-white">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived
                                not only five centuries, but also the leap into electronic
                                typesetting,
                            </p>
                            <div className='flex items-start space-x-4'>
                                <button className='p-2 text-sm font-bold text-white bg-black'>Chi Tiết</button>
                                <button className='p-2 text-sm font-bold text-red-500 bg-black'>Xem Phim</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] flex items-center justify-center'>
                        <div className='w-[300px] h-[400px] relative group cursor-pointer'>
                            <img src={ImgTemp} alt="temp" className='object-cover w-full h-full' />
                            <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-500 ease-in-out opacity-0 opaci backdrop-blur-sm group-hover:opacity-100'>
                                <img src={iconplay} alt="play" className='w-16 h-16' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
