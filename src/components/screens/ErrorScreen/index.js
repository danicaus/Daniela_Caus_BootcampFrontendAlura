import React from 'react';
import Capa from '../../commons/Capa';

export default function ErrorScreen() {
  return (
    <Capa
      title="404"
      subtitle="Página não encontrada"
      boxProps={{
        backgroundImage: 'linear-gradient(#002d4aaa, #002d4aaa), url(./images/mergulho.png)',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '-1',
      }}
    />
  );
}
