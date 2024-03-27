    export default function Example8() {
        return (
            <section>
                <h2>Example8</h2>
                <Avatar></Avatar>
            </section>
        );
    }

    function Avatar() {
        return (
            <img
                className="avatar"
                src="https://i.imgur.com/1bX5QH6.jpg"
                alt="Lin Lanying"
                width={100}
                height={100}
            />
        );
    }