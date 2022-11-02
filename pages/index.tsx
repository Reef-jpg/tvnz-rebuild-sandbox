import Button from "../components/button";
import Head from "next/head";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const StyledDiv = styled.div`
  margin-top: 3rem;

  display: flex;

  > * {
    margin: 1rem;
  }

  .col > * {
    margin: 1rem;
  }

  .test {
    max-height: unset;
    font-size: 2rem;
    background-color: pink;
    border-radius: 9001px;
  }

  .icon-flip {
    img {
      transform: scale(1, -1);
    }
  }
`;

export default function Home() {
  const [faved1, setFaved1] = useState<boolean>(false);
  const [faved2, setFaved2] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>TVNZ</title>
        <meta name="description" content="Generated by TVNZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">TVNZ!</a>
        </h1>

        <StyledDiv>
          <div className="col">
            <h2>Normal Buttons</h2>

            {/* primary button */}
            <Button
              text="Watch Now"
              icon="/icon-play.svg"
              onClick={() => window.alert("click handler 1")}
            />

            {/* secondary button */}
            <Button
              text="My List"
              icon={faved1 ? "/icon-mylist-tick.svg" : "/icon-mylist.svg"}
              variant="secondary"
              className={faved1 ? "in-my-list" : "not-in-my-list"}
              onClick={() => setFaved1(!faved1)}
            />

            {/* outline button */}
            <Button text="What's New" variant="outline" />
          </div>

          <div className="col">
            <h2>Circle Buttons</h2>

            {/* circle button */}
            <Button
              icon="/icon-chevron.svg"
              variant="primary circle"
              className="icon-flip"
              onClick={() => window.scrollTo(0, 0)}
            />
            <Button
              icon={faved2 ? "/icon-mylist-tick.svg" : "/icon-mylist.svg"}
              variant="outline circle"
              className={faved2 ? "in-my-list" : "not-in-my-list"}
              onClick={() => setFaved2(!faved2)}
            />
          </div>

          <div className="col">
            <h2>Test Stuff</h2>

            {/* test button */}
            <Button text="classname test" variant="outline" className="test" />
          </div>
        </StyledDiv>
      </main>

      <footer className={styles.footer}>
        <a href="https://www.tvnz.co.nz" target="_blank">
          Powered by TVNZ
        </a>
      </footer>
    </div>
  );
}
