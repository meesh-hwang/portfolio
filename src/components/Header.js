import logo from '../img/logo.png';
import schnik1 from '../img/schnikkerschnakkers/boulder-peeps.png';
import schnik2 from '../img/schnikkerschnakkers/hut-person.png';
import schnik3 from '../img/schnikkerschnakkers/meditator.png';
import schnik5 from '../img/schnikkerschnakkers/palm.png';
import schnik6 from '../img/schnikkerschnakkers/smiley-man.png';
import schnik7 from '../img/schnikkerschnakkers/tree.png';


function Header() {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className='Schnikker-schnakkers'>
                <div className='row'>
                    <img src={schnik6} className="Schnik" alt="schnikker schnakker smiling laying on its side" />
                    <img src={schnik5} className="Schnik" alt="palm schnikker schnakker being  munched by schnikker schnakker" />
                    <img src={schnik3} className="Schnik" alt="meditating schnikker schnakker on mushroom" />
                    <img src={schnik7} className="Schnik" alt="schnikker schnakkers hanging off of palm leaves by their teeth" />
                </div>
                <div className='row'>
                    <img src={schnik2} className="Schnik" alt=" schnikker schnakker coming out of hut" />
                    <img src={schnik1} className="Schnik" alt="boulder schnikker schnakker" />
                </div>

            </div>
        
        </header>
    )
}

export default Header