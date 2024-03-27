import {useState} from "react";

export default function Example5() {
    return (
        <>
            <section>
                <title>Quick Start Example 5</title>
                <h1>Example5</h1>
                <h2>Counters that update together</h2>
                <MyApp3/>
            </section>
        </>
    )
}

function MyApp3 () {
    const [count, setCount] = useState(0);

    function handleClick() {
        // console.log('handleClick ::: count:', count);
        setCount(count + 1);
    }
    return (
        <>
            <h1>Counters that update together</h1>
            <MyButton3 count={count} onClick={handleClick}/>
            <MyButton3 count={count} onClick={handleClick}/>
        </>
    );

}
function MyButton3 ({count, onClick}) {

    return (
        <button onClick={onClick}>Clicked {count} items</button>

    );

}