import {useState} from "react";

export default function Example4() {
    return (
        <>
            <section>
                <title>Quick Start Example 4</title>
                <h1>Example4</h1>
                <h2>Counters that update separately</h2>
                <MyButton2/>
                <MyButton2/>
            </section>
        </>
    )
}
function MyButton2 () {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>
            Click me! {count}
        </button>
    );
}