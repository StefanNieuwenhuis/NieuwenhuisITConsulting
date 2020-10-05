import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { Link } from 'gatsby';

export const PrimaryLink = styled(Link)([
  tw`text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider`,
  css`
    background-color: #667eea;
  `,
]);

export const SecondaryLink = tw(
  Link
)`bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider`;

export const AnchorLink = styled(Link)([
  css`
    color: #2844bf;
  `,
]);
