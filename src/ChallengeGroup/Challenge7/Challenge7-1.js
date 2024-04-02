import './Challenge7.css';
import {useState} from "react";

export default function Challenge7_1() {
    const [isBackgroundActive, setIsBackgroundActive] = useState(false);
    let backgroundClassName = 'background'
    if (isBackgroundActive) {
        backgroundClassName += ' background--active';
    } else {
        backgroundClassName = 'background';
    }


    function handleBackground () {
        setIsBackgroundActive(!isBackgroundActive);
    }
    return (
        <>
            <h1>Challenge 7_1</h1>
            <div className={backgroundClassName} onClick={handleBackground}>
                <img
                    className="picture"
                    alt="Rainbow houses in Kampung Pelangi, Indonesia"
                    src="https://i.imgur.com/5qwVYb1.jpeg"
                />
            </div>
        </>
    )
};