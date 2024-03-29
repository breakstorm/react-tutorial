import {useState} from "react";

export default function Challenge1S() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick () {
        console.log(1)
        setPending(pending => pending + 1);
        await delay(3000);
        console.log(2)
        setPending(pending => pending - 1);
        setCompleted(completed => completed + 1);
        console.log(3)
    }

    return (
        <>
            <h3>Pending: {pending}</h3>
            <h3>Completed: {completed}</h3>
            <button onClick={handleClick}>Buy</button>
        </>
    );
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}