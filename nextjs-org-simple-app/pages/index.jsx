// initial HTML file, which will be turned into a jsx/js file
{/* <html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/jsx">
      const app = document.getElementById("app")

      function Header({ title }) {
        return <h1>{title ? title : "Default title"}</h1>
      }

      function HomePage() {
        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton", "Tony Kieling"]

        const [likes, setLikes] = React.useState(0)

        function handleClick() {
          setLikes(likes + 1)
        }

        return (
          <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
          </div>
        )
      }

      ReactDOM.render(<HomePage />, app)
    </script>
  </body>
</html> */}
 

import { useState } from 'react';

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage(){
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton', "Tony Kieling"];

    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes(likes + 1);
    }

    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div>
                <Header title="Develop. Preview. Ship. 🚀" />
                <ul>
                    {names.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>

                <button onClick={handleClick}>Like ({likes})</button>
            </div>
        </>
    );
}