import styled from "styled-components";

const StyledHeaderDiv = styled.div`
  background-color: #022b3a;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  margin: 4px;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;
const StyledHeaderMargin = styled.div`
  background-color: #022b3a;
  padding: 4px;
`;
const StyledHeaderH1 = styled.h1`
  font-size: calc(1rem + 1vw + 1vh);
  color: #ffffff;
`;
const StyledHeaderP = styled.p`
  font-size: calc(1rem + 1vw + 1vh);
  color: #ffffff;
`;
export default function Header() {
  return (
    <StyledHeaderMargin>
      <StyledHeaderDiv>
        <StyledHeaderH1>Tommy Ho</StyledHeaderH1>
        <StyledHeaderP>My Online Resume</StyledHeaderP>
      </StyledHeaderDiv>
    </StyledHeaderMargin>
  );
}
