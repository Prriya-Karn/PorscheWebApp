import React, { Fragment, useState } from 'react'
import Heading from '../../component/Heading'

const InteriorExter = () => {
    const [active, setActive] = useState("Interior")
    const handleClick = (ele) => {
        setActive(ele)
    }
    return (
        <Fragment>
            <div className="md:mt-80 sm:mt-70 mt-20 w-full">
                {/* Heading */}
                <Heading text="The Panamera Turbo E-Hybrid only has courageous views." />

                {/* Image with buttons overlay */}
                <div className="relative flex mt-10 justify-center items-center  mx-auto max-w-5xl rounded-lg">
                    {/* Background Image */}
                    {
                        active === "Interior" ? (
                            <img
                                className="rounded-lg object-cover w-full h-[500px]"
                                src="https://images-porsche.imgix.net/-/media/8BC9332C6FF6413C9D98952D95EB47E7_172534F9110446729A80589D47A58EB8_panamera-turbo-e-hybrid-interior-cockpit-myt?w=759&q=45&dpr=2&auto=format"
                                alt="Panamera Interior"
                            />
                        ) : (
                            <img
                                className="rounded-lg object-cover w-full h-[500px]"
                                src="https://images-porsche.imgix.net/-/media/9EB51A03E115434299888457D43DB4B1_3F12D9CA602F4B2EB598598D912364B1_model-series-g3-panamera-360-exterior-mobile-072?w=1992&q=80&auto=format"
                                alt="Panamera Exterior"
                            />
                        )
                    }



                    {/* Buttons overlay */}
                    <div className="absolute rounded-lg bg-black/35 px-3 py-3 top-6 flex space-x-4">
                        {
                            ["Interior", "Exterior"].map((ele) => {
                                return (
                                    <Fragment>
                                        <button onClick={() => handleClick(ele)}
                                            className={`border 
                                        cursor-pointer border-white
                                         px-8 py-2 text-white  rounded-sm
                                          hover:bg-black/20 hover:text-black transition ${active === ele ? "bg-black text-white" : ""}`}>
                                            {ele}
                                        </button>
                                    </Fragment>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default InteriorExter