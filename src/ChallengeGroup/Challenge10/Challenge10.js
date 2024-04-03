import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.js';

export default function Challenge10() {
    const [letters, setLetters] = useState(initialLetters);
    const [highlightedLetter, setHighlightedLetter] = useState(null);
    const [highlightedLetterId, setHighlightedLetterId]  = useState(null);

    function handleHover(letterId) {
        // setHighlightedLetter(letter);
        // setHighlightedLetterId(letter.id);
        setHighlightedLetterId(letterId);
    }

    function handleStar(starred) {
        setLetters(letters.map(letter => {
            if (letter.id === starred.id) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                };
            } else {
                return letter;
            }
        }));
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={
                            letter.id === highlightedLetterId
                        }
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    );
}
