import styled from "styled-components";
import Image from "./Image";
import myImage from "../assets/Ho_Tommy_069-0262.jpg";
const StyledWidth = styled.div`
  width: 80%;
  background-color: #bfdbf7;
  margin: 2px;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const StyledMainRow = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const StyledMainBackground = styled.div`
  background-color: #bfdbf7;
  padding: 2px;
  width: 100%;
`;
const StyledUL = styled.ul`
  list-style: none;
`;
const StyledTitle = styled.h1`
  margin: 2%;
`;
export default function Main() {
  return (
    <StyledMainBackground>
      <StyledWidth>
        <StyledTitle>Home</StyledTitle>
        <StyledMainRow>
          <Image
            src1={myImage}
            alt1="Professional headshot image of Tommy Ho."
          />
          <div>
            <h1>Hey, I'm Tommy</h1>
            <h3>
              I am a senior computer science student at Boston University with
              experience in:{" "}
            </h3>
            <StyledUL>
              <li>&#x1F6E1;Cybersecurity</li>
              <li>&#x1F4F1;Mobile App Development</li>
              <li>&#x1F310;Web App Development</li>
              <li>&#x1F3AE;Game Development</li>
              <li>&#x1F4BB;Software Engineering</li>
              <li>&#x1F5A5;Service Desk IT</li>
            </StyledUL>
          </div>
        </StyledMainRow>
      </StyledWidth>
    </StyledMainBackground>
  );
}
