import {CartCard} from "./CartCard";
import {Checkout} from "./Checkout";
import {useState} from "react";
import { useCart } from "../../../context"

export const CartList = () => {
    const [checkout, setCheckout] = useState(false);
    const { cartList, total } = useCart();

    // const cartList = [
    //     {
    //     "id": 10007,
    //     "name": "Seventh Son of a Seventh Son",
    //     "overview": "Released 1988 - Capitol Records",
    //     "long_description": "Seventh Son of a Seventh Son is the seventh studio album by English heavy metal band Iron Maiden. It was released on 11 April 1988 in the United Kingdom by EMI Records and in the United States by Capitol Records.",
    //     "price": 39,
    //     "poster": "https://upload.wikimedia.org/wikipedia/en/c/c0/Iron_Maiden_-_Seventh_Son_Of_A_Seventh_Son.jpg",
    //     "image_local": "/assets/images/10004.avif",
    //     "rating": 5,
    //     "in_stock": true,
    //     "size": 7,
    //     "best_seller": true
    // }, {
    //         "id": 10007,
    //         "name": "Seventh Son of a Seventh Son",
    //         "overview": "Released 1988 - Capitol Records",
    //         "long_description": "Seventh Son of a Seventh Son is the seventh studio album by English heavy metal band Iron Maiden. It was released on 11 April 1988 in the United Kingdom by EMI Records and in the United States by Capitol Records.",
    //         "price": 39,
    //         "poster": "https://upload.wikimedia.org/wikipedia/en/c/c0/Iron_Maiden_-_Seventh_Son_Of_A_Seventh_Son.jpg",
    //         "image_local": "/assets/images/10004.avif",
    //         "rating": 5,
    //         "in_stock": true,
    //         "size": 7,
    //         "best_seller": true
    //     }
    // ];

    return (
        <>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
                    My Cart ({cartList.length})
                </p>
            </section>

            <section>
                { cartList.map((product) => (
                    <CartCard key={product.id} product={product} />
                )) }
            </section>

            <section className="max-w-4xl m-auto">
                <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
                    <p className="flex justify-between my-2">
                        <span className="font-semibold">Total Amount:</span>
                        <span>${total}</span>
                    </p>
                </div>
                <div className="text-right my-5">
                    <button onClick={() => setCheckout(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                        PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
                    </button>
                </div>
            </section>
            {checkout && <Checkout setCheckout={setCheckout}/>}
        </>
    )
}