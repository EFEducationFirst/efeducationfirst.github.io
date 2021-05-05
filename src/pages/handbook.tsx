import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { PageTitle, SubTitle } from '../components/titles';
import { Content, ContentType } from '../components/content';

export const Handbook: React.FC = () => (
  <div>
    <PageTitle title="Handbook" />

    <SubTitle title="The Open Source Project" />
    <Content type={ContentType.text}>
      <p>
        <LoremIpsum p={2} />
      </p>
    </Content>

    <SubTitle title="Open Source Committees" />
    <Content type={ContentType.text}>
      <p>
        <LoremIpsum p={3} />
      </p>
    </Content>

    <SubTitle title="Joining the Open Source Effort" />
    <Content type={ContentType.text}>
      <p>
        <LoremIpsum p={3} />
      </p>
    </Content>
  </div>
);
