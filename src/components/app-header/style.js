import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: ${(props) => !props.theme.name && "80px"};
  position: relative;
  .header-top {
    border-bottom: 1px solid
      ${(props) => (props.theme.isAlpha ? "rgba(233,233,233,0)" : "#dce0e0")};
    position: ${(props) =>
      props.theme.name ? "fixed" : props.y >= 60 ? "fixed" : "absolute"};
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .content {
    position: relative;
    z-index: 19;
    padding: 0 24px;
    background-color: ${(props) =>
      props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const SearchAreaWrapper = styled.div`
  height: ${(props) => (props.isSearch ? "100px" : 0)};
  transition: height 250ms ease;
`;
