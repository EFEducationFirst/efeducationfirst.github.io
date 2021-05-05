/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Hearth from '@ef-global/web-ui-react/lib/icons/IconHeart';

export const Footer: React.FC = () => (
  <footer className="ef-code-footer">
    <div className="container mx-auto">
      <div className="ef-footer__lang-section">
        <div className="ef-footer__lang-selector-w">
          <span className="ef-footer__link">&#169; EF Education First { new Date().getFullYear() }. All rights reserved.</span>
          <span className="ef-footer__link">Made with <Hearth /> in Zürich</span>
        </div>
      </div>
    </div>
  </footer>
);
