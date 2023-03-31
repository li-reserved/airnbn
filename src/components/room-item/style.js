import styled from "styled-components";

export const ItemWrapper = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: ${(props) => props.itemWidth};
  padding: 8px;
  flex-shrink: 0;
  .inner {
    width: 100%;
    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 92% 8px 0;
      border-radius: 10px;
      overflow: hidden;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* transition: all 0.4s ease-in-out;
        &:hover {
          transform: scale(1.2);
        } */
      }
    }

    .swiper {
      position: relative;
      cursor: pointer;

      &:hover {
        .control {
          display: flex;
          /* opacity: 1; */
          /* transition: all 2s ease-in-out; */
        }
      }

      .title-desc {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 5px;
        position: absolute;
        top: 16px;
        left: 12px;
        background: #fff;
        border-radius: 4px;
        z-index: 1;
        font-weight: 600;
        border: 0.5px solid #ddd;
        img {
          width: 12px;
          height: 12px;
          margin-right: 3px;
        }
      }
      .the-heart {
        position: absolute;
        top: 16px;
        right: 12px;
        z-index: 1;
        /* stroke: #fff; */
      }

      .control {
        /* opacity: 0; */
        position: absolute;
        z-index: 1;
        color: #fff;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: none;
        justify-content: space-between;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 83px;
          height: 100%;
          background: linear-gradient(
            to left,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );

          &.right {
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
        }
      }

      .indicator {
        position: absolute;
        width: 30%;
        z-index: 9;
        left: 0;
        right: 0;
        bottom: 10px;
        margin: 0 auto;
        .dot-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20%;

          .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #d1d1d1;
            &.active {
              width: 8px;
              height: 8px;
              background-color: #fff;
            }
          }
        }
      }
    }

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.desc_color};
      background-color: #ebebeb;
      border-radius: 4px;
      padding: 1px 2px;
      display: inline-block;
    }

    .name {
      font-size: 16px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .price {
      margin: 8px 0;
    }

    .bottom {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      color: ${(props) => props.theme.text.primary};
      .MuiRating-icon {
        margin-right: -2px;
      }
      .count {
        margin: 0 2px 0 4px;
      }
    }
  }
`;
