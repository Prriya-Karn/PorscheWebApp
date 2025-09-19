import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBag } from "../store/slices/SliceWish";
import { delAllWish, delIndividualWish } from "../store/actions";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import { cars } from "../database/carCardData";

const WishlistItem = () => {
    const data = useSelector((state) => state.wish);
    const getCartData = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        const getdelData = cars.find((e) => {
            return e.id == id
        })
        toast.success(`${getdelData.title} is deleted 😔`)
        console.log(getdelData)
        dispatch(delIndividualWish(id));
    };

    const handleDeleteAll = () => {
        toast.success(`All are  deleted 😔`)
        dispatch(delAllWish());
    };

    const handleAddToCart = (id) => {
        const filter = cars.find((e) => {
            return e.id == id
        })
        dispatch(addToBag(filter))

        const checkDataPresentInCartOrNot = getCartData.some((e) => {
            return e.id == id
        })

        if (!checkDataPresentInCartOrNot) {
            dispatch(delIndividualWish(id))
            toast.success("added to cart")
        } else {
            toast.success("already added 😀")
        }




    }

    return (
        <div className="max-w-7xl mt-20 mx-auto h-screen p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-lg">
                    My Wishlist <span className="text-gray-500 text-sm">{data.length} items</span>
                </h1>
                {data.length > 0 && (
                    <button style={{ border: "1px solid gray" }}
                        onClick={handleDeleteAll}
                        className="px-5 py-2 rounded text-red-400 cursor-pointer"
                    >

                        Delete All
                    </button>
                )}
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-10 gap-y-14">

                {data.map((product) => (
                    <div
                        key={product.id} style={{ border: "1px solid gray" }}
                        className="relative flex border-2
                         border-gray-500 flex-col items-center 
                           shadow hover:shadow-lg transition">
                        {/* Delete button */}
                        <button
                            onClick={() => handleDelete(product.id)}
                            className="absolute top-2 
                             rounded-full cursor-pointer right-2 p-1 bg-gray-200 text-gray-500 hover:text-red-600">
                            <X className="w-4 h-4" />
                        </button>

                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-80 object-cover mb-3"
                        />

                        {/* Product Title */}
                        <h2 className="text-sm capitalize font-medium text-center line-clamp-2">
                            {product.title}
                        </h2>

                        {/* Price */}
                        <div className="mt-2 text-center">
                            {product.oldPrice && (
                                <span className="line-through text-gray-400 text-sm mr-2">
                                    Rs.{product.oldPrice}
                                </span>
                            )}
                            <span className="text-lg font-semibold text-gray-800">
                                Rs.{product.price}
                            </span>
                            {product.discount && (
                                <span className="text-red-500 text-sm ml-2">
                                    ({product.discount} OFF)
                                </span>
                            )}
                        </div>

                        {/* Button */}
                        <button onClick={() => handleAddToCart(product.id)}
                            className="mt-3 w-full cursor-pointer  text-red-400 py-2 text-sm" style={{ borderTop: "1px solid gray" }}>
                            Move to Bag
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishlistItem;
