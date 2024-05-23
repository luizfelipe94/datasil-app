import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #333;
  }
`;

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 10rem;
  min-width: 5rem;
  height: 100vh;
  position: relative;
  background-color: #ffffff;

  box-shadow: 0 0 8px rgba(0,0,0,.1), 1px 0 0 rgba(0,0,0,.05);

  &[aria-expanded="true"] {
    width: 15rem;
    animation: slideRight 200ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  &[aria-expanded="false"] {
    animation: slideLeft 200ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  @keyframes slideLeft {
    from { width: 11rem; }
    to { width: 3rem; }
  }
  @keyframes slideRight {
    from { width: 3rem; }
    to { width: 11rem; }
  }
`;

export const Header = styled.div<{ $expand: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: var(--spacing-padding-micro);
  background-color: #0F4D8D;
  height: 70px;
  cursor: pointer;

  ${({ $expand }) => $expand === true && css`
    flex-direction: row;
    gap: 1rem;
  `}
`;

export const Footer = styled.div`
    > ul {
      border-top: 1px solid var(--border-contrast, #15131B);
      border-bottom: 1px solid var(--border-contrast, #15131B);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-height: 75vh;
  overflow-y: auto;
  flex: 1;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  &:hover {
    background-color: #DCE2E7;
  }
  padding: 10px;
`;