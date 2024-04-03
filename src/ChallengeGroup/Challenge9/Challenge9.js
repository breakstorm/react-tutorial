import {useEffect, useState} from "react";

export default function Challenge9() {
    const [color, setColor] = useState('red');
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    function handleColor(event) {
        setColor(event.target.value)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    })

    return (
        <>
            <h2>Challenge 9</h2>
            <select name="color" id="" value={color} onChange={handleColor}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
            </select>
            <p>color result: {color}</p>
            <Color
                color={color}
                time={new Date().toLocaleTimeString()}
            />
        </>
    );
}

function Color ({ color, time }) {
    return (
        <h1 style={{color: color}}>
            <h1>{time}</h1>
        </h1>
    )
}