import React from 'react'
import Modal from 'react-modal';
import YouTube from 'react-youtube'
import { useState } from 'react';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1,
    },
};

const MovieSearch = (title, data) => {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");
    const _onReady = (event) => {
        event.target.playVideo();
    }

    const handleTrailer = async (id) => {
        setTrailerKey('');
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };

            const moviekey = await fetch(url, options);
            const data = await moviekey.json();
            setTrailerKey(data.results[0].key);
            setmodalIsOpen(true);
        } catch (error) {
            setTrailerKey(false);
            console.log(error);
        }
    }
    return (
        <div className='p-10 mb-10 text-white'>
            <h2 className="mb-4 text-xl font-bold uppercase">{title}</h2>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
                {data && data.map((item) => (
                    <div key={item.id}
                        className='w-[200px] h-[300px] relative group' onClick={() => handleTrailer(item.id)}>
                        <div className='w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105' >
                            <div className='absolute top-0 left-0 w-full h-full bg-black/20' />
                            <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt={item.title} className='object-cover w-full h-full ' />
                            <div className='absolute left-2 bottom-4 '>
                                <p className='uppercase text-md'>
                                    {item.title || item.original_title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Modal isOpen={modalIsOpen}
                onRequestClose={() => setmodalIsOpen(false)}
                style={{
                    overlay: {
                        position: "fixed",
                        zIndex: 9999,
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                    },
                }}
                contentLabel="Example Modal"

            >
                <YouTube videoId={trailerKey} opts={opts} onReady={_onReady} />;
            </Modal>
        </div>
    )
}

export default MovieSearch
