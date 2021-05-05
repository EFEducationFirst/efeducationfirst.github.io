/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { ReactNode } from 'react';

export const Content: React.FC<ContentProps> = (props) => {
  const { className, children, type } = props;

  let classes = 'container mx-auto px-4';
  switch (type) {
    case ContentType.text:
      classes += ' my-8 text-xl';
      break;
    default:
      break;
  }

  classes += ` ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export interface ContentProps {
  children: ReactNode;
  className?: string;
  type: ContentType
}

export enum ContentType {
  text,
  header,
  misc,
}
