import {useState} from "react";
import {useImmer} from "use-immer";

const initialList = [
    {id: 0, title: 'Big Bellies', seen: false},
    {id: 1, title: 'Lunar Landscape', seen: false},
    {id: 2, title: 'Terracotta Army', seen: true},
];

function ItemList({artworks, onToggle, onAdd}) {
    const [input, setInput] = useState('');
    function handleInput (e) {
        console.log('handleInput ::: e.target.value:', e.target.value);
        setInput(e.target.value); }


    return (
        <ul>
            <div>
                <input type="text" onChange={handleInput}/>
                <button onClick={() => {
                    onAdd(input);
                }}>add</button>
                <p>{input}</p>
            </div>

            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}


export default function Example26() {
    const [myList, updateMyList] = useImmer(initialList);
    const [yourlist, updateYourList] = useImmer(initialList);

    function handleToggleMyList(id, nextSeen) {
        updateMyList(draft => {
            const item = draft.find(item => item.id === id);
            item.seen = nextSeen;
        });
    }

    function handleToggleYourList(id, nextSeen) {
        updateYourList(draft => {
            const artwork = draft.find(a => a.id === id);
            artwork.seen = nextSeen;
        });
    }

    function handleAddMyList(title) {
        let newId = Number(myList.length);
        updateMyList(draft => {
            draft.push({
                id: newId,
                title: title,
                seen: false
            });
        });
    }

    function handleAddYourList(title) {
        let newId = Number(yourlist.length);
        updateYourList(draft => {
            draft.push({
                id: newId,
                title: title,
                seen: false
            });
        });
    }

    return (
        <>
            <h1>Example26</h1>
            <h2>My List</h2>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList}
                onAdd={handleAddMyList}
            />
            <h2>Your List</h2>
            <ItemList
                artworks={yourlist}
                onToggle={handleToggleYourList}
                onAdd={handleAddYourList}
            />
        </>
    )
}

