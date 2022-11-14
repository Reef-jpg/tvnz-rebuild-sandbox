import { Button } from "../button/button";
import styled from "styled-components";
import { useState } from "react";

const StyledDiv = styled.div`
  width: 100%;
  min-height: 380px;

  position: relative;

  /* image styling */
  .image-wrapper {
    z-index: 0;
    width: 100%;
    max-width: 100%;
    max-height: 100%;

    position: absolute;

    img {
      width: 100%;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }

    /* gradient fade on image */
    &::before {
      width: 100%;
      height: 100%;

      display: block;
      position: absolute;

      content: "";
      background: linear-gradient(
        to bottom,
        transparent,
        rgba(17, 17, 17, 0.25),
        rgba(17, 17, 17, 0.75),
        #111
      );
    }
  }

  /* content styling */
  .content {
    z-index: 1;
    padding: calc(1rem + 17%) 4.75rem 0 4.75rem; // 17% for image offset

    position: relative;

    /* text */
    .title {
      margin: 0;
      font-weight: 700;
      font-size: 3rem;
      line-height: 1.1;
    }
    .description {
      max-width: 50%;
      margin: 1rem 0 2rem 0;
      font-size: 1rem;
      font-weight: 300;
      line-height: 21px;
    }
    .subTitle {
      margin-bottom: 0.5rem;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 1.37rem;
      text-transform: uppercase;
    }

    /* buttons */
    .buttons {
      display: flex;

      .button {
        margin-right: 1rem;
      }
    }
  }
`;

export const Hero = ({
  title,
  description,
  image,
  imageAlt = "Hero Image",
  subTitle,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  subTitle?: string;
}) => {
  const [faved, setFaved] = useState<boolean>(false);

  const favHandler = () => {
    setFaved(!faved);
  };

  return (
    <StyledDiv className="hero">
      {/* hero splash image */}
      <div className="image-wrapper">
        <img src={image} alt={imageAlt} />
      </div>

      {/* content section of hero */}
      <div className="content">
        {/* text */}
        {subTitle && <div className="subTitle">{subTitle}</div>}
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>

        {/* buttons */}
        <div className="buttons">
          <Button text="watch now" icon="/icon-play.svg" />
          <Button
            text="My List"
            icon={faved ? "/icon-mylist-tick.svg" : "/icon-mylist.svg"}
            variant="secondary"
            className={faved ? "in-my-list" : "not-in-my-list"}
            onClick={favHandler}
          />
        </div>
      </div>
    </StyledDiv>
  );
};
