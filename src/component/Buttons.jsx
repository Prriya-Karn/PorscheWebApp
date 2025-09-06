import React, { Fragment } from 'react'

const Buttons = ({ text }) => {
    return (
        <Fragment>
            <button className={`px-6 cursor-pointer py-3 border
                 border-black text-black rounded-md
                  hover:bg-gray-100 transition`}>
                {text}
            </button>
        </Fragment>
    )
}

export default Buttons