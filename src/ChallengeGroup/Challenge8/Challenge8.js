import {useState} from "react";

export default function Challenge8() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');


    function handleIsEditing(e) {
        e.preventDefault();
        setIsEditing(!isEditing);
    }

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }

    function handleLastName(e) {
        setLastName(e.target.value);
    }

    let fullName = `${firstName} ${lastName}`;

    return (
        <>
            <h1>Challenge8</h1>
            <form>
                <label>
                    First name:{' '}
                    {isEditing ? <input value={firstName} onChange={handleFirstName}/> : <b>{firstName}</b>}
                </label>
                <label>
                    Last name:{' '}
                    {isEditing ? <input value={lastName} onChange={handleLastName}/> : <b>{lastName}</b>}
                </label>
                <button type="submit" onClick={handleIsEditing}>
                    {isEditing ? 'Save' : 'Edit'} Profile
                </button>
                <p><i>Hello, {fullName}!</i></p>
            </form>
        </>
    );
}
