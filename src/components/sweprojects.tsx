import styled from "styled-components";
import Calculator from "./Calculator";
const SWEDiv = styled.div`
  background-color: #bfdbf7;
`;
const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e1e5f2;
  margin: 2%;
  border: 2px solid #ccc;
  border-radius: 15px;
  padding: 2%;
`;
const StyledUL = styled.ul`
  list-style-type: none;
`;
const StyledTitle = styled.h1`
  margin: 2%;
`;

export default function SWEProjects() {
  return (
    <SWEDiv>
      <StyledTitle>SWE Project Experience</StyledTitle>
      <StyledUL>
        <li>
          <ProjectItem>
            <h3>Environmental Data Analysis Project</h3>
            <h4>Data Science Tools and Applications</h4>
            <h5>
              <a href="https://docs.google.com/presentation/d/1-iboLBkHuI9A4cHj6iRwdwxnrDSS8tXQgmRv3hrUiS0/edit#slide=id.p">
                Presentation
              </a>
            </h5>
            <StyledUL>
              <li>
                Partnered with Second Nature, a nonprofit organization, to
                analyze ways of reducing carbon emissions from higher education
                institutions.
              </li>
              <li>
                Analyzed 5 datasets provided by Second Nature to determine which
                affiliates are best meeting their Carbon Reduction Goals.
              </li>
              <li>
                Created 4 visualization graphs and 1 data sheet to quantify and
                classify our analysis of "Which institutions are making progress
                towards their goals?"
              </li>
              <li>
                Discovered and reported 2 errors regarding the 2 of the data
                sheets and exposed 1 flaw in Second Nature's data reporting tool
                SIMAP.
              </li>
            </StyledUL>
          </ProjectItem>
        </li>
        <li>
          <ProjectItem>
            <h3>Language Learning App</h3>
            <h4>Software Engineering</h4>
            <h5>
              <a href="https://github.com/tommyho973/CS411Project">
                Github Repo
              </a>
            </h5>
            <StyledUL>
              <li>
                Developed a language learning web application using Angular
                (Front-end) and Python Flask (Back-end) to teach English Second
                Language students the top 1,000 most commonly used English words
                for 3 different languages.
              </li>
              <li>
                Integrated Firebase database to store and display flashcards for
                at least 1000 words per user.
              </li>
              <li>
                Implemented third-party authentication through Firebase (Google)
                to enhance user security and privacy.
              </li>
              <li>
                Successfully applied Scrum Methodologies to lead team members in
                weekly meetings over the course of 14 weeks.
              </li>
            </StyledUL>
          </ProjectItem>
        </li>
        <li>
          <ProjectItem>
            <h3>Calculator</h3>
            <Calculator />
          </ProjectItem>
        </li>
      </StyledUL>
    </SWEDiv>
  );
}
