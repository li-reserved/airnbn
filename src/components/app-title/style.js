import styled from "styled-components";

export const AppTitleWrapper = styled.div`
  position: relative;
  z-index: 99;
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  font-size: 12px;
  line-height: 18px;
  img {
    width: 60px;
    height: 13px;
  }
  .title {
    font-weight: 600;
    padding-left: 4px;
    padding-right: 8px;
  }

  .desc {
    text-decoration: underline;
    padding-left: 8px;
    cursor: pointer;
  }
`;
