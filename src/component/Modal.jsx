import { X } from 'lucide-react'
import React, { Fragment } from 'react'

const Modal = ({ modal, setModal, res, selectedData, handleAddToCompare }) => {
    return (
        <Fragment>
            {
                modal && (
                    <div className="fixed pt-20 inset-0 bg-black/50 z-30 flex items-center justify-center">
                        {/* Modal Box */}
                        <div className="bg-white w-[90%] max-w-5xl rounded-xl shadow-lg relative p-6">
                            {/* Close Button */}
                            <button
                                onClick={() => setModal(false)}
                                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                            >
                                <X size={22} />
                            </button>

                            {/* Title */}
                            <h2 className="text-2xl font-bold mb-4">Select a Model</h2>

                            {/* Data Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto">
                                {res.map((e, idx) => (

                                    <div
                                        key={idx}
                                        className={`${e.variant == selectedData.variant ? "bg-gray-200" : ""}   border rounded-lg p-4 hover:shadow-md transition flex flex-col`}
                                    >
                                        {/* Image */}
                                        {e.img && (
                                            <img
                                                src={e.img}
                                                alt={e.variant || e.title}
                                                className="w-full h-20 object-contain rounded-md mb-3"
                                            />
                                        )}

                                        {/* Details */}
                                        <h3 className="text-lg font-semibold">{e.title}</h3>
                                        {e.variant && (
                                            <p className="text-gray-600 text-sm">{e.variant}</p>
                                        )}

                                        <p className="mt-2 text-gray-800 text-sm">
                                            <span className="font-medium">Tag:</span> {e.tag}
                                        </p>

                                        {e.price && (
                                            <p className="text-sm text-gray-700">
                                                <span className="font-medium">Price:</span> {e.price}
                                            </p>
                                        )}
                                        {e.power && (
                                            <p className="text-sm text-gray-700">
                                                <span className="font-medium">Power:</span> {e.power}
                                            </p>
                                        )}
                                        {e.speed && (
                                            <p className="text-sm text-gray-700">
                                                <span className="font-medium">Top Speed:</span> {e.speed}
                                            </p>
                                        )}
                                        {e.accel && (
                                            <p className="text-sm text-gray-700">
                                                <span className="font-medium">Acceleration:</span> {e.accel}
                                            </p>
                                        )}

                                        {/* Checkbox */}
                                        <label className="flex items-center gap-2 mt-4 text-sm">

                                            {
                                                selectedData.variant == e.variant ? <Fragment><h1 className="text-green-500">Already Selected</h1></Fragment>

                                                    :
                                                    <Fragment>
                                                        <input
                                                            type="radio"
                                                            name="compareSelect"
                                                            className="w-4 cursor-pointer h-4 accent-black"
                                                            onChange={() => handleAddToCompare(e.variant)}
                                                        />
                                                        <span className="text-gray-700">Add to comparison</span>
                                                    </Fragment>
                                            }


                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
        </Fragment>
    )
}

export default Modal