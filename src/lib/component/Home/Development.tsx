import styled from 'styled-components'
import { Box } from 'lib/component/Toolkit'

const DevelopmentBody = styled(Box)`
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  border: 1px solid #ededed;
  box-shadow: 0px 0px 34px rgb(0 0 0 / 10%);
  margin: 0 auto;
  max-width: 1024px;
  padding: 30px;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 60px;
    text-align: left;
  }
`

const DevelopmentBodyDescription = styled.p`
  color: #282846;
  font-size: 15px;
  font-weight: 330;
  line-height: 1.6;
  margin: 0 0 22px 0;
  max-width: 1024px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 117px 0 0;
  }
`

const DevelopmentBodyLink = styled.a`
  background-color: rgba(0, 0, 0, 0);
  border: solid 1px #4351c5;
  border-radius: 6px;
  color: #4351c5;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.6;
  padding: 11px 33px;
  transition: background-color 0.4s ease, color 0.4s ease, transform 0.4s ease;
  width: 100%;
  &:hover {
    color: #fff;
    background-color: #4351c5;
    box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
    transform: matrix(1, 0, 0, 1, 0, -1);
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
  }
`

const DevelopmentBodyHeading = styled.h3`
  color: #282846;
  font-size: 28px;
  font-weight: 700;
  line-height: 30px;
  margin: 0 0 10px 0;
  opacity: 0.9;
`

const DevelopmentContainer = styled.section`
  background-color: rgb(242, 244, 247);
  padding: 60px 35px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 80px 95px;
  }
`

const DevelopmentHeading = styled.h2`
  color: #3c3c57;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 auto 30px auto;
  max-width: 500px;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 35px;
  }
`

export default function Development() {
  return (
    <section>
      <DevelopmentContainer>
        <DevelopmentHeading>
          Our development <br /> approach and methodology
        </DevelopmentHeading>
        <DevelopmentBody>
          <DevelopmentBodyHeading>Automate your workflow</DevelopmentBodyHeading>
          <DevelopmentBodyDescription>
            Our specialists are more concerned about delivering a usable product, than focusing only on technical
            aspects. We will take a more active approach in understanding of your business challenges and industry.
          </DevelopmentBodyDescription>
          <DevelopmentBodyLink>LEARN MORE</DevelopmentBodyLink>
        </DevelopmentBody>
      </DevelopmentContainer>
    </section>
  )
}
