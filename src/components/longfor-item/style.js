import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  width: 16.66%;
  cursor: pointer;

  .inner {
    padding: 8px;
    .content {
      position: relative;
      overflow: hidden;
      border-radius: 5px;
    }
  }

  .cover {
    width: 100%;
    transition: all 0.4s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }

  .bg-cover {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60%;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgb(0, 0, 0) 100%
    );
  }

  .info {
    position: absolute;
    left: 30px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px 32px;
    color: #fff;

    .city {
      font-size: 18px;
      font-weight: 600;
    }

    .price {
      font-size: 14px;
      margin-top: 5px;
    }
  }
`;
