import styled from "styled-components";

const SkillsDiv = styled.div`
  background-color: #bfdbf7;
  width: 100%;
  margin: 5px;
`;
const SkillsDivWrapper = styled.div`
  background-color: #bfdbf7;
  width: 100%;
`;
const Tablehead = styled.th`
  text-align: left;
  padding: 10px;
  border: 2px solid #022b3a;
`;

const TD = styled.td`
  padding: 10px;
  border: 2px solid #022b3a;
  text-align: left;
`;
export default function Skills() {
  const skillsList = [
    { name: "JavaScript", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Python", level: "Advanced" },
    { name: "Java", level: "Advanced" },
    { name: "C", level: "Advanced" },
    { name: "C#", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "HTML", level: "Advanced" },
    { name: "Kotlin", level: "Intermediate" },
    { name: "OCaml", level: "Beginner" },
    { name: "SQL", level: "Advanced" },
    { name: "XML", level: "Intermediate" },
    { name: "NoSQL", level: "Beginner" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Embedded Systems", level: "Intermediate" },
    { name: "IT Service Desk", level: "Advanced" },
    { name: "Computer Networking", level: "Intermediate" },
    { name: "Cybersecurity", level: "Intermediate" },
    { name: "Cryptography", level: "Intermediate" },
    { name: "Web Development", level: "Intermediate" },
    { name: "Android Mobile App Development", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
  ];
  return (
    <SkillsDivWrapper>
      <SkillsDiv>
        <h2>My Skills</h2>
        <table>
          <thead>
            <tr>
              <Tablehead>Skill</Tablehead>
              <Tablehead>Proficiency Level</Tablehead>
            </tr>
          </thead>
          <tbody>
            {skillsList.map((skill, index) => (
              <tr key={index}>
                <TD>{skill.name}</TD>
                <TD>{skill.level}</TD>
              </tr>
            ))}
          </tbody>
        </table>
      </SkillsDiv>
    </SkillsDivWrapper>
  );
}
