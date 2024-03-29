export default function Example18() {
    return (
        <>
            <section>
                <title>Quick Start Example 18</title>
                <h1>Example18</h1>
                <form
                    onSubmit={(e) => {
                        // e.preventDefault();
                        alert('Submitted');
                    }}
                >
                    <input type="text"
                    />
                    <button>send</button>
                </form>
            </section>
        </>
    );
}