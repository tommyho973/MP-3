import styled from "styled-components";

const StyledFooterDiv = styled.div`
  background-color: #022b3a;
`;
const ResponsiveText = styled.p`
  font-size: calc(1rem + 1vw);
  color: #ffffff;
`;
export default function Footer() {
  return (
    <StyledFooterDiv>
      <ResponsiveText>
        All Rights Reserved By Tommy Ho{" "}
        <a href="www.linkedin.com/in/tommy-t-ho/">Credits</a> &#169;
      </ResponsiveText>
    </StyledFooterDiv>
  );
}
