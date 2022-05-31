import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>corporate social responsibility</OverTitle>
          <SectionTitle>Want to know how to get in a Win-Win situation?</SectionTitle>
          <Description>
          {/* We help you dominate the future and achieve a triple bottom line: Profit, People, Planet. We are committed to doing good. We make sure that all causes are making a social impact with regular follow-ups.<br></br><br></br> */}
          Corporate Social Responsibility decoded and businesses “doing good” analyzed. Entrepreneurship and social needs experts share their knowledge on modern CSR with the WinWin team. Should businesses take a stand on current social and environmental issues? Can CSR have a real impact? How will social entities make their message stronger? In what ways can businesses dialogue with consumers become more meaningful and beneficial? 
          </Description>
          <OverTitle>Listen to our podcast here: </OverTitle>
          <iframe style={{borderRadius:"12px"}} title="CSR podcast on Athen's Voice" src="https://open.spotify.com/embed/episode/2M1b8s5cy5EP9JSj2G2GAL?utm_source=generator&t=0" width={"100%"} height={232} frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          <iframe style={{borderRadius:"12px"}} title="CSR podcast on Athen's Voice" src="https://open.spotify.com/embed/episode/5LRXBbVZ9LDkqXiv8f2WgZ?utm_source=generator&t=0" width={"100%"} height={232} frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>   
          <ButtonGroup>
            <NextLink href="/contact" passHref>
              <Button>
                Contact us <span>&rarr;</span>
              </Button>
            </NextLink>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
