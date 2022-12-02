import styled from "styled-components";

export default styled.section`
  display: flex;
  justify-content: center;

  .todos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 700px;
    margin-top: 75px;
    -webkit-box-shadow: 0px 0px 10px 14px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 10px 14px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 10px 14px rgba(0, 0, 0, 0.3);
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    padding: 25px 0;
    background-color: #4d4646;
    -webkit-box-shadow: 0px 0px 10px 14px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 10px 14px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 10px 14px rgba(0, 0, 0, 0.3);
  }

  .header__wrapper {
    display: flex;
  }

  .header__icon {
    font-size: 50px;
    margin-right: 25px;
  }

  .header__count {
    font-size: 20px;
    font-style: italic;
  }

  .header__title {
    font-size: 45px;
    font-weight: bold;
  }

  .todos__body {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 25px 20px;
    background-color: #3d3a3a;
  }
`;
