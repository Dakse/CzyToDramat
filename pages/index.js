import React, { useState } from "react";
import Head from "next/head";
import Fuse from "fuse.js";
import {
  Typography,
  TextField,
  Button,
  CircularProgress
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
export default function Home() {
  const [status, setStatus] = useState("ready");
  const [value, setValue] = useState("");
  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    keys: ["title"]
  };
  const getResponseFromApi = input => {
    if (status !== "loading") {
      setStatus("loading");
      axios
        .get("https://wolnelektury.pl/api/books")
        .then(response => {
          let data = new Fuse(response.data, options).search(input)[0];
          if (data && data.item && data.item.kind === "Dramat") {
            setStatus("true");
            document.getElementById("dramat").play();
          } else if (data && data.item && data.item.kind !== "Dramat") {
            setStatus("false");
            document.getElementById("porazka").play();
          } else {
            setStatus("noMatch");
            document.getElementById("nieporozumienie").play();
          }
        })
        .catch(error => {
          document.getElementById("zepsulo").play();
          setStatus("error");
        });
    }
  };
  return (
    <div
      className="container"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Head>
        <title>Czy to dramat?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio id="dramat" src="/dramat.mp3"></audio>
      <audio id="zepsulo" src="/error.mp3"></audio>
      <audio id="porazka" src="/porazka.mp3"></audio>
      <audio id="nieporozumienie" src="/nieporozumienie.mp3"></audio>
      <main>
        <Typography style={{ fontWeight: 700 }} variant="h1">
          Czy to dramat?
        </Typography>
        {status === "loading" && (
          <CircularProgress
            size={90}
            style={{ marginTop: "0.5em", textAlign: "center" }}
          />
        )}
        {status === "true" && (
          <div style={{ textAlign: "center", color: "#4caf50" }}>
            <DoneIcon
              style={{
                marginTop: "0.5em",
                textAlign: "center",
                fontSize: 100,
                color: "#4caf50"
              }}
            />
            <br />
            <Typography variant="h5">{value + " jest dramatem."}</Typography>
          </div>
        )}
        {status === "false" && (
          <div style={{ textAlign: "center", color: "#f44336" }}>
            <CloseIcon
              style={{
                marginTop: "0.5em",
                textAlign: "center",
                fontSize: 100,
                color: "#f44336"
              }}
            />
            <br />
            <Typography variant="h5">
              {value + " nie jest dramatem."}
            </Typography>
          </div>
        )}
        {status === "error" && (
          <div style={{ textAlign: "center", color: "#f44336" }}>
            <ErrorIcon
              style={{
                marginTop: "0.5em",
                textAlign: "center",
                fontSize: 100,
                color: "#f44336"
              }}
            />
            <br />
            <Typography variant="h5">
              {"Błąd ładowania, spróbuj ponownie"}
            </Typography>
          </div>
        )}
        {status === "noMatch" && (
          <div style={{ textAlign: "center", color: "gray" }}>
            <SearchIcon
              style={{
                marginTop: "0.5em",
                textAlign: "center",
                fontSize: 100,
                color: "gray"
              }}
            />
            <br />
            <Typography variant="h5">
              {"Nie znalazłem utworu o takiej nazwie w bazie"}
            </Typography>
          </div>
        )}
        <TextField
          align="center"
          style={{
            marginTop: "3em",
            textAlign: "center",
            fontWeight: 700,
            padding: 30,
            backgroundColor: "rgba(10,10,10,0.2)",
            borderRadius: "30px",
            textAlign: "center"
          }}
          placeholder="Wpisz żeby sprawdzić"
          onChange={() => {
            setValue(event.target.value), setStatus("ready");
          }}
          onKeyPress={() => {
            if (event.keyCode === 13) {
              getResponseFromApi(value);
            }
          }}
          fullWidth
        />
        <Button
          style={{ margin: 16 }}
          variant={"outlined"}
          disabled={status === "loading"}
          onClick={() => getResponseFromApi(value)}
        >
          {" "}
          Sprawdź
        </Button>
      </main>

      <footer>
        <Typography>
          <a
            href="https://github.com/Dakse"
            target="_blank"
            style={{ fontWeight: 600 }}
          >
            Made by Daks
            <img
              style={{ borderRadius: "50%" }}
              src="https://avatars3.githubusercontent.com/u/42167605?s=460&u=49db09530fe0dc4aff9af9e011b7a51fc766f98e&v=4"
              alt="Vercel Logo"
              className="logo"
            />
          </a>
          <a
            href="https://www.pexels.com/@emily-252615"
            target="_blank"
            style={{ fontWeight: 600 }}
          >
            Background by @emily-252615
          </a>
          <a href="https://nextjs.org/" target="_blank">
            Powered by NextJS
          </a>
        </Typography>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
