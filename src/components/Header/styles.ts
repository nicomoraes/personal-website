import styled from "styled-components";

interface MenuProps {
  readonly isOpen: boolean;
};

export const MenuLink = styled.span`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  color: ${({theme}) => theme.colors.primary};
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: ${({theme}) => theme.colors.secondary};
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  background-color: transparent;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: ${({theme}) => theme.colors.primary};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export const Menu = styled.div<MenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background-color: ${({theme}) => theme.colors.background};
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: ${({theme}) => theme.colors.primary};
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    display: flex;
  }
`;