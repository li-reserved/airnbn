import styled from "styled-components";

export const LeftWrapper = styled.div`
  display: flex;
  .icon {
    padding: 0 8px;
  }
  .jro {
    display: flex;
    margin-top: 3px;
    span {
      cursor: pointer;
      &: hover {
        text-decoration: underline;
      }
    }
    .language {
      margin-right: 16px;
    }
  }
`;
