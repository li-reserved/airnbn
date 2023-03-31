import styled from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 30px 80px;
  z-index: 1;
  .title {
    font-size: 22px;
    color: #222;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .list {
    flex-wrap: wrap;
    display: flex;
  }

  > .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
  }

  .skeleton {
    display: flex;
    flex-wrap: wrap;
    .ant-skeleton {
      width: 16.66%;
      margin-bottom: 14px;
      padding: 0 8px;
    }
    .ant-skeleton-title {
      width: 100% !important;
      height: 260px;
      border-radius: 20px;
    }
    .ant-skeleton-paragraph {
      width: 33%;
      margin-block-start: 12px !important;
      > li + li {
        margin-block-start: 10px !important;
      }
    }
  }
`;
