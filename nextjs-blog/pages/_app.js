import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <h1>#2 _app file</h1>
        <Component {...pageProps} />
      </>
    )
  }