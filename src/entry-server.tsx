import { renderToStringAsync, template } from 'solid-js/web'
import App from './App';

function Html() {
  // const s = document.createElement('script');
  const text = `if (window !== undefined) {
    if (window.location.pathname !== '/') {
      window.location.href = '/'
    }
  }`;
  return (
    <html lang="en">
      <head>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <title>Vlad Sirenko</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="https://avatars.githubusercontent.com/u/28163663" class="next-head" />
        <link rel='stylesheet' type='text/css' media='screen' href='./main.css' />
        <script textContent={text}></script>
      </head>
      <body>
        <header class="header">
          <img class="header-avarar" src="https://avatars.githubusercontent.com/u/28163663" alt="avatar" />
          <div class="header-about">
            <div class="header-text fullname">Vlad Sirenko</div>
            <div class="header-text">Software engineer</div>
          </div>
        </header>
        <main>
          <App/>
        </main>
      </body>
    </html>
  )
}

export function render() {
  return renderToStringAsync(Html)
}