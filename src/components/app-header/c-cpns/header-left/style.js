import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  /* padding-left: 24px; */
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.primary};
  .logo {
    cursor: pointer;
  }
`;
