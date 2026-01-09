import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, minusFromCart, remuveFromCart } from "../../features/productsSlice";

function Cart() {
    const cartProducts = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const handlePlus = (product) => {
        dispatch(addToCart(product));
    };

    const handMinus = (product) => {
        dispatch(minusFromCart(product));
    };

    const handleRemove = (product) => {
        dispatch(remuveFromCart(product));
    };

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
            {cartProducts.length ? (
                <ul className="flex flex-col gap-6">
                    {cartProducts.map((product) => (
                        <li key={product.id} className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl bg-base-200 shadow">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-[120px] h-[120px] object-contain rounded-lg bg-white"
                            />
                            <div className="flex-1 flex flex-col gap-2 h-full justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold">{product.title}</h2>
                                    <p className="text-gray-400">{product.description}</p>
                                    <span className="text-lg font-bold text-primary">${product.price}</span>
                                </div>
                                <div className="flex items-center gap-2 mt-6 self-end">
                                    <button onClick={() => handMinus(product)} className="btn btn-sm btn-outline">
                                        <FaMinus />
                                    </button>
                                    <span className="text-lg font-bold">{product.amount}</span>
                                    <button onClick={() => handlePlus(product)} className="btn btn-sm btn-outline">
                                        <FaPlus />
                                    </button>
                                    <button onClick={() => handleRemove(product)} className="btn btn-error btn-sm flex items-center gap-2">
                                        <FaTrash /> Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="flex flex-col items-center justify-center py-20">
                    <p className="text-xl text-gray-400">Cart is empty</p>
                </div>
            )}
        </div>
    );
}

export default Cart;