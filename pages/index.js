import Cabecalho from '../src/components/Cabecalho'
import Capa from '../src/components/Capa'
import Card from '../src/components/Card'
import SectionTitle from '../src/components/SectionTitle'
import projetos from '../src/content/Projects'

export default function Home() {
  return (
    <>
      <Capa />
      <Cabecalho />
      <SectionTitle 
        content="Meus Projetos"
      />
      {projetos.map(projeto => {
        // console.log(projeto)
        return (<Card 
          key={projeto.id}
          infoProjeto={projeto}
        />)
      })}
    </>
  )
}
