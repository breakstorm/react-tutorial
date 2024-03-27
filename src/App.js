import logo from './logo.svg';
import Chapter1 from './ChapterList/Chapter1/Chapter1';
import Chapter2 from './ChapterList/Chapter2/Chapter2';
import './App.css';
import PageList from './PageList/PageList';

import { Routes, Route, Outlet, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <section>
                {/*<p>page route list</p>*/}
                <Routes>
                    <Route path="/" element={ <PageList />}>
                        <Route index element={ <Chapter1 /> } />
                        <Route path="Chapter2" element={<Chapter2/>}/>
                        <Route path="C" element={<div>C</div>}/>
                        <Route path="*" element={<div>No Matach</div>}/>
                    </Route>
                </Routes>
            </section>
        </div>
    );
}

export default App;
