export default function Example16() {

    return (
        <>
            <section>
                <title>Quick Start Example 16</title>
                <h1>Example16</h1>
                <TeaGathering></TeaGathering>
            </section>
        </>
    );
};

function TeaGathering () {
    let cups = [];
    for (let i = 1; i <= 12; i++) {
        cups.push(<Cup key={i} guest={i}/>);
    }

    return cups;
}

function Cup ({ guest = 100}) {
    return (<h2>Tea cup for guest #{guest}</h2>)
}