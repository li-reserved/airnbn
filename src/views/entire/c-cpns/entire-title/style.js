import styled from "styled-components";

export const TitleWrappre = styled.div`
    padding: 38px 78px;
    .content{
        padding: 16px 24px;
        border 0.5px solid #ddd;
        border-radius: 12px;
        
        .title-b{
            padding-top: 8px;
            line-height: 18px;
            color: #717171;
            background: linear-gradient(to right, #333, #333) no-repeat right bottom;
            background-size: 0 2px;
            transition: background-size 500ms ease;
            display: inline-block;
            &:hover {
                background-position-x: left;
                background-size: 100% 2px;
            }
        }
    }
`;
