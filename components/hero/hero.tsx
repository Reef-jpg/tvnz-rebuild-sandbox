import { MouseEvent, MouseEventHandler, useState } from "react";

import { Button } from "../button/button";
import { Link } from "../link/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  min-height: 380px;

  position: relative;
  cursor: pointer;

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
    .sub-title {
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

    .sponsor {
      /* scaling to 0.5x as the API is always meant to provide a 2x resolution image for this spot (see PLAY-3837) */
      transform: scale(0.5) translate(50%, 50%);

      margin-right: 4.75rem;
      position: absolute;
      bottom: 0;
      right: 0;

      display: flex;
      flex-direction: column;

      .label {
        /* double everything to offset the 0.5x of parent wrapper */
        margin-bottom: calc(4px * 2);
        font-size: calc(14px * 2);
        color: #bfbfbf;
      }
      .link {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export const Hero = ({
  title,
  description,
  image,
  imageAlternativeText = "Hero Image",
  subTitle,
  heroLink,
  buttonLink,
  sponsorLogo,
}: {
  title: string;
  description: string;
  image: string;
  imageAlternativeText?: string;
  subTitle?: string;
  heroLink: string;
  buttonLink: string;
  sponsorLogo?: { label?: string; link: string; image: string };
}) => {
  // state for my list button
  const [faved, setFaved] = useState<boolean>(false);

  // click handlers
  const heroLinkHandler: MouseEventHandler = (event: MouseEvent) => {
    // only follow link if one of these elements was clicked
    const selectorsToLink = ["content", "description", "title", "sub-title"];
    if (
      heroLink &&
      selectorsToLink.some((x) =>
        (event?.target as HTMLElement)?.classList.contains(x)
      )
    )
      window.location.assign(heroLink);
  };

  const myListHandler = () => {
    setFaved(!faved);
  };

  return (
    <StyledDiv className="hero" onClick={heroLinkHandler}>
      {/* hero splash image */}
      <div className="image-wrapper">
        <img src={image} alt={imageAlternativeText} />
      </div>

      {/* content section of hero */}
      <div className="content">
        {/* text */}
        {subTitle && <div className="sub-title">{subTitle}</div>}
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>

        {/* buttons */}
        <div className="buttons">
          <Link href={buttonLink}>
            <Button text="watch now" icon="/icon-play.svg" />
          </Link>

          <Button
            text="my list"
            icon={faved ? "/icon-mylist-tick.svg" : "/icon-mylist.svg"}
            variant="secondary"
            className={faved ? "in-my-list" : "not-in-my-list"}
            onClick={myListHandler}
          />
        </div>

        {/* sponsor ad */}
        {sponsorLogo && (
          <div className="sponsor">
            <Link
              href={sponsorLogo.link}
              target="_blank"
              rel="nofollow noopener"
            >
              <p className="label">
                {sponsorLogo.label ? sponsorLogo.label : "Proud Sponsor"}
              </p>
              <img src={sponsorLogo.image} alt="Sponsor Logo" />
            </Link>
          </div>
        )}
      </div>
    </StyledDiv>
  );
};
