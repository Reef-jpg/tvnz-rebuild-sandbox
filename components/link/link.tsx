import { ReactNode } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  display: inline-flex;
  text-decoration: none;
`;

type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

export const Link = ({
  href,
  target,
  children,
  className = "",
}: {
  href: string;
  target?: LinkTarget;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <StyledLink href={href} target={target} className={`link ${className}`}>
      {children}
    </StyledLink>
  );
};
