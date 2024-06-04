import style from './Sobre.module.css'
import styleArrow from '../Components/Arrow.module.css'
import CEO from '../assets/ceo.png'

const Sobre = () =>{
    return (
        <>
        <div className='container'>
            <section className={style.sobre}>
                <h1>QUEM SOMOS</h1>
                    
                <p>Somos uma empresa especializada em serviços de Engenharia Civil, Saneamento, Meio Ambiente 
                        e Segurança do Trabalho. Com profissionais capacitados nas disciplinas, 
                        visando manter a boa técnica através de nossas experiências e fundamentado 
                        pelas Normas Técnicas.</p>
            </section>

            <div className={ `${styleArrow.arrow} ${style.arrow}`}></div>

            <section className={style.sobre}>               
                <p>Com mais de 100 clientes atendidos e atuação em mais de 27 cidades e serviços 
                    registrados por ART - Anotação de Responsabilidade Técnica no CREA-MG. 
                    Fruto da experiência que há mais de 20 anos de mercado em diversos setores 
                    e áreas da Engenharia exercido pelo CEO.</p>
            </section>
        </div>

        <section className={style.nossa_historia}>
            <h1>NOSSA HISTÓRIA</h1>

            <div className={style.nossa_historia_content}>
                
                <p>Desde 2019 a CICLOTEC foi estabelecida para dar sequência na atuação que a mais de 20 anos de 
                    mercado e em diversos setores e áreas da Engenharia é exercido pelo CEO. 
                </p>

                <p>Sendo atribuído de corpo de responsabilidade técnica e buscando a cada prestação de 
                    serviços a eficiência e satisfação dos clientes, colaboradores, fornecedores e investidores.
                </p>

                <p>A CICLOTEC busca dar sequência nos CICLOS de cada atendimento com TÉCNICA, 
                    ESTRATEGIA E COMERCIAL de alta performace.
                </p>
            </div>
        </section>

        <section className={ `container ${style.ceo}`}>
            <h1>ROGER WILLIAM ROSA</h1>

            <div className={style.ceo_content}>
                <div>
                    <h3 className={style.ceo_title}>CEO da Ciclotec</h3>

                    <p>Atuo desde 2003 no planejamento, orçamento, comercialização, implantação, assessoria,
                        consultoria, fiscalização e execução de serviços de engenharia de segurança do trabalho,
                        engenharia de saneamento e meio ambiente e MBA - Gestão de Negócios.
                    </p>
                </div>

                <img src={CEO} alt='foto do ceo'/>
            </div>
        </section>
        </>
    )
}

export default Sobre