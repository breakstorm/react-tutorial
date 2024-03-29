import { useState } from 'react';

export default function Example21() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit (e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }


    return (
        <>
            <h1>Example21</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    To: {''}
                    <select
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    >
                        <option value="Alice">Alice</option>
                        <option value="Bob">Bob</option>
                    </select>
                </label>

                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                <button type="submit">Send</button>
            </form>
        </>
    );
}