import { useEffect, useState} from "react";

export default function Example20() {
    const time = useTime();

    return (
        <>
            <h1>Example20</h1>
            <Clock time={time.toLocaleTimeString()}/>
        </>
    );
};

function useTime () {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            // console.log('setInterval ::: time:', time);
            setTime(new Date());
        }, 1000);

        return () => clearInterval(id);
    }, []);
    return time
}
function Clock({ time }) {
    return (
        <>
            <h1>{time}</h1>
            <input />
        </>
    );
}
