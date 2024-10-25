import { Links, Meta } from '@remix-run/react';
import './app.css';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <button className="block">This is a button!!</button>
        <button className="block round accent">This is a button!!</button>
        <div className="block fixed">
          <h2>This is a card yaayy!!</h2>
        </div>
      </body>
    </html>
  );
}
