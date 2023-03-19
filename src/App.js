import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Forecast from "./components/Forecast/Forecast";

function App() {
    return (
        <div className="App grid grid-rows-3">
            <Header/>
            <Routes>
                <Route path="/" element={<Forecast/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
