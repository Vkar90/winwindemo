import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/77.png',
    title: 'of consumers',
    description:
      'are more likely to use companies that are committed to making the world a better place.',
  },
  {
    imageUrl: '/grid-icons/72.png',
    title: 'of consumers',
    description:
      'are more likely to be loyal to a company that leads with purpose.',
  },
  {
    imageUrl: '/grid-icons/49.png',
    title: 'assume',
    description:
      'that companies who don’t speak on social issues don’t care.',
  }
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
