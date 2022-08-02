import Link from 'next/link';
import { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from 'styled-components';
import { Hamburger, Logo, Menu, MenuLink, Nav } from './styles';

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
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link href='/'>
          <MenuLink onClick={() => setIsOpen(false)}>Home</MenuLink>
        </Link>
        <Link href='/portifolio'>
          <MenuLink onClick={() => setIsOpen(false)}>Portifólio</MenuLink>
        </Link>
        <Link href='/contato'>
          <MenuLink onClick={() => setIsOpen(false)}>Contato</MenuLink>
        </Link>
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
      </Menu>
    </Nav>
  );
}

export default Header;
