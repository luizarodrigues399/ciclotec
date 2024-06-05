import style from './Portfolio.module.css'
import servicosExecutados from '../assets/servicosExecutados.png'
import setorPublico from '../assets/setorPublico.png'


const Portfolio = () =>{
    return (
    <>
        <section className={`container ${style.servicos_executados}`}>
            <div className={style.servicos_executados_content}>
                <h1>SERVIÇOS EXECUTADOS</h1>
                
                <h3>PRIVADO</h3>
                <p>Atuando no Varejo e Organizações.</p>

                <h3>INDUSTRIAL</h3>
                <p>Atuando em industrias de vários portes.</p>

                <h3>PÚBLICO</h3>
                <p>Atuando em Fiscalização de obras públicas.</p>

                <h3>ENTIDADES E CONSELHOS</h3>
                <p>Atuando em associação de entidade de classe e CREA-MG.</p>
            </div>

            <img src={servicosExecutados} alt='foto de servicos sendo executados'/>

        </section>

        <section className={`container ${style.setor_privado}`}>
            <div className={style.setor_privado_content}>
                <h1>SERVIÇOS EXECUTADOS</h1> 
                <h2>SETOR PRIVADO</h2>

                <p>Alguns clientes atendidos:</p>
                <ul>
                    <li>ART - Anotação de Resposabilidade Técnica - CREA</li>

                    <li>PRODEMIG - PROJETOS E CONSULTORIAS LTDA.</li>

                    <li>VIAVOZ LTDA.</li>

                    <li>GGA INDÚSTRIA E COMERCIO DE PRODUTOS DE PADARIA LTDA.</li>

                    <li>FUNCHAL LTDA. (DISTRIBUIDORA DE PEÇAS IRMÃOS CLARA)</li>

                    <li>RESIDÊNCIAS CONDOMINIOS</li>
                </ul>

                <p>Serviços experiência de base empresas CLT - CEO: <br/>
                Obras em todas as modalidades em 12 anos:</p>

                <ul>
                    <li>SUPERMIX CONCRETO S.A</li>
                    <li>HOLCIM BRASIL</li>
                    <li>MGMIX</li>
                    <li>TOPMIX</li>
                </ul>
            </div>            
        </section>


        <section className={`container ${style.setor_publico}`}>
            <div className={style.setor_publico_content}>
                <h1>SERVIÇOS EXECUTADOS</h1> 
                <h2>SETOR PÚBLICO</h2>

                <div>
                    <p>ART - Anotação de Responsabilidade Técnica - CREA</p>

                    <ul>
                        <li>CAIXA ESCOLAR PROFESSOR PEDRO PAULO PENIDO</li>

                        <li> CAIXA ESCOLAR JOSÉ HEILBUTH GONÇALVES</li>

                        <li>CAIXA ESCOLAR ALZIRA ALBUQUERQUE MOSQUEIRA</li>
                    </ul>

                    <div className={style.setor_publico_content_img}> 
                        <div>
                            <p>Serviços experiência de base empresas ART
                            - cargo função Execução obra eventos diversos municípios</p>

                            <ul>
                                <li>EXPOSIÇÕES</li>
                                <li>RODEIO</li>
                                <li>CARNAVAL</li>
                                <li>COMEMORAÇÕES DIVERSAS</li>
                            </ul>    
                        </div>
                        <img src={setorPublico}/>
                    </div>
                    

                    <p>Participação em conselho e entidade de classe:</p>

                    <ul>
                        <li> ASEP - ASSOCIAÇÃO DOS ENGENHEIROS DE PEDRO LEOPOLDO (DIRETORIA - VOGAL)</li>
                        <li> INSPETOR CHEFE DOS MUNICIPIOS: Lagoa Santa, Vespasiano, São José da Lapa, Confins, 
                            Pedro Leopoldo, Matozinhos e Capim Branco</li>
                    </ul>    
            </div>   
        </div>   
        </section>
    </>
    )
}

export default Portfolio