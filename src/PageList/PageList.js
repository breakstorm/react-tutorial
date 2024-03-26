import {Link, Outlet, Route, Routes} from "react-router-dom";

export default function PageList() {
    return (
        <div>
            <Link to="/">Chapter1</Link>
            <Link to="/B">B</Link>
            <Link to="/C">C</Link>
            <Link to="/D">D</Link>

            <hr />

            <Outlet />
        </div>
    )
}