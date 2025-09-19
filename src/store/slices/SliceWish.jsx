import { createSlice } from "@reduxjs/toolkit";
import { delAllWish, delIndividualWish } from "../actions";

// first slice
const SliceWish = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addWishlist(state, action) {
            const res = state.find((e) => {
                return e.id === action.payload.id
            })
            if (!res) {
                state.push(action.payload)
            }
        },

        // delWishlist(state, action) {
        //     return state.filter((e) => {
        //         return e.id != action.payload
        //     })
        // },


        // delAll() {
        //     return [];
        // }
    },

    // this extraReducers is dependent so we use actioncreator
    // extraReducers(builders) {
    //     builders.addCase(SliceWish.actions.delAll, () => {
    //         return [];
    //     })
    // }

    extraReducers(builders) {
        builders
            .addCase(delAllWish, () => {
            return [];
        })

            .addCase(delIndividualWish, (state, action) => {
                return state.filter((e) => {
                    return e.id != action.payload
                })
            })
    },
});


// add to cart slice


const cartSlice = createSlice({
    name: "cart",
    initialState: [],            // state currently empty and also note that cartSlice state and wishlistSlice state are different
    reducers: {
        addToBag(state, action) {
            const res = state.find((e) => {
                return e.id == action.payload.id
            })

            if (!res) {
                state.push(action.payload)
            }
        },
        deleteCartData(state, action) {
            return state.filter((e) => {
                return e.id != action.payload;
            })
        }
    },
})

















// second slice

const adminSlice = createSlice({
    name: "admin",
    initialState: [],
    reducers: {

    },
    extraReducers(builders) {
        builders.addCase(delAllWish, () => {
            return [];
        })
    }
})




// export default SliceWish.reducer;
export const wishlistReducer = SliceWish.reducer;
export const adminReducer = adminSlice.reducer;
export const cartReducer = cartSlice.reducer;
export const { addWishlist, delWishlist, delAll } = SliceWish.actions;
export const { addToBag, deleteCartData } = cartSlice.actions;
