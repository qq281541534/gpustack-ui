import { GPUStackVersionAtom } from '@/atoms/user';
import { getAtomStorage } from '@/atoms/utils';
import VersionInfo, { modalConfig } from '@/components/version-info';
import externalLinks from '@/constants/external-links';
import { useIntl } from '@umijs/max';
import { Button, Divider, Modal, Typography } from 'antd';
import { createStyles } from 'antd-style';
import styled from 'styled-components';

const CompanyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-inline: 0 8px;
`;

const useStyles = createStyles(({ token, css }) => ({
  footer: css`
    bottom: 0;
    width: 100%;
    background-color: transparent;
    padding: 20px 0;
    text-align: center;
    font-size: var(--font-size-middle);
    color: ${token.colorTextTertiary};
  `,
  'footer-content-left-text': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Footer: React.FC = () => {
  return null;
};

export default Footer;
