import {useState} from "react";

export default function Example22() {
    const [position, setPosition] = useState({x: 0, y: 0});
    return (
        <div
            onPointerMove={e => {
                setPosition(p => ({x: e.clientX, y: e.clientY}) );
            }}
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
            }}
        >
            <h1>Example22</h1>

            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(calc(${position.x}px - 100%), ${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }}/>
        </div>
    );
}