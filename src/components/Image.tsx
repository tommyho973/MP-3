import styled from "styled-components";
interface ImageProps {
  src1: string;
  alt1: string;
}

const StyledImage = styled.img`
  width: 30%;
  height: auto;
  display: block;
  margin: 5px;
  object-fit: cover; /* Change to 'contain' if needed */
  @media screen and (max-width: 768px) {
    width: 50%;
    margin: 10px;
    margin-left: 10%;
  }
`;
export default function Image({ src1, alt1 }: ImageProps) {
  return <StyledImage src={src1} alt={alt1} />;
}
