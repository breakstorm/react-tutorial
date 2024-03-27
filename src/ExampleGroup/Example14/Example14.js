import {people} from "./data";
import {getImageUrl} from "./utils";

export default function Example14() {
    const chemist = people.filter(person => true);
    const listItems = chemist.map((person) =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return (
        <>
            <h2>Example14</h2>
            <ul>{listItems}</ul>;
        </>
    );
};