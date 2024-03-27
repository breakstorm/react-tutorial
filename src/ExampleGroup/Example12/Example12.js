export default function Example12() {
    return (
        <section>
            <h2>Example12</h2>
            <h3>Sally Ride's Packing List</h3>
            <ul>
                <Item name="Underwear" isPacked={true} />
                <Item name="Toothbrush" isPacked={true} />
                <Item name="Sunscreen" isPacked={false} />
                <Item2 name="Sunglasses" isPacked={false} />
                <Item2 name="Sandals" isPacked={true} />
                <Item2 name="Passport" isPacked={true} />
            </ul>
        </section>
    );
}

function Item({ name, isPacked}) {
    return (
        <li className="item">
            {isPacked ? (
                <del>
                    {name + ' ✔'}
                </del>
            ) : (
                name
            )}
        </li>
    );
}

function Item2({ name, isPacked}) {
    return (
        <li className="item">
            {name} {isPacked && '✔'}
        </li>
    );
}