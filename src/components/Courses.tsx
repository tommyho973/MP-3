import styled from "styled-components";
import Image from "./Image.tsx";
import BU from "../assets/BU.png";
import Bxsci from "../assets/bxsci.png";

const StyledCourseColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #bfdbf7;
  width: 100%;
`;
const CourseList = styled.div`
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
const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export default function Courses() {
  return (
    <>
      <StyledCourseColumn>
        <StyledTitle>Education</StyledTitle>
        <StyledRow>
          <CourseList>
            <StyledRow>
              <div>
                <h4>
                  BA/MS in Computer Science <span>Boston University</span>
                </h4>
                <p>May 2025</p>
                <p>GPA: 3.76/4.0</p>
              </div>
              <Image src1={BU} alt1="Image of BU logo" />
            </StyledRow>
          </CourseList>
          <CourseList>
            <StyledRow>
              <div>
                <h4>
                  High School Diploma <span>Bronx High School of Science</span>
                </h4>
                <p>June 2021</p>
                <p>GPA: 96/100</p>
              </div>
              <Image src1={Bxsci} alt1="Image of Bronx Science logo" />
            </StyledRow>
          </CourseList>
        </StyledRow>
        <CourseList>
          <h4>Current Courses</h4>
          <StyledUL>
            <li>
              <a href="https://www.bu.edu/academics/eng/courses/eng-ec-521/">
                Cybersecurity
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-455/">
                Graduate Computer Networks
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-391/">
                Web Application Development
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-501/">
                Mobile Application Development
              </a>
            </li>
          </StyledUL>
        </CourseList>
        <CourseList>
          <h4>Foundational Courses</h4>
          <StyledUL>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-112/">
                Introduction to Computer Science 2
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-131/">
                Combinatoric Structures
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-210/">
                Computer Systems
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-330/">
                Introduction to the Analysis of Algorithms
              </a>
            </li>
          </StyledUL>
        </CourseList>
        <CourseList>
          <h4>Formal Tools </h4>
          <StyledUL>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-132/">
                Geometrical Algorithms
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-237/">
                Probability in Computing
              </a>
            </li>
          </StyledUL>
        </CourseList>
        <CourseList>
          <h4>Central Topics Courses</h4>
          <StyledUL>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-320/">
                Concepts of Programming Languages
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-350/">
                Fundamentals of Computer Systems
              </a>
            </li>
          </StyledUL>
        </CourseList>
        <CourseList>
          <h4>Elective Courses</h4>
          <StyledUL>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-357/">
                Intro to Information Security
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-411/">
                Software Engineering
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-440/">
                Intro to Artificial Intelligence
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-454/">
                Embedded Systems Development
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-460/">
                Intro to Database Systems
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-506/">
                Tools of Data Science
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-cs-538/">
                Cryptography
              </a>
            </li>
          </StyledUL>
        </CourseList>
        <CourseList>
          <h4>Languages</h4>
          <StyledUL>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-lj-112/">
                Japanese 2
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-lj-211/">
                Japanese 3
              </a>
            </li>
            <li>
              <a href="https://www.bu.edu/academics/cas/courses/cas-lj-212/">
                Japanese 4
              </a>
            </li>
          </StyledUL>
        </CourseList>
      </StyledCourseColumn>
    </>
  );
}
