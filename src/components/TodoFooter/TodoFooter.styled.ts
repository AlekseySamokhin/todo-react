import styled from "styled-components";

import { FilterTypes } from "../../store/types"

interface IStyledButtonProps {
    filter: FilterTypes;
    todosFilter: FilterTypes;
  }
  
export const StyledButton = styled.button<IStyledButtonProps>`
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    min-width: 120px;
    background-color: #4d4646;
    padding: 10px;
  
    border: ${props => props.todosFilter === props.filter ? "2px solid #fff" : "none"}
`;

export const TodoFooterStyles = styled.div`
    padding: 20px 95px;
    background-color: #4d4646;
    display: flex;
    justify-content: space-around;
    align-items: center;
`