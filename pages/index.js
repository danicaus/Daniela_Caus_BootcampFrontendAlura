import React, { useState } from 'react';
import Cabecalho from '../src/components/Cabecalho';
import Capa from '../src/components/Capa';
import Card from '../src/components/Card';
import Button from '../src/components/foundation/layout/Button';
import Footer from '../src/components/Footer';
import SectionTitle from '../src/components/SectionTitle';
import WrapperProjetos from '../src/components/WrapperProjetos';
import projetos from '../src/content/Projects';
import Text from '../src/components/foundation/Text';
import Box from '../src/components/foundation/layout/Box';
import ContactFormWrapper from '../src/components/ContactForm';
import Modal from '../src/components/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="0 0 46px 0"
      >
        <Text
          tag="h2"
          variant="getInTouchTitle"
          color="tertiary.main"
        >
          Entre em contato
        </Text>
        <Button
          margin={{
            xs: '12px 0 0 0',
            md: '8px 0 0 0',
          }}
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          <Text
            tag="p"
            variant="cardTitle"
            color="tertiary.main"
            font="firaRegular"
          >
            +
          </Text>
        </Button>
      </Box>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        {(propsDoModal) => (
          <ContactFormWrapper
            propsDoModal={propsDoModal}
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        )}
      </Modal>
      <Footer />
    </>
  );
}
