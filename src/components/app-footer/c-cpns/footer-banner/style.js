import styled from "styled-components";

export const FooterWrapper = styled.div`
  .close {
    position: relative;
    top: -25px;
    left: -126px;
  }
  .list {
    display: flex;
    flex-direction: row;
    font-weight: 600;
    > div {
      flex: 1;
      > ul {
        margin-top: 16px;
        > li {
          margin-bottom: 4px;
          a {
            color: #767676;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;
