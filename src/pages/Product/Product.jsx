import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/productsSlice";

function Product() {
    const { id } = useParams();
    const { data, loading } = useApi("/" + id);
    const dispatch = useDispatch();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[300px]">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex justify-center items-center min-h-[300px]">
                <p className="text-xl text-error">Product not found</p>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch(addToCart({ ...data }));
    };

    return (
        <div className="container py-10 flex flex-col md:flex-row gap-10 items-center">
            <img
                src={data.image}
                alt={data.title}
                className="w-[300px] h-[300px] object-contain rounded-xl bg-base-200"
            />
            <div className="flex-1 flex flex-col gap-6">
                <h1 className="text-3xl font-bold">{data.title}</h1>
                <p className="text-lg text-gray-300">{data.description}</p>
                <div className="flex items-center gap-6 mt-4">
                    <span className="text-2xl font-bold text-primary">${data.price}</span>
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-primary"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;


// props drilling => useContext
// state management => redux toolkit
// tez, sifatli, o'rta loyihalar uchun ideal => zustant
