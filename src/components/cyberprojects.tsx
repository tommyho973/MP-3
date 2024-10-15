import styled from "styled-components";
const CyberDiv = styled.div`
  background-color: #bfdbf7;
`;
const StyledUL = styled.ul`
  list-style-type: none;
`;
const StyledTitle = styled.h1`
  margin: 2%;
`;
const CyberList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e1e5f2;
  margin: 2%;
  border: 2px solid #ccc;
  border-radius: 15px;
  padding: 2%;
`;
export default function CyberProjects() {
  return (
    <CyberDiv>
      <StyledTitle>Cybersecurity Project Experience</StyledTitle>
      <CyberList>
        <h3>CTF Assignment 1</h3>
        <h4>Cryptography</h4>
        <h5>
          <a href="https://github.com/tommyho973/EC521-CTF1.git">Github Repo</a>{" "}
          |{" "}
          <a href="https://docs.google.com/document/d/1_JKnUrb4e3AuUpvpbyTCFiV8xuZvgiYG7UG1rClklZ8/edit?usp=sharing">
            Write Up
          </a>
        </h5>
        <StyledUL>
          <li>
            Challenge 1: Applied rotation cipher to decrypt caesar cipher
            encoded plaintext.
          </li>
          <li>
            Challenge 2: Utilized probability analysis to implement the
            substitution cipher that revealed the hidden flag in the Harry
            Potter quote.
          </li>
          <li>
            Challenge 3: Uncovered the key to the encrypted file using common
            zip header file information, combined with Xor'ing python scripts to
            successfully decrypt the file into a zip folder, that contained the
            flag.
          </li>
          <li>
            Challenge 4: Applied Open Source research to determine the correct
            dimensions needed to create a header for the encrypted file,
            resulting in the creation of an image file that revealed the flag,
            "PATTERNS DO MATTER".
          </li>
        </StyledUL>
      </CyberList>
    </CyberDiv>
  );
}
