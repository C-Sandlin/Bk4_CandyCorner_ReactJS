import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import CandyCorner from "./components/CandyCorner";


ReactDOM.render(
    <Router>
        <CandyCorner />
    </Router>
    , document.getElementById('root'));



