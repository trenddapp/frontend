import styled from 'styled-components'

const CommunityHeading = styled.h2`
  color: #3c3c57;
  font-family: 'Helvetica Neue';
  font-size: 35px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 22px 0;
`

const CommunityDescription = styled.p`
  color: #282846;
  font-family: 'Helvetica Neue';
  font-size: 18px;
  font-weight: 330;
  line-height: 1.6;
  text-align: center;
`

const CommunityLink = styled.a`
  background-color: rgb(78, 94, 228);
  border-radius: 6px;
  box-shadow: rgb(50 50 93 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.6;
  margin: 30px 0 0 0;
  padding: 11px 35px;
  transition: background-color 0.4s ease 0s, color 0.4s ease 0s, transform 0.4s ease 0s;

  &:hover {
    background-color: rgb(67, 81, 197);
    box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px, rgb(0 0 0 / 8%) 0px 3px 6px;
    color: rgb(255, 255, 255);
    transform: matrix(1, 0, 0, 1, 0, -1);
  }
`

const CommunitySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  min-height: 380px;
  padding: 80px 177px;
`

const Community = () => {
  return (
    <CommunitySection>
      <CommunityHeading>Join our community</CommunityHeading>
      <CommunityDescription>
        Ask questions to our community, learn about security and become familiar with smart contract <br />
        development.
      </CommunityDescription>
      <CommunityLink>GO TO THE FORUM</CommunityLink>
    </CommunitySection>
  )
}

export default Community
