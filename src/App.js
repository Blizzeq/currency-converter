import './App.scss';
import Navbar from "./Components/Navbar";
import CalculationCard from "./Components/CalculationCard";
import Footer from "./Components/Footer";

function App() {


    return (
        <div className="App">
                <Navbar/>
                <CalculationCard/>
                <Footer/>
        </div>
    );
}

export default App;
