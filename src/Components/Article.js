import React from "react";

const Article = ({ image, caption, title, abstract, url }) => {
    return (
        <div class="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
            <img class="rounded-t-lg object-cover h-52 w-full" src={image} alt={caption}/>
            <div class="p-5 h-72">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                <p class="mb-3 font-normal text-gray-400 line-clamp-5">{abstract}</p>
            </div>
            <a href={url}>
                <button 
                    type="button" 
                    className="text-white bg-blue-700 ml-5 mb-5 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    Read More
                </button>
            </a>
        </div>
    )
}

export default Article;