import styled from "styled-components"


const StyledDiv = styled.div`
 padding: 120px 32px;
 position: relative;
 `;

export default function Section({ children }) {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}