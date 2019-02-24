import styled from 'styled-components';

export const UserName = styled.h2`
  font-family: Roboto;
  font-weight: 500;
  font-size: 1.8rem;
  margin-bottom: 0.4rem;
`;

export const Title = styled.h3`
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.4rem;
  margin-bottom: 1.4rem;
`;

export const Avatar = styled.img`
  height: 10rem;
  border-radius: 50%;
  margin-bottom: 0.4rem;
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

export const Link = styled.a`
  display: inline-block;
  color: #000;
  font-family: 'Pacifico', cursive;
  font-size: 1.2rem;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px -1px #F48024;
  }
`;

