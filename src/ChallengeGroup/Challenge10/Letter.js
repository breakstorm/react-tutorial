export default function Letter({
                                   letter,
                                   isHighlighted,
                                   onHover,
                                   onToggleStar,
                               }) {
    return (
        <li
            className={
                isHighlighted ? 'highlighted' : ''
            }
            style={{
                backgroundColor: isHighlighted ? 'yellow' : 'white'
            }}
            onFocus={() => {
                onHover(letter.id);
            }}
            onPointerMove={() => {
                onHover(letter.id);
            }}
        >
            <button onClick={() => {
                onToggleStar(letter);
            }}>
                {letter.isStarred ? 'Unstar' : 'Star'}
            </button>
            {letter.subject}
        </li>
    )
}
