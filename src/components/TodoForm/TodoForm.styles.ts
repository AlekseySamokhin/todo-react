import styled from "styled-components";

export default styled.form`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  .formTodo__input {
    font-family: inherit;
    width: 60%;
    padding: 16px 16px 16px 55px;
    font-size: 21px;
    border: none;
    color: #000;
    margin-right: 10px;
  }

  .formTodo__btn {
    display: flex;
    justify-content: center;
    border: 2px solid white;
    background-color: #3d3a3a;
    align-items: center;
    height: 57px;
    width: 100px;
    font-size: 30px;
    background-color: #3d3a3a;
    cursor: pointer;
    padding: 16px 0;
    color: #fff;
  }

  .formTodo__checkAll {
    border: none;
    background-color: white;
    position: absolute;
    z-index: 10;
    height: 30px;
    width: 30px;
    top: 14px;
    left: 88px;
    cursor: pointer;
  }

  .formTodo__checkAll_icon {
    color: rgb(209, 202, 202);
    font-size: 30px;
  }

  .active {
    color: #3d3a3a;
  }
`;
