import Logo from '../assets/novaLogo.png'
import MainBanner from '../assets/bannerPrincipal3.png'
import NossoMetodo from '../assets/nossoMetodo.png'
import Portfolio from '../assets/portfolio.png'
import style from './Home.module.css'
import styleArrow from '../Components/Arrow.module.css'
import SimpleSlider from '../Components/SimpleSlider'

const Home = () =>{
    return (
        <>
            <section className={style.home_section}>
                <img src={Logo} alt='banner' className={style.logo}/>

                {/*<img src={MainBanner} alt='banner principal' className={style.mainBanner}/>*/}
            </section>

            <section className={`container ${style.portfolio}`}>
                <img src={Portfolio} alt='portfolio'/>
            </section>

            {/*O simplsSlider tem que ser encapsulado com algo (div, section, etc) por causa do root.div. Se não encapsular,
            o root.div sera append no root do site inteiro e não vai funcionar como deve*/}
            <section> 
                <SimpleSlider/>
            </section>

            <section className={`container ${style.nosso_metodo}`}>
                <h1>NOSSO MÉTODO</h1>

                <div className={style.nosso_metodo_content}>
                    <img src={NossoMetodo} alt='nosso metodo'/>

                    <div className={style.nosso_metodo_text}>
                        <h2>CONHECIMENTO</h2>

                        <p className={style.nosso_metodo_paragraph}>
                            Nossa empresa está sempre em busca de novos conhecimentos, 
                            novas tecnologias e inovação</p>

                        <div className={styleArrow.arrow}></div>

                        <h2>HABILIDADES</h2>

                        <p className={style.nosso_metodo_paragraph}>
                            Contamos com uma equipe especialista e conceituada garantindo 
                            sempre os resultados</p>

                        <div className={styleArrow.arrow}></div>

                        <h2>AÇÕES</h2>

                        <p className={style.nosso_metodo_paragraph}>
                            Responsabilidade técnica, mão de obra especializada, 
                            garatindo sempre eficiência e transparência em nossas ações
                        </p>

                    </div>
                </div> 

            </section>
        </>
    )
}

export default Home 