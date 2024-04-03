import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function Challenge11() {
    //TODO: query를 위로 올려야 함
    // handleChange 함수를 만들어서 input의 onChange 이벤트에 연결해야 함
    // filterItems 함수를 사용해서 검색된 결과를 items에 저장해야 함
    // List 컴포넌트에 items를 props로 전달해야 함

    const [query, setQuery] = useState('');

    function handleChange(e) {
        setQuery(e.target.value);
    }

    const filteredFoods = filterItems(foods, query);

    return (
        <>
            <h2>Challenge 11</h2>
            <p>query Result : {query}</p>
            <SearchBar
                query={query}
                handleChange={handleChange}
            />
            <hr />
            <List items={filteredFoods} />
        </>
    );
}

function SearchBar({query, handleChange}) {

    return (
        <label>
            Search:{' '}
            <input
                value={query}
                onChange={handleChange}
            />
        </label>
    );
}

function List({ items }) {
    return (
        <table>
            <tbody>
            {items.map(food => (
                <tr key={food.id}>
                    <td>{food.name}</td>
                    <td>{food.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
