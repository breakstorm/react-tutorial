export default function Example1() {
    return (
        <>
            <section>
                <title>Quick Start Example 1</title>
                <h1>Example1</h1>
                <h2>Welcome to my app</h2>
                {/*<button>I'm a button</button>*/}
                <MyButton/>
            </section>
        </>
    );
}

function MyButton() {
    return (<button>I'm a button</button>)
}