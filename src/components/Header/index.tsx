import Link from 'next/link';
import { useContext, useState } from "react";
import {
  FaBars, FaRegMoon,
  FaSun, FaWindowClose
} from 'react-icons/fa';
import Switch from "react-switch";
import { ThemeContext } from 'styled-components';
import {
  Hamburger,
  Logo,
  Menu,
  MenuLink,
  Nav,
  ThemeSwitcherContainer
} from './styles';

interface Props {
  toggleTheme(): void
}

function Header({ toggleTheme }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { colors, title } = useContext(ThemeContext)

  return (
    <Nav>
      <Logo href="/">
        Nicolas<span> Moraes</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
      { isOpen === false ?
        <FaBars color={colors.primary} size={25}/> 
        : 
        <FaWindowClose color={colors.primary} size={25}/> 
      }
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link href='/'>
          <MenuLink onClick={() => setIsOpen(false)}>Home</MenuLink>
        </Link>
        <Link href='/portfolio'>
          <MenuLink onClick={() => setIsOpen(false)}>Portfólio</MenuLink>
        </Link>
        <Link href='/contato'>
          <MenuLink onClick={() => setIsOpen(false)}>Contato</MenuLink>
        </Link>
        <ThemeSwitcherContainer>
          {title === 'light' ? 
            <FaSun color={colors.primary}/> 
            : 
            <FaRegMoon color={colors.primary}/>
          }
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={50}
            handleDiameter={20}
            offColor={colors.primary}
            onColor={colors.primary}
          />
        </ThemeSwitcherContainer>
      </Menu>
    </Nav>
  );
}

export default Header;
