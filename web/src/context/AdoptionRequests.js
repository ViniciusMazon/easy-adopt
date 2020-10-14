import React, { createContext, useState, useContext } from 'react';

const AdoptionRequestsContext = createContext();

const tempData = [
  {
    id: 1,
    status: 'novo',
    tutor: {
      id: 1,
      name: 'Marcos Júnior',
      avatar_url:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      gender: 'Masculino',
      email: 'tutor1@mail.com',
      birth_date: '10/10/1990',
      phone: '11 9999-9999',
      address: {
        street: 'Rua Beira Mar',
        number: '400',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'SP',
      },
    },
    animal: {
      id: 1,
      avatar_url:
        'https://www.petelegante.com.br/dicas/wp-content/uploads/2018/07/adoção-de-cachorro-filhote.jpg',
      name: 'Mikka',
      gender: 'Fêmea',
      age: 'Filhote',
      specie: 'Cachorro',
      size: 'Pequeno',
    },
    questionnaire: {
      residence_type: 'Casa',
      adults_home: '2',
      children_home: '1',
      smokers_home: 'Não',
      adopted_before: 'Não',
      other_animals: 'Não',
      sick_animals: 'Não',
      aware_cost: 'Sim',
      why_want_adopt: 'Sempre quis adotar um animal, sou contra a compra de animais.',
    }
  },
  {
    id: 2,
    status: 'aprovado',
    tutor: {
      id: 2,
      name: 'Maria Pereira',
      avatar_url:
        'https://www.journalofaccountancy.com/content/dam/jofa/issues/2015/jul/shaylynn-fuller.jpg',
      gender: 'Feminino',
      email: 'tutor2@mail.com',
      birth_date: '11/10/1990',
      phone: '11 9999-9999',
      address: {
        street: 'Rua Beira Mar',
        number: '400',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'SP',
      },
    },
    animal: {
      id: 1,
      avatar_url:
        'https://www.petelegante.com.br/dicas/wp-content/uploads/2018/07/adoção-de-cachorro-filhote.jpg',
      name: 'Mikka',
      gender: 'Fêmea',
      age: 'Filhote',
      specie: 'Cachorro',
      size: 'Pequeno',
    },
    questionnaire: {
      residence_type: 'Casa',
      adults_home: '2',
      children_home: '1',
      smokers_home: 'Não',
      adopted_before: 'Não',
      other_animals: 'Não',
      sick_animals: 'Não',
      aware_cost: 'Sim',
      why_want_adopt: 'Sempre quis adotar um animal, sou contra a compra de animais.',
    }
  },
  {
    id: 3,
    status: 'reprovado',
    tutor: {
      id: 3,
      name: 'Valdirei Albuquerque',
      avatar_url:
        'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70',
      gender: 'Masculino',
      email: 'tutor3@mail.com',
      birth_date: '10/10/1990',
      phone: '11 9999-9999',
      address: {
        street: 'Rua Beira Mar',
        number: '400',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'SP',
      },
    },
    animal: {
      id: 2,
      avatar_url:
        'https://www.petlove.com.br/dicas/wp-content/uploads/2018/05/cachorro-para-adocao.jpg',
      name: 'Laika',
      gender: 'Fêmea',
      age: 'Filhote',
      specie: 'Cachorro',
      size: 'Pequeno',
    },
    questionnaire: {
      residence_type: 'Casa',
      adults_home: '2',
      children_home: '1',
      smokers_home: 'Não',
      adopted_before: 'Não',
      other_animals: 'Não',
      sick_animals: 'Não',
      aware_cost: 'Sim',
      why_want_adopt: 'Sempre quis adotar um animal, sou contra a compra de animais.',
    }
  },
];

export default function AdoptionRequestsProvider({ children }) {
  const [adoptionRequests, setAdoptionRequests] = useState(tempData);

  return (
    <AdoptionRequestsContext.Provider
      value={{ adoptionRequests, setAdoptionRequests }}
    >
      {children}
    </AdoptionRequestsContext.Provider>
  );
}

export function useAdoptionRequests() {
  const context = useContext(AdoptionRequestsContext);

  if (!context)
    throw new Error(
      'useAdoptionRequests must be used within a AdoptionRequestsProvider'
    );
  const { adoptionRequests, setAdoptionRequests } = context;

  return { adoptionRequests, setAdoptionRequests };
}
