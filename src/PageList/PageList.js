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
                    <Link to="/B">B</Link>
                    </li>
                    <li>
                    <Link to="/C">C</Link>
                    </li>
                    <li>
                    <Link to="/D">D</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}