import React from 'react';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Layout} from "./components/Layout";
import {EcoMarket} from "./components/content/EcoMarket";
import {Home} from "./components/Home/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/ecomarket" element={<EcoMarket/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Route>
        </Routes>
    )
}
export default App;
