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

export default function Challenge4() {
    const [products, setProducts] = useState(initialProducts);

    function handleAddCount(currentProduct) {
        const newProducts = products.map(product => {
            console.log('currentProduct:', currentProduct);
            if (product.id === currentProduct.id) {
                return {
                    ...product,
                    count: product.count + 1
                }
            } else {
                return product;
            }
        });
        console.log('newProducts:', newProducts);
        setProducts(newProducts);
    }

    function handleDeleteCount(currentProduct) {
        const newProducts = products.filter(product => {
            return (product.id === currentProduct.id) ? false : true;
        })
        setProducts(newProducts);
    }
    return (
        <>
            <h1>Challenge4</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name}
                        {' '}
                        (<b>{product.count}</b>)
                        <button onClick={() => handleAddCount(product)}> + </button>
                        <button onClick={() => handleDeleteCount(product)}> + </button>
                    </li>
                ))}
            </ul>
        </>
    );
}