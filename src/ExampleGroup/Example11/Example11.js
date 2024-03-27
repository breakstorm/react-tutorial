    import {useEffect, useState} from 'react';

    export default function Example11() {
        // const [time, setTime] = useState(() => new Date());
        // useEffect(() => {
        //     console.log('color changed');
        //     const id = setTimeout(() => {
        //         setTime(new Date());
        //     }, 1000)
        // }, [time]);

        const [color, setColor] = useState('lightcoral');
        const time2 = useTime();

        function handleColorChange(event) {
            setColor(event.target.value);
        }


        return (
            <section>
                <h2>Example11</h2>
                <div>
                    piock a color:
                    <select value={color} onChange={handleColorChange}>
                        <option value="lightcoral">lightcoral</option>
                        <option value="midnightblue">midnightblue</option>
                        <option value="rebeccapurple">rebeccapurple</option>
                    </select>
                </div>
                <div>color : {color}</div>
                <Clock
                    color={color}
                    time={time2}
                    // time={time}
                    // time={'12:00:00'}
                ></Clock>
            </section>
        );
    };

function Clock({color, time}) {
    return (
        <div style={{
            color: color
            , fontSize: '4rem'
            , fontWeight: '700'
        }}>
            { time.toLocaleTimeString() }
        </div>
    );
}

function useTime() {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        const id = setTimeout(() => {
            // console.log('useTime ::: time:', time)
            setTime(() => new Date());
        }, 1000);

        return () => {
            // console.log('useTime ::: cleanup');
            clearTimeout(id);
        };
    }, [time]);

    return time;
}