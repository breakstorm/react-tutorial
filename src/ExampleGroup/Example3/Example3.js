
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];


export default function Example3() {
    return (
        <>
            <section>
                <title>Quick Start Example 3</title>
                <h1>Example3</h1>
                <ShoppingList/>
            </section>
        </>
    )
}

function ShoppingList () {
    const listItems = products.map( product =>
        <li key={product.id}
            style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}
        >{product.title}</li>
    )

    return (<ul>{listItems}</ul>)
}