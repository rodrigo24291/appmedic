import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './component/Home/Home';
import Layouts from './component/layaout/Layouts';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import Register from './component/Register/Register';
import User from './component/User/User';

export default function App() {
    
    const store = generateStore()

    return (

        <Provider store={store}>
            <BrowserRouter>
                <Layouts>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/user" element={<User/>} />
                    </Routes>
                </Layouts>
            </BrowserRouter>
        </Provider>

    )
}
