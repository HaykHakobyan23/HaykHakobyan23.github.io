import styled from "styled-components"


const StyledDiv = styled.div`
 width: 100%;
 max-width: 1300px;
 margin-left: auto;
 margin-right: auto;
`;

export default function Center({ children }) {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}