import React, { Suspense, lazy } from "react";
import "./App.css";
const Header = lazy(() => import("HeaderApp/Header"));

function App() {
    return (
        <div className="App">
            <Suspense fallback="Loading...">
                <Header />
            </Suspense>
            <div className="Home">
                <h1>Home Page</h1>
            </div>
        </div>
    );
}

export default App;
