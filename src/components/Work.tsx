import styled from "styled-components";

const WorkList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #bfdbf7;
  width: 100%;
`;
const WorkComponent = styled.div`
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
export default function Work() {
  return (
    <WorkList>
      <StyledTitle>Work Experience</StyledTitle>
      <StyledUL>
        <WorkComponent>
          <li>
            <h3>Information Technology Intern</h3>
            <h4>United Talent Agency</h4>
            <h5>07/2023 - 08/2023</h5>
            <StyledUL>
              <li>
                Evaluated and introduced new IT solutions, including hardware
                and software, to increase productivity by 30% while reinforcing
                security precautions against critical threats.
              </li>
              <li>
                Trained end-users on company specific applications and software
                to reduce help desk tickets by over 50%.
              </li>
              <li>
                Documented, tagged, and re-imaged around 33% of backup assets
                for reuse, ensuring minimal error and downtime for onboarding.
              </li>
              <li>
                Troubleshooted software and hardware issues for 5 talent
                agents/managers while maintaining a 100% satisfactory customer
                service rating.
              </li>
            </StyledUL>
          </li>
        </WorkComponent>
        <WorkComponent>
          <li>
            <h3>Software Engineering Intern</h3>
            <h4>iXperience</h4>
            <h5>12/2021 - 01/2022</h5>
            <StyledUL>
              <li>
                Collaborated with a team of interns to design and develop a
                fully functional website from scratch, ensuring alignment with
                company requirements.
              </li>
              <li>
                Created a visually appealing and user-friendly application using
                React, JavaScript, HTML, and CSS.
              </li>
              <li>
                Implemented API integration with POSTMAN and utilized MongoDB
                for database management, establishing a robust front-end to
                back-end connection.
              </li>
            </StyledUL>
          </li>
        </WorkComponent>
        <WorkComponent>
          <li>
            <h3>Library Assistant</h3>
            <h4>Boston University Mugar Music Library</h4>
            <h5>05/2022 - Current</h5>
            <StyledUL>
              <li>
                Provided exceptional customer service to music library patrons
                by providing clear directional guidance and promptly addressing
                inquiries.
              </li>
              <li>
                Resolved patron questions effectively, ensuring a positive
                experience and fostering a welcoming environment.
              </li>
              <li>
                Enhanced library functionality through efficient organization
                and re-shelving of materials.
              </li>
              <li>
                Managed daily library operations, including opening and closing
                procedures, to ensure seamless patron entry and exit.
              </li>
            </StyledUL>
          </li>
        </WorkComponent>
        <WorkComponent>
          <li>
            <h3>Student Dining Hall Worker</h3>
            <h4>Boston University Dining Services</h4>
            <h5>01/2022 - 05/2022</h5>
            <StyledUL>
              <li>
                Assisted with food preparation, serving, and maintaining food
                stations to ensure continuous availability of fresh and
                appealing food for patrons.
              </li>
              <li>
                Warmly greeted customers, answered inquiries about menu items,
                and accommodated dietary restrictions or special requests.
              </li>
              <li>
                Ensured cleanliness and organization of dining areas by clearing
                tables, wiping surfaces, and restocking utensils and condiments.
              </li>
              <li>
                Collaborated effectively with team members and supervisors to
                streamline operations and maintain efficiency during peak
                periods.
              </li>
              <li>
                Maintained a high standard of cleanliness and hygiene in
                accordance with industry regulations.
              </li>
            </StyledUL>
          </li>
        </WorkComponent>
      </StyledUL>
    </WorkList>
  );
}
