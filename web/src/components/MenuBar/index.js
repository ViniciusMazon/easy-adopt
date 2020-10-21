import React from 'react';
import { useHistory } from 'react-router-dom';

import { useMenuBar } from '../../context/MenuBar';
import { useUser } from '../../context/User';

import {
  Container,
  TopSide,
  Menu,
  MenuButton,
  PawIcon,
  PawIconIconActive,
  PaperIcon,
  PaperIconActive,
  WalletIcon,
  WalletIconActive,
  CalendarIcon,
  CalendarIconActive,
  HelpIcon,
  HelpIconActive,
  BotSide,
  UserIcon,
} from './styles';

import logo from '../../assets/logo.svg';
import logoSimplified from '../../assets/simplifiedLogo.svg';

function MenuBar() {
  const history = useHistory();
  const { user } = useUser();

  const {
    activeSection,
    isCompacted,
    setActiveSection,
    setIsCompacted,
  } = useMenuBar();

  function toggleMenu() {
    setIsCompacted(!isCompacted);
  }

  function handleNavigation(index, path) {
    setActiveSection(index);
    history.push(path);
  }

  return (
    <Container>
      <TopSide onClick={toggleMenu} isCompacted={isCompacted}>
        <img
          src={isCompacted === true ? logoSimplified : logo}
          alt="EasyAdopt logo"
        />
      </TopSide>

      <Menu isCompacted={isCompacted}>
        <MenuButton
          isCompacted={isCompacted}
          activeSection={activeSection}
          onClick={() => handleNavigation(1, '/')}
        >
          {activeSection === 1 ? <PawIconIconActive /> : <PawIcon />}
          <span>Animais</span>
        </MenuButton>
        <MenuButton
          isCompacted={isCompacted}
          activeSection={activeSection}
          onClick={() => handleNavigation(2, '/adoption')}
        >
          {activeSection === 2 ? <PaperIconActive /> : <PaperIcon />}
          <span>Adoção</span>
        </MenuButton>
        <MenuButton
          isCompacted={isCompacted}
          activeSection={activeSection}
          onClick={() => handleNavigation(3, '/donation')}
        >
          {activeSection === 3 ? <WalletIconActive /> : <WalletIcon />}
          <span>Contribuir</span>
        </MenuButton>
        <MenuButton
          isCompacted={isCompacted}
          activeSection={activeSection}
          onClick={() => handleNavigation(4, '/schedule')}
        >
          {activeSection === 4 ? <CalendarIconActive /> : <CalendarIcon />}
          <span>Agendar</span>
        </MenuButton>
        <MenuButton
          isCompacted={isCompacted}
          activeSection={activeSection}
          onClick={() => handleNavigation(5, '/help')}
        >
          {activeSection === 5 ? <HelpIconActive /> : <HelpIcon />}
          <span>Ajuda</span>
        </MenuButton>
      </Menu>

      <BotSide
        isCompacted={isCompacted}
        onClick={() => handleNavigation(6, '/user')}
      >
        <UserIcon />
        <p>{user.name}</p>
      </BotSide>
    </Container>
  );
}

export default MenuBar;
