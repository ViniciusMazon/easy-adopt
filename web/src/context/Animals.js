import React, { createContext, useState, useContext, useEffect } from 'react';

const AnimalsContext = createContext();

const tempData = [
  {
    id: 1,
    name: 'Mikka',
    gender: 'Fêmea',
    size: 'Pequeno',
    specie: 'Cachorro',
    age: 'Filhote',
    status: 'disponível',
    image1:
      'https://www.petelegante.com.br/dicas/wp-content/uploads/2018/07/adoção-de-cachorro-filhote.jpg',
    image2:
      'https://midias.agazeta.com.br/2020/06/23/o-abrigo-vira-lata-vira-luxo-realizara-a-segunda-edicao-da-feira-de-adocao-au-line-neste-sabado-27-268047-article.jpg',
    image3:
      'https://s2.glbimg.com/kRGeT_C7se401s1wyjy0Qv0u-yg=/0x314:720x1073/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/x/gU7r6UTvyFwLn5G5FlUg/whatsapp-image-2019-02-22-at-14.53.02.jpeg',
  },
  {
    id: 2,
    name: 'Laika',
    gender: 'Fêmea',
    size: 'Pequeno',
    specie: 'Cachorro',
    age: 'Filhote',
    status: 'disponível',
    image1:
      'https://www.petlove.com.br/dicas/wp-content/uploads/2018/05/cachorro-para-adocao.jpg',
    image2:
      'https://midias.agazeta.com.br/2020/06/23/o-abrigo-vira-lata-vira-luxo-realizara-a-segunda-edicao-da-feira-de-adocao-au-line-neste-sabado-27-268047-article.jpg',
    image3:
      'https://s2.glbimg.com/kRGeT_C7se401s1wyjy0Qv0u-yg=/0x314:720x1073/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/x/gU7r6UTvyFwLn5G5FlUg/whatsapp-image-2019-02-22-at-14.53.02.jpeg',
  },
];

export default function AnimalsProvider({ children }) {
  const [animals, setAnimals] = useState(tempData);

  return (
    <AnimalsContext.Provider value={{ animals, setAnimals }}>
      {children}
    </AnimalsContext.Provider>
  );
}

export function useAnimals() {
  const context = useContext(AnimalsContext);

  if (!context)
    throw new Error('useAnimals must be used within a AnimalsProvider');
  const { animals, setAnimals } = context;

  return { animals, setAnimals };
}
