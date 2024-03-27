import { getImageUrl } from './utils.js';
export default function Example9() {
    return (
        <>
            <h2>Example9</h2>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </>
    )
}
function Avatar({person, size}) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person, size)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}