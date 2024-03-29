import {useState} from "react";

export default function Example22() {
    const [number, setNumber] = useState(0);
    return (
        <>
            <h1>Example22</h1>
            <h2>Number : {number}</h2>
            <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber((number) => number + 1);
            }}>Increase
            </button>
        </>
    )
};