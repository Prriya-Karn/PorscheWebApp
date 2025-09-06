import React from 'react'

const Heading = ({text}) => {
    return (
        <div className="flex justify-center items-center max-w-lg mx-auto px-6 py-4 rounded-lg">
            <h1 className="text-center font-bold text-3xl">
                {text}
            </h1>
        </div>
    )
}

export default Heading