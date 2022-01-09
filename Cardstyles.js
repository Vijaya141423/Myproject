import styled from 'styled-components';
export const Container = styled.div``;
export const Cards = styled.div`
  height: 400px;
  width: 750px;
  margin: 0 auto;
  margin-top: 20vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  border-radius: 5px;
  padding: 2px 16px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;
export const UserContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 50px;
`;
export const Image = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 100px;
  border-radius: 50%;
  margin-right: 17px; ;
`;
export const UserDetails = styled.div`
  margin-top: 15px;
`;
export const UserName = styled.p`
  font-weight: bold;
`;
export const Description = styled.p`
  color: #b2bdb5;
`;
export const CardContent = styled.div`
  position: relative;
  margin-left: 45px;
`;
export const Title = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
export const Desc = styled.p`
  font-weight: 500;
`;
export const UserInteraction = styled.div`
  color: #b2bdb5;
  margin-left: 45px;
`;
export const Count = styled.div`
  display: flex;
  align-items: center;
`;
export const Bottom = styled.div`
  margin-top: 20px;
`;

export const Like1 = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-weight: 900;
  color: #483d8b;
  margin-left: 35px;
  cursor: pointer;
`;
export const Comment1 = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-weight: 900;
  color: #483d8b;
  margin-left: 35px;
  cursor: pointer;
`;
export const Share1 = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-weight: 900;
  color: #483d8b;
  margin-left: 35px;
  cursor: pointer;
`;