import React, { useContext } from 'react';
import db from '../../../../db.json';
import Card from '../../commons/Card';
import Link from '../../commons/Link';
import SectionTitle from '../../commons/SectionTitle';
import Box from '../../foundation/layout/Box';
import Button from '../../foundation/layout/Button';
import Text from '../../foundation/Text';
import { WebsitePageContext } from '../../wrappers/WebSitePage';
import WrapperProjetos from '../../wrappers/WrapperProjetos';

export default function HomeScreen() {
  const toggleModal = useContext(WebsitePageContext);

  return (
    <>
      <SectionTitle
        content="Meus Projetos"
      />
      <WrapperProjetos>
        {db.projetos.map((projeto) => (
          <Link key={projeto.id} href={`/project/${projeto.slug}`}>
            <Card
              infoProjeto={projeto}
            />
          </Link>
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
          onClick={() => toggleModal.toggleModalContato()}
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
    </>
  );
}
