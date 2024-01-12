import styled from "styled-components"


const StyledDiv = styled.div`
  opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    h2{
    margin-top: 40px;
    margin-bottom: 8px;
    padding-top: 0;
    font-size: 2.8em;
    font-weight: 500;
    line-height: 1.2;
    @media screen and (max-width: 800px) {
        font-size: 2em;
    }
    };
    p{
    margin-bottom: 24px;
    line-height: 1.4;
    span{
        color: #f4b183;
    }
    }
 `;

export default function CentreAlignText({ children }) {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}