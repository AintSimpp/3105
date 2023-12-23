import logo from '../images/logo1(white) 1.png'
import colorLogo from '../images/color-logo-tinder.png'

const Nav = ({minimal, authToken, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false);
      };
    return (
        <nav>
            <div className='logo-container'>
                <img className="logo" src={minimal? colorLogo : logo} height={"50px"}/>
            
            </div>

            {!authToken && !minimal && 
                <button
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}
                >
                Log in
                </button>
            }
        </nav>
        
    )
}

export default Nav
