import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React from "react";
// import ReactDOM from 'react-dom'
// import axios from "axios";
import Hero from "./components/Hero";
import Canvas from "./components/Canvas";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Form />
            <Canvas width={700} height={500} />
            <About />
            <Footer />
        </div>
    );
}

export default App;
