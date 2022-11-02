import styled from "styled-components";

const StyledButton = styled.button`
  max-height: 2.5rem;
  height: 2.5rem;
  padding: 0.75rem 1.1875rem;

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
  font-size: 12px;
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
    max-height: 50px;
    max-width: 50px;
    height: 50px;
    width: 50px;
  }

  /* my list animations */
  &.in-my-list {
    .icon {
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

const Button = ({
  text = "",
  icon = "",
  onClick,
  isSelected = false,
  variant = "primary",
  className,
}: {
  text?: string;
  icon?: string;
  onClick?: () => void;
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
          <img src={icon} alt="icon" />
        </span>
      )}
      {/* text */}
      {text && <span className="text">{text}</span>}
    </StyledButton>
  );
};

export default Button;
