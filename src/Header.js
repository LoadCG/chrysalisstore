import logoPreta from './images/Black_Entire_Logo.jpg';
import logoBranca from './images/White_Entire_Logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
    

    return (
        <nav className="navbar navbar-expand-lg p-3 navbar-light" style={{ backgroundColor: '#504335', width:'100%', position:'fixed-top', top:'0', zIndex:'10'}}>
            <a className="navbar-brand" href="#">
                <img src={logoBranca} height="29px" alt="Logo" />
            </a>
            <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="d-flex justify-content-between collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* Lista de setores */}
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="#">
                            <strong>DESTAQUES</strong>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">HOMEM</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">MULHER</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">INFANTIL</a>
                    </li>
                </ul>

                {/* Icons do fim do nav */}
                <ul className="nav navbar">
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="#">
                            <i className="bi bi-cart ml-auto"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">
                            <i className="bi bi-search ml-auto"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;