import styled from 'styled-components';
import BasicSection from 'components/BasicSection'
import Page from 'components/Page';
import Quote from 'components/Quote'
import RichText from 'components/RichText';
import SectionTitle from 'components/SectionTitle';
import Separator from 'components/Separator';
import Container from 'components/Container';

// import FaqSection from 'views/PricingPage/FaqSection';
// import PricingTablesSection from 'views/PricingPage/PricingTablesSection';

export default function PricingPage() {
  return (
    <Page title="About us" description="Learn more about our Team and Mission">
        {/* <PricingTablesSection />
        <FaqSection /> */}
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
          <Wrapper>
            <SectionTitle className='titleStyle'>Meet the Team</SectionTitle>
            <RichText className="team">
              <h4 className='teamMember'>Ismini Drosoforidi, Co-Founder </h4>
              <p>Α Psychology graduate with marketing working experience, Ismini has been actively involved in local and global NGOs, such as Bodossaki Foundation, ActionAid, Greek Council for Refugees, Global Shapers Athens Hub. A visionary doer that is committed to bridging the gap between corporate communication and social causes.</p>
              <Separator />
              <h4 className='teamMember'>Natassa Liapaki, Co-Founder</h4>
              <p>A journalist in managerial roles for over 10 years, Natassa has an extensive experience in production, content creation, communication strategy and social media management. Always trying to solve problems and change people's mindsets for a good cause.</p>
            </RichText>
          </Wrapper>
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
  color: rgb(var(--text));
  display: inline;
  font-size: 2.2rem;
  line-height: 3rem;
  font-style: italic;
  hanging-punctuation: first;
`;
