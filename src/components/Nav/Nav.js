import { useEffect, useState } from 'react'
import './Nav.css'
import { useHistory } from 'react-router-dom'
import logo from '../../img/logo.png'
function Nav() {

    const [show, handleShow] = useState(false)
    const history = useHistory()

    const transitionNav = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        }
        else {
            handleShow(false)

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNav)
        return () => window.removeEventListener('scroll', transitionNav)
    }, [])

    return (
        <div className={`nav ${show && `nav__black`}`}>

            <div className="nav__contents">
                <img onClick={() => history.push('/')} className="nav__logo" src={logo} alt="" />

                <img onClick={() => history.push('/profile')} className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>

        </div>
    )
}

export default Nav
