import styled from "styled-components";

export const ConterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;
  .search-bar {
    position: absolute;
    display: flex;
    align-items: center;
    width: 300px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 24px;
    box-sizing: border-box;
    font-weight: 600;
    padding-left: 8px;
    cursor: pointer;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
    ${(props) => props.theme.mixin.boxShadow};
    .text {
      padding: 0 16px;
      flex: 1;
      color: ${(props) => (props.theme.isAlpha ? "#fff" : "#333")};
    }
    .icon {
      height: 32px;
      width: 32px;
      background-color: ${(props) => props.theme.color.primary};
      border-radius: 50%;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 7px 7px 7px 0;
    }
  }

  .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .detail-exit {
    transform: scale(1) translateY(0);
    opacity: 0;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`;
