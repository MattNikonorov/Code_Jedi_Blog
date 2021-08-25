import Link from 'next/link'
import Image from 'next/image'
import Pic1 from './/blog2a1.png'
import Pic2 from './/fakenews.png'
export default function code1() {
  return (
    <div className="container"> 
        <h1>5 Github Projects Essential For Every Aspiring Javascript Developer</h1>
        <div className="sub"><b>Here is a researched and handpicked list of the top 5 github projects essential for aspiring javascript developers!</b></div>
        <hr align="center" width="80%" className="hr9"></hr>
        <div className="content2"><ol>
        <li>"Clean-code-javascript". Perhaps less essential for beginners, but definitely packed with great advice for javascript developers further along the line on how to make cleaner, more understandable and better structured code!
        <br></br>
        <a href="https://github.com/ryanmcdermott/clean-code-javascript">Clean-code-javascript</a>
        </li>
        <br></br>
        <hr align="center" width="60%" className="hr8"></hr>
        <li>"Javascript-testing-best-practices" is a github project packed with great advice on javascript testing for frontend, backend and more!
        <br></br>
        <a href="https://github.com/goldbergyoni/javascript-testing-best-practices">Javascript-testing-best-practices</a>
        </li>
        <br></br>
        <hr align="center" width="60%" className="hr8"></hr>
        <li>"33-js-concepts" is a great github project for beginners that tries to introduce you to 33 concepts every javascript developer should know.
        <br></br>
        <a href="https://github.com/leonardomso/33-js-concepts">33-js-concepts</a>
        </li>
        <br></br>
        <hr align="center" width="60%" className="hr8"></hr>
        <li>"JavaScript-Style-Guide" is a comprehensive javascript guide perfect for beginners with over 100k stars on github!
        <br></br>
        <a href="https://github.com/airbnb/javascript">JavaScript-Style-Guide</a>
        </li>
        <br></br>
        <hr align="center" width="60%" className="hr8"></hr>
        <li>"javascript-algorithms" is a github project with 110k+ stars that puts a lot of effort into explaining and implementing algorithms and data structures in javascript, as well as add explanations and links to further readings.
        <br></br>
        <a href="https://github.com/trekhleb/javascript-algorithms">javascript-algorithms</a>
        </li>
        <br></br>
        <hr align="center" width="60%" className="hr8"></hr>
        </ol>
        </div>
        <hr align="center" width="60%" className="hr8"></hr>
        <hr align="center" width="80%" className="hr8"></hr>
      <h3 className="foot">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h3>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        i{
          font-size: 20px;
        }
        li{
          font-size: 25px;
        }
        .i1{
          margin-top: 2%;
          width: 60%;
          height: auto;
        }
        a{
          color: lightseagreen;
          font-size: 35px;
        }
        code {
          margin-top: 2%;
          background: #82caaf;
          border-radius: 5px;
          opacity: 0.8;
          width: 60%;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        icode {
          margin-top: 2%;
          background: #82caaf;
          border-radius: 5px;
          opacity: 0.8;
          padding: 0.2rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .hr9{
          margin-top: 16%;
        }
        .hr8{
          margin-top: 2%;
        }
        .content{
          margin-top: 10%;
          width: 60%;
          font-size: 24px;
        }
        .content2{
          margin-top: 2%;
          width: 60%;
          font-size: 24px;
        }
        .sub{
          position: absolute;
          top: 23%;
          font-size: 22px;
          color: #82caaf; 
        }
        h1{
          position: absolute;
          top: 6%;
          font-size: 37px;
        }
        .foot{
          position: sticky;
          top: 90%;
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