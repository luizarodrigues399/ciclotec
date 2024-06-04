import style from './Footer.module.css'
import styleModal from './Modal.module.css'
import Logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaCircle, FaPhone } from "react-icons/fa6";
import { useState } from 'react';
import Modal from 'react-modal'

const Footer = ({styleError}) => {

    let FacebookStyle = { 
        position: 'absolute', 
        fontSize: '2rem', 
        left: '0em'
    };

    let FacebookCircle = { 
        color: 'white', 
        fontSize: '2rem',
        filter: 'drop-shadow(2px 2px 3px #000000)'
    };

    let iconsStyle = { 
        position: 'absolute', 
        fontSize: '1.5rem', 
        color: 'white',
        left: '7px',
        bottom: '10px'
    };
    
    let iconsCircle = { 
        fontSize: '2rem',
        filter: 'drop-shadow(2px 2px 3px #000000)' 
    };
        
    let span = { position: 'relative' };

    let phoneIcon = {
        ...iconsStyle,
        fontSize: '1.2rem',
        left: '7px',
        bottom: '15px'
    }

    let phoneCircle = {
        fontSize: '1.9rem'
    }

    const facebook = 'https://www.facebook.com/profile.php?id=100064126599300';

    const instagram = 'https://www.instagram.com/ciclotec_engenharia';

    const whatsapp = 'https://api.whatsapp.com/send/?phone=5531994433255&text=Quero+saber+mais+sobre+engenharia';

    const email = 'rogerwillianrosa@gmail.com'

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')

        if (newWindow) newWindow.opener = null
      }

    const [modalIsOpen, SetIsOpen] = useState(false)

    const openModal = () =>{
        SetIsOpen(true)
    }

    const closeModal = () =>{
        SetIsOpen(false)
    }

    return (
        <footer className={style.footer} style={styleError}>

            <img className={style.footer_img} src={Logo} alt='logo'/>

            <div className={style.linha}></div>

            <div className={style.social_media}>
                <h3>Entre em contato conosco!!!</h3>

                <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel='Email de contato'
                    className={styleModal.modal_content}
                    ariaHideApp={false}
                >
                    <div>
                        <p>{email}</p>
                        <button className={styleModal.modal_button} onClick={closeModal}>Fechar</button>
                    </div>
                </Modal>


                <div className={style.social_media_icons}>
                    <span style={span}>
                        <FaCircle style={FacebookCircle} />
                        <FaFacebook style={FacebookStyle} 
                        onClick={
                            (event)=>{ openInNewTab(facebook); }
                        }/>
                    </span>

                    <span style={span}>
                        <FaCircle style={iconsCircle} />
                        <FaInstagram style={iconsStyle} onClick={
                            (event)=>{ openInNewTab(instagram); }
                        }/>
                    </span>

                    <span style={span}>
                        <FaCircle style={iconsCircle} />
                        <FaWhatsapp style={iconsStyle} onClick={
                            (event)=>{ openInNewTab(whatsapp); }
                        }/>
                    </span>

                    <span style={span}>
                        <FaCircle style={iconsCircle} />
                        <FaEnvelope style={iconsStyle} onClick={ openModal }/>
                    </span>
                </div>

                <p>ciclotec @ 2024 - Todos os direitos reservados</p>
            </div>

            <div className={style.linha}></div>

            <div className={style.phone_contact_group}>
                <div className={style.phone_contact}>
                    <span style={span}>
                        <FaCircle style={phoneCircle} />
                        <FaPhone style={phoneIcon} />
                    </span>

                    <h3>Telefone:</h3>
                </div>
                
                <h4 className={style.phone_number}>+55 (31) 99443-3255</h4> 
            </div>
            
        </footer>
    )
}

export default Footer