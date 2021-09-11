import React from 'react';
import Cabecalho from '../src/components/Cabecalho';
import Capa from '../src/components/Capa';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';
import SectionTitle from '../src/components/SectionTitle';
import WrapperProjetos from '../src/components/WrapperProjetos';
import projetos from '../src/content/Projects';

export default function Home() {
  return (
    <>
      <Capa />
      <Cabecalho />
      <SectionTitle
        content="Meus Projetos"
      />
      <WrapperProjetos>
        {projetos.map((projeto) => (
          <Card
            key={projeto.id}
            infoProjeto={projeto}
          />
        ))}
      </WrapperProjetos>
      <Footer />
    </>
  );
}
