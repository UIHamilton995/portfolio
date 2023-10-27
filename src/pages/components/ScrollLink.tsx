import React from 'react';
import { Link as ReactScrollLink, LinkProps as ReactScrollLinkProps } from 'react-scroll';

interface ScrollLinkProps extends ReactScrollLinkProps {
  children: React.ReactNode;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ children, ...props }) => {
  //@ts-ignore
  return <ReactScrollLink {...props}>{children}</ReactScrollLink>;
};

export default ScrollLink;
