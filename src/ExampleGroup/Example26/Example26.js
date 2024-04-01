import {useState} from "react";
import {useImmer} from "use-immer";

let nextId = 3;
const initialList = [
    {id: 0, title: 'Big Bellies', seen: false},
    {id: 1, title: 'Lunar Landscape', seen: false},
    {id: 2, title: 'Terracotta Army', seen: true},
];

function ItemList({artworks, onToggle, onAdd}) {
    return (
        <ul>
            <div>
                <input type="text"/>
                <button onClick={onAdd}>add</button>
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

    function handleAddMylist() {
    return (
        <>
            <h1>Example 26</h1>

            <h2>My List</h2>
            <ItemList
                artworks={myList}
                onAdd={handleAddMylist}
                onToggle={handleToggleMyList}/>
            <h2>Your List</h2>
            <ItemList
                artworks={yourlist}
                onAdd={handleAddYourlist}
                onToggle={handleToggleYourList}/>
        </>
    );
}