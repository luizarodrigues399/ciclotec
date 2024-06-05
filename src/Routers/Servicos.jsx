import style from './Servicos.module.css'
import consultoria from '../assets/consultoria.png'

const Serviços = () =>{
    return (
        <>
            <section className={style.consultoria}>

                <div className={style.consultoria_content}>
                    <h1>CONSULTORIA</h1>

                    <ul>
                        <li>Atividades de consultoria em gestão empresarial</li>

                        <li>Treinamento em desenvolvimento profissional e gerencial</li>

                        <li>Serviços de perícia técnica relacionados à segurança do trabalho</li>

                        <li>Cargo / Função: responsabilidade técnica empresarial</li>
                    </ul>
                </div>
            </section>

            <section className={style.projetos}>
                <div className={style.projetos_content}>
                    <h1>PROJETO DE ENGENHARIA</h1>
                    <ul>
                        <li>Projeto Planialtimétrico; </li>
                        <li>Sondagem do Solo; </li>
                        <li>Projeto Arquitetônico; </li>
                        <li>Projeto Estrutural; </li>
                        <li>Projeto de Instalações Elétricas; </li>
                        <li>Projeto de Instalações de Dados e Voz; </li>
                        <li>Projeto de SPDA; </li>
                        <li>Projeto de Instalações Hidrossanitárias Projeto de Combate a Incêndio; </li>
                        <li>Dentre outros conforme a necessidade</li>
                    </ul>
                </div>
            </section>

            <section className={style.engenharia}>
                <div className={style.engenharia_content}>
                    <h1>ENGENHARIA</h1>
                    <ul>
                        
                        <li>Obras de acabamento da construção;</li>
                        <li>Administração de obras;</li>
                        <li>Construção de redes de abastecimento de água, coleta de esgoto e construções correlatas;</li>
                        <li>Instalações de sistema de prevenção contra incêndio;</li>
                        <li>Aluguel de outras máquinas e equipamentos comerciais e industriais;</li>
                        <li>Seleção e agenciamento de mão-de-obra Atividades de sonorização e de iluminação Serviços de
                        organização de feiras, congressos exposições e festas;
                        </li>
                        <li>Resentantes comerciais e agentes do comércio de madeira, material de construção e ferragens.</li>
                    </ul> 
                </div>   
            </section>
        </>
    )
}

export default Serviços