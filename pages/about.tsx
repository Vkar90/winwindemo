import styled from 'styled-components';
import BasicSection from 'components/BasicSection'
import Container from 'components/Container';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import Separator from 'components/Separator';


export default function PricingPage() {
  return (
    <Page title="About us" description="Learn more about our Team and Mission">
        <BasicSection imageUrl="/undraw_teamwork.svg" title="A few words about us" overTitle="Win Win CSR">
            <p>
            WinWin is an agency acting as <strong>the missing link</strong> between businesses and, often, complex to address, social causes. We help companies reinforce their social profile by running CSR activities which upgrade their corporate communication (win) and address actual social causes (win).
            </p>
          </BasicSection>
        <Wrapper>
          <SectionTitle className='firstTitle'>The problem</SectionTitle>
          <p className='bodyText'>On one hand, corporate communication about social issues can feel forced, not genuine and repetitive. It’s characterized by one-off events or campaigns that usually have low communication impact. On the other hand, the social needs’ space is highly fragmented.</p>
          <SectionTitle>CSR gets real</SectionTitle>
          <ul>
            <li>Our WinWin strategy starts with your WHY: We help businesses shape their purpose and find the cause that motivates them.</li>
            <li>From WHY to HOW: We use modern techniques to convey the message effectively.</li>
            <li>From HOW to WHAT: We connect each business to the most appropriate social partner and we design custom activations that serve the initial cause.</li>
          </ul>
          <Separator />
        </Wrapper> 
        <Container>
      <Blockquote>Our mission is to establish a new era of corporate communication with effective messages, mutual benefit for participating parties and great impact to the society.</Blockquote>
    </Container>
    <Separator />
        <SectionTitle className='firstTitle'>Meet the Team</SectionTitle>
        <BasicSection imageUrl="/ismini2.jpeg" title="Ismini Drosoforidi" overTitle="Co-Founder" reversed>
        <p>
        Α Psychology graduate with marketing working experience, Ismini has been actively involved in local and global NGOs, such as Bodossaki Foundation, ActionAid, Greek Council for Refugees, Global Shapers Athens Hub. A visionary doer that is committed to bridging the gap between corporate communication and social causes.
        </p>
      </BasicSection>
      <Separator />
        <BasicSection imageUrl="/natasa1.jpg" title="Natasa Liapaki" overTitle="Co-Founder">
        <p>
        A journalist in managerial roles for over 10 years, Natassa has an extensive experience in production, content creation, communication strategy and social media management. Always trying to solve problems and change people mindsets for a good cause.
        </p>
      </BasicSection>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin: 10rem;
  }
  .firstTitle{
    margin-top:10rem;
  }
  .bodyText{
    font-size:1.8rem;
    text-align:center;
    margin:5rem;
  }
  li{
    font-size:1.8rem;
    margin:3rem;
  }
  .titleStyle{
    margin-top:8rem;
  }
`;

const Blockquote = styled.blockquote`
  color: #01BFA6;
  display: block;
  font-size: 2.8rem;
  font-weight: 500;
  text-align: center;
  line-height: 3rem;
  font-style: italic;
  hanging-punctuation: first;
`;
