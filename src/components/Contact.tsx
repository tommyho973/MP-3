import styled from "styled-components";

const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  background-color: #bfdbf7;
  width: 100%;
`;

const ListItem = styled.li`
  margin: 2%;
`;

const StyledLink = styled.a`
  color: #1f7a8c;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Contact() {
  return (
    <ContactList>
      <ListItem>
        Phone: <StyledLink href="tel:6466275619">646-627-5619</StyledLink>
      </ListItem>
      <ListItem>
        Email:{" "}
        <StyledLink href="mailto:tommy.ton.ho@gmail.com">
          tommy.ton.ho@gmail.com
        </StyledLink>
      </ListItem>
      <ListItem>
        LinkedIn:{" "}
        <StyledLink href="https://www.linkedin.com/in/tommy-t-ho/">
          www.linkedin.com/in/tommy-t-ho/
        </StyledLink>
      </ListItem>
      <ListItem>
        Github:{" "}
        <StyledLink href="https://github.com/tommyho973">
          https://github.com/tommyho973
        </StyledLink>
      </ListItem>
    </ContactList>
  );
}
