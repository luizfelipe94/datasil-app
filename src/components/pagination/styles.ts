import styled from "@emotion/styled";

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.3rem;

  > span {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
`;

export const Wrapper = styled.div<{ $onlyIcons?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;

  background: transparent;

  padding: 0.5rem 0.5rem;

  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  p {
    padding: 0.5rem;
    color: var(--fg-read);

    span {
      color: var(--bg-brand-default);
      font-weight: 600;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding-inline-start: 0rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 2.2rem;

      color: #0f4d8d;
      padding: 0;

      a {
        display: flex;
        align-items: center;
        cursor: pointer;
        font-weight: 800;
        font-size: 0.85rem;
        padding: 0.5rem;
      }

      &.selected {
        background-color: #0f4d8d;
        color: white;
        border-radius: 0.5rem;
        ${({ $onlyIcons }) => $onlyIcons && "display: none;"}
      }

      svg {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
`;