import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #fff;
  box-sizing: border-box;
  font-weight: 600;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  color: #222;
  padding: 0px 80px;
  margin: 0px auto;
  height: 60px;
  width: 100%;
  border-top: 1px solid rgb(221, 221, 221);
`;

export const BannerWrapper = styled.div`
  border-radius: 12px 12px 0 0;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  z-index: 20;
  width: 100%;
  /* height: 268px; */
  background-color: #fff;
  padding: 48px 80px 66px 150px;
  border-top: 1px solid #ddd;
`;
