import {useState} from "react";
import {sculptureList} from "./data";

export default function Example19() {
    const [sculptureIndex, setSculptureIndex] = useState(0);
    const sculpture = sculptureList[sculptureIndex];
    const nextSculpture = () => setSculptureIndex((sculptureIndex + 1) % sculptureList.length);

    return (
        <>
            <h1>Example 19: Sculpture Viewer</h1>
            <p>Here is a sculpture:</p>
            <img src={sculpture.url} alt={sculpture.name} />
            <p>{sculpture.description} by {sculpture.artist}</p>
            <button onClick={nextSculpture}>Next sculpture</button>
        </>
    );
}