import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { publicRoutes } from './pages';
import { useState } from 'react';

function App() {
    const [toggleState, setToggleState] = useState(1);
    return (
        <Router>
            <div className="App">
                <header className="appHeader">
                    <h1>Webcome</h1>
                </header>
                <nav className="sideBar">
                    <ul>
                        {publicRoutes.map((route, index) => {
                            return (
                                <li
                                    key={index}
                                    className={toggleState === index ? 'tabActive' : ''}
                                    onClick={() => {
                                        setToggleState(index);
                                    }}
                                >
                                    <Link to={route.path}> {route.name} </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="content">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            return <Route key={index} path={route.path} element={route.component}></Route>;
                        })}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
