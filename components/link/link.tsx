import { ReactNode } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  display: inherit;
  text-decoration: none;
`;

type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

export const Link = ({
  href,
  target,
  rel,
  children,
  className = "",
}: {
  href: string;
  target?: LinkTarget;
  rel?: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <StyledLink
      href={href}
      target={target}
      rel={rel}
      className={`link ${className}`}
    >
      {children}
    </StyledLink>
  );
};
