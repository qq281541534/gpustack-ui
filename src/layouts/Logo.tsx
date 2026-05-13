// @ts-nocheck
import React from 'react';

const LogoIcon: React.FC = () => {
  return (
    <span
      style={{
        fontSize: '24px',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, #1677ff, #722ed1)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        whiteSpace: 'nowrap'
      }}
    >
      LLM部署平台
    </span>
  );
};

const SLogoIcon: React.FC = () => {
  return (
    <span
      style={{
        fontSize: '12px',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, #1677ff, #722ed1)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      LLM
    </span>
  );
};

export { LogoIcon, SLogoIcon };
