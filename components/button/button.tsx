import { MouseEventHandler } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.8rem 1.1875rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;

  cursor: pointer;
  border-radius: 8px;
  border: 0;

  /* font styling */
  font-family: "Black Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.875px;
  text-transform: uppercase;

  transition: all 0.2s ease-in-out;

  .icon {
    line-height: 0;

    img {
      height: 100%;
    }
  }

  &:hover {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  }

  /* variant styling */
  &.primary {
    background-color: #0778d6;

    &:hover {
      background-color: #054e8c;
    }
  }
  &.secondary {
    background-color: transparent;
    color: #f5f5f5;
  }
  &.outline {
    border: 1px solid white;
    background-color: transparent;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }

  /* circle styling */
  &.circle {
    border-radius: 9001px;
    padding: 1rem;
    max-height: 3.125rem;
    max-width: 3.125rem;
    height: 3.125rem;
    width: 3.125rem;
  }

  /* my list animations */
  &.in-my-list {
    .icon {
      height: 16px;
      width: 16px;
      transform: scale(0.7);
      animation-name: squeeze1;
      animation-duration: 0.6s;
      animation-iteration-count: 1;
      animation-delay: 0.01s;
    }
    @keyframes squeeze1 {
      50% {
        transform: scale(0);
      }

      100% {
        transform: scale(1);
      }
    }
  }
  &.not-in-my-list {
    .icon {
      height: 16px;
      width: 16px;
      animation-name: squeeze2;
      animation-duration: 0.6s;
      animation-iteration-count: 1;
      animation-delay: 0.01s;
    }
    @keyframes squeeze2 {
      50% {
        transform: scale(0);
      }

      100% {
        transform: scale(1);
      }
    }
  }
`;

// ts types for button variations
type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "primary circle"
  | "secondary circle"
  | "outline circle";

export const Button = ({
  text = "",
  icon = "",
  iconAlternativeText = "Button Icon",
  onClick,
  isSelected = false,
  variant = "primary",
  className = "",
}: {
  text?: string;
  icon?: string;
  iconAlternativeText?: string;
  onClick?: MouseEventHandler;
  isSelected?: boolean;
  variant?: ButtonVariant;
  className?: string;
}) => {
  return (
    <StyledButton
      onClick={onClick}
      className={`button ${isSelected ? "selected" : ""} 
        ${variant} ${className}`}
    >
      {/* icon */}
      {icon && (
        <span className="icon">
          <img src={icon} alt={iconAlternativeText} />
        </span>
      )}
      {/* text */}
      {text && <span className="text">{text}</span>}
    </StyledButton>
  );
};
