import styled from "styled-components";

export const TabsWrapper = styled.div`
  margin-bottom: 12px;
  .item {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    font-size: 16px;
    flex-basis: 130px;
    flex-shrink: 0;
    height: 58px;
    white-space: nowrap;
    font-weight: 600;
    border: 0.5px solid #ddd;
    border-radius: 20px;
    margin-right: 16px;
    padding: 0 12px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
    &: hover {
      border: 1px solid #333;
    }
    img {
      height: 30px;
      width: 30px;
    }
    &.active {
      border: 2px solid #333;
    }
  }
`;
