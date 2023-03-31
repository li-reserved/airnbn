import styled from "styled-components";

export const BrowerWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(33, 33, 33);
  opacity: 1;
  display: flex;
  flex-direction: column;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      color: #fff;
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        /* margin: 0 auto; */
        height: 100%;
        user-select: none;
      }

      .pic-enter {
        transform: translate(${(props) => (props.isnext ? "100%" : "-100%")});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    height: 190px;
    /* &:hover {
      .list {
        height: 67px;
      }
    } */

    .info {
      position: absolute;
      bottom: 100px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }
    }

    .list {
      margin-top: 3px;
      overflow: hidden;
      transition: height 300ms ease;
      height: ${(props) => (props.showList ? "67px" : "0")};

      .item {
        margin-right: 15px;
        cursor: pointer;

        img {
          height: 67px;
          opacity: 0.5;
        }

        &.active {
          img {
            height: 77px;
            opacity: 1;
          }
        }
      }
    }
  }
`;
