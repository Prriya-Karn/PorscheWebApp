import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import models from "../database/ModelData";
import Sound from "../pages/Sound"
import Modal from "../component/Modal";

const Compare = () => {
    const data = useParams();
    const [modal, setModal] = useState(false);
    const [compareData, SetCompareData] = useState([]);
    const [selectedData, setSelected] = useState([])

    const res = Object.values(models).flat();
    const filterData = res.filter((e) => {
        return e.variant.split(" ").join("") === data.variant;
    });


    const OpenModal = () => {
        setModal(true);
        setSelected(filterData[0])
    }



    const handleAddToCompare = (variant) => {
        console.log(variant)
        const filterCompareData = res.filter((e) => {
            return e.variant == variant
        })
        SetCompareData(filterCompareData)
    }

    console.log(filterData[0])
    console.log(compareData.length == 0)


    return (
        <Fragment>
            <div className="min-h-screen md:mt-30 bg-white">
                {/* Title Section */}
                <div className="text-center  pt-12">
                    <h1 className="text-4xl font-bold">Model comparison</h1>
                    <p className="text-gray-500 px-10  mt-2">
                        Do you need help deciding? Now you can compare your favourites with each other.
                    </p>
                </div>

                {/* Model Section */}
                <div className="mt-12 w-full flex sm:flex-row flex-col justify-center sm:gap-8">
                    <div className="flex flex-col items-center sm:mt-16">
                        {filterData.map((e, indx) => (
                            <div
                                key={indx}
                                className="w-full max-w-6xl px-6 flex flex-col items-center"
                            >
                                {/* Change Model + Select model row */}
                                <div className="w-full flex justify-between items-center mb-6">


                                    {
                                        compareData.length == 0 ? <button onClick={OpenModal} className="px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded shadow-sm">
                                            + Select model
                                        </button> : ""
                                    }

                                </div>



                                {/* Car Image */}
                                <div className="w-full flex justify-center">
                                    <img
                                        src={e.img}
                                        alt={e.variant}
                                        className="w-[600px] object-contain"
                                    />
                                </div>

                                {/* Car Info Below */}
                                <div className="mt-10 text-left w-full md:w-3/4">
                                    <h2 className="text-2xl font-bold">{e.variant}</h2>
                                    <p className="text-gray-600 mt-1">From {e.price}</p>

                                    {/* Gear type */}
                                    <p className="text-gray-500 mt-6 text-sm uppercase">Gear type</p>
                                    <p className="text-lg">{e.transmission || "8-speed automatic"}</p>
                                </div>
                            </div>
                        ))}


                        <Modal modal={modal}
                            setModal={setModal}
                            res={res}
                            selectedData={selectedData}
                            handleAddToCompare={handleAddToCompare}
                        />

                    </div>
                    <div className="flex  flex-col items-center mt-16">
                        {
                            compareData.map((e, indx) => {
                                return (
                                    <Fragment>
                                        <div
                                            key={indx}
                                            className="w-full max-w-6xl px-6 flex flex-col items-center"
                                        >
                                            {/* Car Image */}
                                            <div className="w-full flex justify-center">
                                                <img
                                                    src={e.img}
                                                    alt={e.variant}
                                                    className="w-[600px] object-contain"
                                                />
                                            </div>

                                            {/* Car Info Below */}
                                            <div className="mt-10 text-left w-full md:w-3/4">
                                                <h2 className="text-2xl font-bold">{e.variant}</h2>
                                                <p className="text-gray-600 mt-1">From {e.price}</p>

                                                {/* Gear type */}
                                                <p className="text-gray-500 mt-10 text-sm uppercase">Gear type</p>
                                                <p className="text-lg">{e.transmission || "8-speed automatic"}</p>
                                            </div>

                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>

                {
                    compareData.length > 0 ? <div className="mt-20">
                        <h1 className="text-center text-3xl font-bold">Technical Data</h1>
                        <div className="w-full px-5 lg:px-50 mx-auto mt-10 overflow-x-auto">
                            <div className="min-w-[600px]  md:min-w-0 grid grid-cols-3 text-sm border border-gray-200 rounded-lg">

                                {/* Variant */}
                                <div className="col-span-3 grid grid-cols-3 border-b border-gray-200 py-4 px-2">
                                    <div className="text-gray-500">Variant</div>
                                    <div className="font-bold">{filterData[0]?.variant || "-"}</div>
                                    <div className="font-bold">{compareData[0]?.variant || "-"}</div>
                                </div>

                                {/* Engine */}
                                <div className="col-span-3 grid grid-cols-3 border-b border-gray-200 py-4 px-2">
                                    <div className="text-gray-500">Engine</div>
                                    <div className="font-bold">{filterData[0]?.tag || "-"}</div>
                                    <div className="font-bold">{compareData[0]?.tag || "-"}</div>
                                </div>

                                {/* Acceleration */}
                                <div className="col-span-3 grid grid-cols-3 border-b border-gray-200 py-4 px-2">
                                    <div className="text-gray-500">Acceleration</div>
                                    <div className="font-bold">{filterData[0]?.accel || "-"}</div>
                                    <div className="font-bold">{compareData[0]?.accel || "-"}</div>
                                </div>

                                {/* Speed */}
                                <div className="col-span-3 grid grid-cols-3 border-b border-gray-200 py-4 px-2">
                                    <div className="text-gray-500">Speed</div>
                                    <div className="font-bold">{filterData[0]?.speed || "-"}</div>
                                    <div className="font-bold">{compareData[0]?.speed || "-"}</div>
                                </div>

                                {/* Price */}
                                <div className="col-span-3 grid grid-cols-3 border-b border-gray-200 py-4 px-2">
                                    <div className="text-gray-500">Price</div>
                                    <div className="font-bold">{filterData[0]?.price || "-"}</div>
                                    <div className="font-bold">{compareData[0]?.price || "-"}</div>
                                </div>

                                {/* Power */}
                                <div className="col-span-3 grid grid-cols-3 border-b border-gray-200 py-4 px-2">
                                    <div className="text-gray-500">Power</div>
                                    <div className="font-bold">{filterData[0]?.power || "-"}</div>
                                    <div className="font-bold">{compareData[0]?.power || "-"}</div>
                                </div>

                                {/* Description */}
                                <div className="col-span-3 grid grid-cols-3 border-b border-gray-200 py-4 px-2">
                                    <div className="text-gray-500">Description</div>
                                    <div className="font-bold">{filterData[0]?.description || "-"}</div>
                                    <div className="font-bold">{compareData[0]?.description || "-"}</div>
                                </div>

                                {/* Top speed */}
                                <div className="col-span-3 grid grid-cols-3 border-b border-gray-200 py-4 px-2">
                                    <div className="text-gray-500">Top speed</div>
                                    <div className="font-bold">{filterData[0]?.speed || "-"}</div>
                                    <div className="font-bold">{compareData[0]?.speed || "-"}</div>
                                </div>

                                {/* Sound */}
                                <div className="col-span-3 grid grid-cols-3 border-b border-gray-200 py-4 px-2">
                                    <div className="text-gray-500">Sound</div>
                                    <div className="md:w-60 w-30"><Sound path="/sound/car-passing-290806.mp3" /></div>
                                    <div className="md:w-60 w-30"><Sound path="/sound/porsche-105500.mp3" /></div>
                                </div>
                            </div>
                        </div>



                    </div> : ""
                }




            </div >
        </Fragment >
    );
};

export default Compare;
