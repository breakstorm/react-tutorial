import {useState} from "react";

const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}];

export default function Challenge3() {
    const [products, setProducts] = useState(initialProducts);

    function handleAddCount(currentProduct) {
        const newProducts = products.map(product => {
            if (product.id === currentProduct.id) {
                return {
                    ...product,
                    count: product.count + 1
                }
            } else {
                return product;
            }
        });
        setProducts(newProducts);
    }

    return (
        <>
            <h1>Challenge3</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name}
                        {' '}
                        (<b>{product.count}</b>)
                        <button onClick={() => handleAddCount(product)}> + </button>
                    </li>
                ))}
            </ul>
        </>
    );
}