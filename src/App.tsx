import './App.css';
import {Header} from "./Header/Header";
import Main from "./Main/Main";
import {About} from "./About/About";
import {Portfolio} from "./Portfolio/Portfolio";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
