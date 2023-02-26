import './App.css';
import {Header} from "./Header/Header";
import Main from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Portfolio} from "./Portfolio/Portfolio";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import * as emailjs from "@emailjs/browser";

function App() {
    const initialEmail = () => emailjs.init("-Nf-Lep7B5XtWi-tv");
    initialEmail()
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
