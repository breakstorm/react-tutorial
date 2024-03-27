import Avatar from "./Avatar";

export default function Example10() {
    return (
        <>
            <h2>Example10</h2>
            <Card>
                <Avatar
                    person={{
                        name: 'Katsuko Saruhashi',
                        imageId: 'YfeOqp2'
                    }}
                    size={100}
                    ></Avatar>
            </Card>
        </>
    );
}

function Card({ children }) {
    return (
        <div style={{
            border: '1px solid black',
            padding: '1rem',
            margin: '1rem',
            display: 'inline-block',
            borderRadius: '1rem'
        }}>
            {children}
        </div>
    )
}