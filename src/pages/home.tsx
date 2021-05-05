import React, { Suspense } from 'react';
import { Content, ContentType } from '../components/content';
import { SubTitle, PageTitle } from '../components/titles';
import { GithubProjects } from '../components/githubProjects';

export const Home: React.FC = () => (
  <div>
    <PageTitle title="EF / Open Source Hub" />

    <SubTitle title="Repositories" />
    <Content className="my-8" type={ContentType.text}>
      <Suspense fallback={<div>Loading...</div>}>
        <GithubProjects />
      </Suspense>
    </Content>
  </div>
);
