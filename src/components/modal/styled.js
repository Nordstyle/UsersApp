import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
`;

export const Block = styled.div`
  width: 30rem;
  padding: 2rem;
  border-radius: 0.4rem;
  background: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.4rem;
`;

export const Choose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.a`
  width: 100%;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  text-align: center;
  font-family: Roboto;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  border: 2px solid white;
  background: transparent; 
  transition: 0.3s;
  &:hover{
    opacity: 0.8;
  }
  ${props => props.negative && `
    background: red;
  `}
  ${props => props.positive && `
    background: green;
  `}
`;

export const Close = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
  font-family: Roboto;
  font-weight: 500;
  font-size: 1.4rem;
  cursor: pointer;
  color: #fff;
`;