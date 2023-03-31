import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;
  .scroll {
    overflow: hidden;
    &-content {
      display: flex;
      transition: transform 300ms ease;
    }
  }

  .contrcl {
    position: absolute;
    display: flex;
    z-index: 5;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 28px;
    width: 28px;
    border: 0.5px solid rgb(0, 0, 0, 0.3);
    box-shadow: 0px 0px 6px 5px rgba(255, 255, 255, 0.7);
    cursor: pointer;
    background: #fff;
  }

  .left {
    top: 50%;
    left: -12px;
    transform: translate(0, -50%);
  }

  .right {
    top: 50%;
    right: -12px;
    transform: translate(0, -50%);
  }
`;
