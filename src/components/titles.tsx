import React, { CSSProperties, ReactNode } from 'react';
import { Content, ContentType } from './content';

export const PageTitle: React.FC<{ title: string }> = ({ title }) => {
  const titleLength = title.length;
  const typingAnimation: CSSProperties = {
    width: `${titleLength}ch`,
    animation: `typing ${titleLength / 10}s steps(${titleLength}), blink .5s step-end infinite alternate`,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    borderRight: '3px solid',
    fontFamily: 'monospace',
  };

  return (
    <div style={{
      backgroundColor: '#003C64',
    }}
    >
      <Content className="py-28" type={ContentType.header}>
        <h1 className="text-6xl text-white" style={typingAnimation}>{title}</h1>
      </Content>
    </div>
  );
};

export const SubTitle: React.FC<SubTitleProps> = ({ children, title }) => (
  <div
    className="py-16"
    style={{
      backgroundColor: '#EFEFEF',
    }}
  >
    <Content type={ContentType.header}>
      {
        children !== undefined
          ? children
          : <p className="text-4xl">{title}</p>
      }
    </Content>
  </div>
);

export interface SubTitleProps {
  children?: ReactNode;
  title?: string;
}
