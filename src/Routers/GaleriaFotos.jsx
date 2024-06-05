import styleArrow from '../Components/Arrow.module.css'
import style from './GaleriaFotos.module.css'
import estanciaCipo1 from '../assets/estanciaCipo1.png'
import estanciaCipo2 from '../assets/estanciaCipo2.png'
import GranRoyale from '../assets/granRoyale.png'
import BoulevardAnglo from '../assets/boulevardAnglo.png'
import SaoJoseDaLapa from '../assets/saoJoseDaLapa.png'
import Matozinhos from '../assets/matozinhos.png'
import EventoGrandePorte from '../assets/eventosDeGrandePorte.png'
import BaseApoioIndustria from '../assets/baseApoioIndustria.png'


const GaleriaFotos = () =>{
    return (
        <section className={`container ${style.galeria_fotos}`}>
            <h1>Galeria Fotos</h1>

            <h2>Residência Condomínio Estância do Cipó</h2>

            <div className={style.galeria_fotos_img}>            
                <img src={estanciaCipo1} alt='fotos do projeto em Estancia do Cipo'/> 
            </div>

            <div className={style.galeria_fotos_img}>            
                <img src={estanciaCipo2} alt='fotos do projeto em Estancia do Cipo'/> 
            </div>

            <div className={`${styleArrow.arrow} ${style.arrow}`}></div>

            <h2>Residência Condomínio Gran Royale - Confins</h2>

            <div className={style.galeria_fotos_img}>            
                <img src={GranRoyale} alt='fotos do projeto Gran Royale em Confins'/> 
            </div>

            <div className={`${styleArrow.arrow} ${style.arrow}`}></div>

            <h2>Shopping Boulevard - Concretagem com uso de Gelo <small>(à esquerda)</small></h2>
            
            <h2>AngloGold - Concretagem alto adensável <small>(à direita)</small></h2>
        
            <div className={style.galeria_fotos_img}>            
                <img src={BoulevardAnglo} alt='fotos dos projetos Boulevard e Anglo '/> 
            </div>

            <p>Amostra de Desenvolvimento e Apoio Técnico de Tecnologia de concreto especial 
                em regime CLT para o mercado.</p>

            <div className={`${styleArrow.arrow} ${style.arrow}`}></div>

            <h2>Inspeção em Obras de Arte Município São José da Lapa</h2>
            
            <div className={style.galeria_fotos_img}>            
                <img src={SaoJoseDaLapa} alt='fotos do projeto em São Jose da Lapa'/> 
            </div>

            <div className={`${styleArrow.arrow} ${style.arrow}`}></div>

            <h2>Inspeção em Obras de Arte Município Matozinhos</h2>

            <div className={style.galeria_fotos_img}>            
                <img src={Matozinhos} alt='fotos do projeto em Matozinhos'/> 
            </div>

            <div className={`${styleArrow.arrow} ${style.arrow}`}></div>

            <h2>Infra Estrutura completa eventos de Grande Porte</h2>
            
            <div className={style.galeria_fotos_img}>            
                <img src={EventoGrandePorte} alt='fotos do projeto para eventos de Grande Porte'/> 
            </div>

            <div className={`${styleArrow.arrow} ${style.arrow}`}></div>

            <h2>Infra estrutura completa base de apoio indústria</h2>

            <div className={style.galeria_fotos_industria}>            
                <img src={BaseApoioIndustria} alt='fotos do projeto para eventos de apoio industria'/> 
            </div>
        </section>
    )
}

export default GaleriaFotos