// @ts-nocheck
import { useLogo } from '@/hooks/use-logo';
import React from 'react';

const LogoIcon: React.FC = () => {
  const { sidebarLogo } = useLogo();
  return (
    <img
      src={sidebarLogo}
      alt="logo"
      style={{ height: 28, width: 'auto', display: 'block' }}
    />
  );
};

const SLogoIcon: React.FC = () => {
  const { miniLogo } = useLogo();
  return (
    <img
      src={miniLogo}
      alt="logo"
      style={{ height: 28, width: 28, display: 'block' }}
    />
  );
};

export { LogoIcon, SLogoIcon };
