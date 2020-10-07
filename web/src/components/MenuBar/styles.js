import styled, { css } from 'styled-components';
import {
  Document,
  DocumentOutline,
  Paw,
  PawOutline,
  Calendar,
  CalendarOutline,
  DonateHeart,
  DonateHeartOutline,
  Help,
  HelpOutline,
  User,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;

  max-height: 100vh;
`;

export const TopSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--menubar-topside);
  padding: ${(props) => (props.isCompacted ? '1.0rem' : '2.6rem 5.2rem')};

  > img {
    flex-shrink: 0;
  }
`;

export const Menu = styled.nav`
  padding-top: 3.0rem;
  display: flex;
  flex-direction: column;

  height: 100vh;
  background: var(--menubar-body);
`;

export const MenuButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.isCompacted ? 'center' : 'flex-start')};
  flex-shrink: 0;
  padding: ${(props) => (props.isCompacted ? '2.0rem 0' : '2.0rem 0 2.0rem 3.0rem')};

  > span {
    display: ${(props) => (props.isCompacted ? 'none' : 'inherit')};
    margin-left: .8rem;
    font-size: 1.6rem;
    color: var(--text-menu);
    margin-top: .3rem;
  }

  cursor: pointer;
  outline: none;

  &:nth-child(${(props) => props.activeSection}) {
    span {
      color: var(--text);
      font-weight: 600;
    }
  }
`;

export const BotSide = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--menubar-botside);
  padding: ${(props) => (props.isCompacted ? '2.0rem 0' : '2.0rem 3.0rem 2.0rem 3.0rem')};

  > p {
    display: ${(props) => (props.isCompacted ? 'none' : 'inherit')};
    margin-left: .8rem;
    font-size: 1.2rem;
    color: var(--text-menu);
  }

  cursor: pointer;
  outline: none;
`;

const iconCSS = css`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  color: var(--text-menu);
`;

export const PawIcon = styled(PawOutline)`
  ${iconCSS}
`;

export const PawIconIconActive = styled(Paw)`
  ${iconCSS}
`;

export const PaperIcon = styled(DocumentOutline)`
  ${iconCSS}
`;

export const PaperIconActive = styled(Document)`
  ${iconCSS}
`;

export const WalletIcon = styled(DonateHeartOutline)`
  ${iconCSS}
`;

export const WalletIconActive = styled(DonateHeart)`
  ${iconCSS}
`;

export const CalendarIcon = styled(CalendarOutline)`
  ${iconCSS}
`;

export const CalendarIconActive = styled(Calendar)`
  ${iconCSS}
`;

export const HelpIcon = styled(HelpOutline)`
  ${iconCSS}
`;

export const HelpIconActive = styled(Help)`
  ${iconCSS}
`;

export const UserIcon = styled(User)`
  ${iconCSS}
`;
