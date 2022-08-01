import Link from 'next/link';
import { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from './styles';
interface Props {
  toggleTheme(): void
}

function Header({ toggleTheme }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function closeDropMenu(){
    if(isOpen){
      setIsOpen(false);
    }
  }

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
          <MenuLink onClick={() => toggleTheme()}>Tema</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Header;
