import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Forecast from "./components/Forecast/Forecast";

function App() {
    return (
        <div className="App grid grid-rows-3">
            <Header/>
            <Forecast/>
            <Footer/>
        </div>
    );
}

export default App;
