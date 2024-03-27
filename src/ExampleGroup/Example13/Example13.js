const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];
export default function Example13() {
    const listItem = people.map(person =>
        <li key={person}>{person}</li>);

    return (
        <section>
            <h2>Example13</h2>
            <ul>{listItem}</ul>
        </section>
    );
};