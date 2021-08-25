import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1 className="title">
          The <b>Code_Jedi</b> Blog
        </h1>
        <p className="description">
          Exploring the universe of development and tech
        </p>
        <hr align="center" width="100%" className="hr9"></hr>
        <div className="grid">
        <div className="c1">
          <h2 align="center">Python</h2>
          <div className="card">
            <Link href="/posts/blog/blog1">
              <h3>Detect fake news headlines with python</h3>
            </Link>
            <p>Let's build a simple python script that will detect fake news headlines as well as real ones!</p>
          </div>

          <div className="card">
            <Link href="/posts/blog/blog2">
              <h3>Scrape news headlines with python in 10 lines of code!</h3>
            </Link>
            <p>Today I'll show you a way to scrape news headlines in python in under 10 lines of code!</p>
          </div>
          <div className="card">
            <Link href="/posts/blog/blog5">
              <h3>Create a wordcloud of news headlines in python!</h3>
            </Link>
            <p>Today, I'll be showing you a simple way to make a wordcloud of news headlines in python!</p>
          </div>
          <hr align="center" width="50%"></hr>
        </div>
          <div className="c2">
            <h2 align="center">Javascript/Node.js</h2>
            <div className="card">
              <Link href="/posts/blog/blog3">
                <h3>5 Github Projects Essential For Every Aspiring Javascript Developer</h3>
              </Link>
              <p>Here is a researched and handpicked list of the top 5 github projects essential for aspiring javascript developers!</p>
            </div>

            <div className="card">
              <Link href="/posts/blog/blog4">
                <h3>Scrape the latest stock prices with node.js and puppeteer!</h3>
              </Link>
              <p>If you're looking into web-scraping with javascript, then I've got a great, simple project to start you off, because in this tutorial, I will be showing you guys how to scrape the latest Tesla stock prices using Node.js and puppeteer.</p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .hr9{
          margin-top: 11%;
        }

        .c1{
          margin-top: 7%;
          align: center;
        }

        .c2{
          margin-top: 5%;
          align: center;
        }

        .break{
          width: 50%;
          height: 5%;
          background: cyan;
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

        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        .title b{
          color: #82caaf;
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
          position: absolute;
          top: 5%;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          position: absolute;
          top: 13%;
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
          margin-top: 4%;
        }

        .card {
          margin: 1rem;
          flex-basis: 95%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          max-width: 800px;
          text-decoration: none;
          border: 1px solid #82caaf;
          border-radius: 8px;
          transition: color 0.15s ease, border-color 0.15s ease;
          cursor: pointer;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: mediumseagreen;
          border-color: mediumseagreen;
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
  )
}