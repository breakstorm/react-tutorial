import './Challenge7.css';
import {useState} from "react";

export default function Challenge7() {
    const [backgroundState, setBackgroundState] = useState('background');

    function handleBackground () {
        console.log('handleBackground ::: backgroundState:', backgroundState);
        setBackgroundState(backgroundState.includes('active') ? 'background' : 'background background--active');
    }
    return (
        <>
            <h1>Challenge 7</h1>
            <div className={backgroundState} onClick={handleBackground}>
                <img
                    className="picture"
                    alt="Rainbow houses in Kampung Pelangi, Indonesia"
                    src="https://i.imgur.com/5qwVYb1.jpeg"
                />
            </div>
        </>
    )
};