import Header from '../Components/Header'
import Footer from '../Components/Footer'
import style from './ErrorPage.module.css'

const ErrorPage = () =>{

    const styleError = {
        position : 'fixed', 
        left : '0', 
        bottom : '0', 
        width : '100%'
    }

    return (
    <>
        <Header/>
        <section className={style.error_page}>
            <h1>
                Página não encontrada !!!    
            </h1>
        </section>
        <Footer styleError={styleError}/>
    </>    
    )
}

export default ErrorPage