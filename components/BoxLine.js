import styled from "styled-components"


const StyledDiv = styled.div`
 background-color: #EFB7FF;
    height: 12px;
    /* width: 80%; */
    margin: 14px auto 24px;
`;

export default function BoxLine({ children }) {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}