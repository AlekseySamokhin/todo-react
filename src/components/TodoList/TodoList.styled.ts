import styled from "styled-components";

export const TodoListStyled = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: #fff;
margin-top: 35px;

.todoList__sheet {
  width: 77%;
}

.todoList__sheet:not(:first-child) {
  margin-top: 20px;
}

.todoList__empty {
  font-style: oblique;
  font-size: 20px;
}

.clearCompletedButton {
  cursor: pointer;
  background-color: #3d3a3a;
  border: 2px solid #fff;
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  margin-top: 20px;
}
`