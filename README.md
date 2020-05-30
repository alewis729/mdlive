<h1 align="center">
  <a href="https://mdlive-alewis.herokuapp.com/" target="_blank" rel="noreferrer"><img src="https://user-images.githubusercontent.com/51219653/82973458-0cb39900-9f9d-11ea-8f60-a24c37fad956.png" alt="Markdown Live" width="350"></a>
  <br>
  Markdown Live
  <br>
</h1>

<h4 align="center">A markdown editor with live preview and interactions with other users.</h4>

<p align="center">
  <img src="https://user-images.githubusercontent.com/51219653/83337498-77a4ee80-a281-11ea-8055-94a32f9d8ce6.gif">
</p>

## Description

Markdown live was made using [react](https://github.com/facebook/react#react-----), [redux](https://github.com/reduxjs/redux#) and [material ui](https://github.com/mui-org/material-ui#material-ui) amongst other libraries on the frontend and [express](https://github.com/expressjs/express) with [socket.io](https://github.com/socketio/socket.io#socketio) on the backend.

### Features

- Translations supported with [i18next](https://github.com/i18next/i18next#i18next-learn-once---translate-everywhere-) and [react-i18next](https://github.com/i18next/react-i18next#react-i18next-)
- Dark / light theming
- Markdown renderization with [react-markdown](https://github.com/rexxars/react-markdown#react-markdown)
- Live preview and user chat interaction with [socket.io](https://github.com/socketio/socket.io#socketio)

## Execute locally

```bash
# Clone this repository
$ git clone https://github.com/alewis729/mdlive

# Go into the repository
$ cd mdlive

# Install dependencies
$ npm install
```

Create a `.env` file with the contents of `example.env`. Then, run the app locally.

```bash
# Run the app
$ npm run dev
```

## Known issues

There are some known issues that, for the time being, are listed [here](https://github.com/alewis729/mdlive/issues/1) along with some other improvements.
