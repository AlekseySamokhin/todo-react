import styled from "styled-components";

export const TodoItemBtn = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  border: 2px solid white;
  background-color: #3d3a3a;
  height: 50px;
  width: 50%;
`
export const TodoListItemStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #4d4646;
  font-size: 20px;
  padding-left: 16px;

  &:not(:first-child) {
    margin-top: 20px;
  }

  .todoItem__text {
    display: flex;
    align-items: center;
    width: 77%;
    display: flex;
  }

  .todoItem__input {
    background-color: #4d4646;
    height: 100%;
    border: 2.5px solid #fff;
    font-size: 25px;
    padding-left: 15px;
    margin-left: 25px;
    width: 358px;
  }

  .todoItem__checkbox {
    height: 22.5px;
    width: 22.5px;
  }

  .todoItem__title {
    padding-left: 20px;
  }

  .todoItem__buttons {
    color: white;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100px;
  }

  .todoItem__done {
    text-decoration: line-through;
    color: #000;
  }
`;