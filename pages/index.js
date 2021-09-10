import Cabecalho from '../src/components/Cabecalho'
import Capa from '../src/components/Capa'
import SectionTitle from '../src/components/SectionTitle'

export default function Home() {
  return (
    <>
      <Capa />
      <Cabecalho />
      <SectionTitle 
        content="Meus Projetos"
      />
        
    </>
  )
}
