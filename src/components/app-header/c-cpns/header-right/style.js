import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  .btns {
    display: flex;
    align-items: center;
    padding-right: 8px;
    span {
      padding: 12px;
      color: ${(props) =>
        props.theme.isAlpha ? "#fff" : props.theme.text.secondary};
      font-weight: 600;
      cursor: pointer;
      &:hover {
        background-color: #f7f7f7;
        border-radius: 22px;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    height: 42px;
    width: 77px;
    border: 1px solid #ddd;
    border-radius: 21px;
    padding: 5px 5px 5px 12px;
    box-sizing: border-box;
    color: ${(props) =>
      props.theme.isAlpha ? "#fff" : props.theme.text.secondary};
    ${(props) => props.theme.mixin.boxShadow}
    /* transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    } */
    .svg {
      position: relative;
      color: ${(props) => (props.theme.isAlpha ? "#fff" : "#717171")};
      .dir {
        position: absolute;
        top: -3px;
        right: -1px;
        border-radius: 50%;
        height: 10px;
        width: 10px;
        background-color: ${(props) => props.theme.color.primary};
        box-shadow: 0 0 0 1.5px #fff;
      }
    }
    .panel {
      position: absolute;
      top: 51px;
      right: 0;
      width: 240px;
      background: #fff;
      border-radius: 15px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
      padding: 10px 0;
      p {
        padding: 13px 15px;
        &:hover {
          background: #f6f6f6;
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
        padding-bottom: 8px;
        p:first-child {
          font-weight: 600;
        }
      }
      .bottom {
        padding-top: 8px;
      }
    }
  }
`;
