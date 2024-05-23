import { styled } from "styled-components";

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
    gap: 8px;
    justify-content: center;
    min-height: 60px;
  
  >div{
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: start;
  }
`;

export const Logout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 20px;
  cursor: pointer;
`;