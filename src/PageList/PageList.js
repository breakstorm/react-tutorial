import {Link, Outlet, Route, Routes} from "react-router-dom";
import './PageList.css';

export default function PageList() {
    return (
        <div className="container">
            <div>
                <h2>page route list</h2>
                <ul>
                    <li>
                    <Link to="/">Chapter1</Link>
                    </li>
                    <li>
                    <Link to="/Chapter2">Chapter2</Link>
                    </li>
                    <li>
                    <Link to="/Chapter3">Chapter3</Link>
                    </li>
                    <li>
                    <Link to="/Chapter4">Chapter4</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}