import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-area: none;
    position: absolute;
    z-index: 1;
    display: none;

    &[data-menu-is-open="true"] {
      display: block;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${({ theme }) => theme.COLORS.BLUE_200};
  font-size: 1.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  > a {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    display: flex;
    align-items: center;
    gap: 7px;
    padding-left: 1.5rem;
    height: 56px;
    font-size: 1rem;

    &[data-menu-active="true"] {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      color: ${({ theme }) => theme.COLORS.BLUE_600};
    }
  }
`;

export const Footer = styled.footer`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 7px;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 22px;
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  > div strong {
    font-size: .875rem;
  }
  > div small {
    font-size: .75rem;
  }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;

  > svg {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

