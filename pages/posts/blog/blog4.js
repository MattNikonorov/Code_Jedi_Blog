import Link from 'next/link'
import Image from 'next/image'
import Pic1 from './/tsla6.png'
import Pic2 from './/tsla7.png'
import Pic3 from './/tsla8.png'
import Pic4 from './/tsla9.png'
export default function code1() {
  return (
    <div className="container"> 
        <h1>Scrape the latest stock prices with node.js and puppeteer!</h1>
        <div className="sub"><b>Hey, fellow devs 👋</b>
        If you're looking into web-scraping with javascript, then I've got a great, simple project to start you off, because in this tutorial, I will be showing you guys how to scrape the latest Tesla stock prices using Node.js and puppeteer.</div>
        <hr align="center" width="80%" className="hr9"></hr>
        <div className="content2"><b>Let's get started</b>
        </div>
        <div className="content2">
        First of all, you will need to install puppeteer using <icode>npm i puppeteer</icode>. 
        <br></br>
        Now if you don't have npm, package.json and node_modules setup, here's a great tutorial on how to do so: <a href="https://www.sitepoint.com/npm-guide/">NPM install guide</a>.
        <br></br>
        <br></br>
        After you've installed puppeteer, create a new javascript file and require puppeteer on the first line:
        </div>
        <code>
        const puppeteer = require('puppeteer');
        </code>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2">
        Then create the async function in which we are going to write our main code:
        </div>
        <code>
        <div className="cont">
        const puppeteer = require('puppeteer');
        <br></br>
        async function start() &#123;
        <br></br>
        <br></br>
        &#125;
        <br></br>
        start();
        </div>
        </code>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2">
        <b>Now we're ready to start scraping.</b>
        <br></br>
        <br></br>
        First of all, you need to initiate a new browser instance, as well as define the url which your web-scraper is going to be visiting:
        </div>
        <code>
        <div className="cont">
        const puppeteer = require('puppeteer');
        <br></br>
        async function start() &#123;
        <br></br>
        &#160;&#160;const url = 'https://finance.yahoo.com/quote/TSLA?p=TSLA&.tsrc=fin-srch';
        <br></br>
        &#160;&#160;const browser = await puppeteer.launch(&#123;
        <br></br>
        &#160;&#160;&#160;&#160;headless: false
        <br></br>
        &#160;&#160;&#125;);
        <br></br>
        &#125;
        </div>
        </code>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2">
        Next, you need to call the <icode>newPage()</icode> function to open a new page in the browser, 
        and go to the url that we defined using the <icode>goto()</icode> function:
        </div>
        <code>
        <div className="cont">
        const puppeteer = require('puppeteer');
        <br></br>
        async function start() &#123;
        <br></br>
        &#160;&#160;const url = 'https://finance.yahoo.com/quote/TSLA?p=TSLA&.tsrc=fin-srch';
        <br></br>
        &#160;&#160;const browser = await puppeteer.launch(&#123;
        <br></br>
        &#160;&#160;&#160;&#160;headless: false
        <br></br>
        &#160;&#160;&#125;);
        <br></br>
        &#160;&#160;const page = await browser.newPage();
        <br></br>
        &#160;&#160;await page.goto(url);
        <br></br>
        &#125;
        </div>
        </code>
        <div className="content2">
        For this next step, you will have to go to <a href="https://finance.yahoo.com/quote/TSLA?p=TSLA&.tsrc=fin-srch">Tesla stock price</a>, 
        right click on the current stock price and click on inspect:
        </div>
        <div className="i1"><Image src={Pic1}/></div>
        <div className="content2">A pop-up will appear on the right of your window, you will need to find the stock price element:</div>
        <div className="i1"><Image src={Pic2} /></div>
        <div className="content2">
        Next, you will need to right click on the stock price element and click on "copy full Xpath".
This will give us a way of accessing the stock price element:
        </div>
        <div className="i1"><Image src={Pic3} /></div>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2">Once we have the Xpath of the stock price element, we can add these 3 lines of code into our function:</div>
        <code>
        <div className="cont">
          var element = await page.waitForXPath("put the stock price Xpath here")
          <br></br>
          var price = await page.evaluate(element => element.textContent, element);
          <br></br>
          console.log(price);
        </div>
        </code>
        <div className="content2"><i>
        The <icode>page.waitForXPath()</icode> function will locate the stock price element.
        <br></br>
        Next, the <icode>page.evaluate</icode> function will get the text contents of the stock price element which would then be printed by the <icode>console.log()</icode> function.
        </i></div>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2"><b>
        At this point, our code would look something like this:
        </b></div>
        <code>
        <div className="cont">
        const puppeteer = require('puppeteer');
        <br></br>
        async function start() &#123;
        <br></br>
        &#160;&#160;const url = 'https://finance.yahoo.com/quote/TSLA?p=TSLA&.tsrc=fin-srch';
        <br></br>
        &#160;&#160;const browser = await puppeteer.launch(&#123;
        <br></br>
        &#160;&#160;&#160;&#160;headless: false
        <br></br>
        &#160;&#160;&#125;);
        <br></br>
        &#160;&#160;const page = await browser.newPage();
        <br></br>
        &#160;&#160;await page.goto(url);
        <br></br>
        &#160;&#160;var element = await page.waitForXPath("put the stock price Xpath here")
        <br></br>
        &#160;&#160;var price = await page.evaluate(element => element.textContent, element);
        <br></br>
        &#160;&#160;console.log(price);
        <br></br>
        &#125;
        </div>
        </code>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2">If you were to execute your current code, you will find that when going to the url that you defined earlier, a pop-up will appear:</div>
        <div className="i1"><Image src={Pic4} /></div>
        <div className="content2">
        To get around this, plug these 2 lines of code into your function before defining the "element" variable:
        </div>
        <code>
        <div className="cont">
        var&#160;accept&#160;=&#160;("#consent-page&#160;>&#160;div&#160;>&#160;div&#160;>&#160;div&#160;>&#160;form&#160;>&#160;div.wizard-body&#160;>&#160;div.actions.couple&#160;>&#160;button");
        <br></br>
        await&#160;page.click(accept)
        </div>
        </code>
        <div className="content2">
        This will locate the "Accept All" button and click it to make the popup go away.
        <br></br>
        <br></br>
        <b>Now you will have a working function which goes to your defined url, scrapes the latest Tesla stock price and prints it in your terminal.</b>
        </div>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2">To go one step further, you can put these lines of code in a for loop:</div>
        <code>
        <div className="cont">
        for(var k = 1; k &#60; 2000; k++)&#123;
        <br></br>
        &#160;&#160;var&#160;element&#160;=&#160;await&#160;page.waitForXPath("/html/body/div[1]/div/div/div[1]/div/div[2]/div/div/div[5]/div/div/div/div[3]/div[1]/div[1]/span[1]")
        <br></br>
        &#160;&#160;var&#160;price&#160;=&#160;await&#160;page.evaluate(element&#160;=>&#160;element.textContent,&#160;element);
        <br></br>
        &#160;&#160;console.log(price);
        <br></br>
        &#160;&#160;await&#160;page.waitForTimeout(1000);
        <br></br>
        &#125;
        </div>
        </code>
        <div className="content2"><i>
        The <icode>page.waitForTimeout(1000)</icode> function will wait 1000 milliseconds(1 second) before repeating the for loop.
        <br></br>
        And finally add a <icode>browser.close()</icode> function after the for loop to close the browser and finish your code execution:
        </i></div>
        <code>
        <div className="cont">
        const puppeteer = require('puppeteer');
        <br></br>
        async function start() &#123;
        <br></br>
        &#160;&#160;const url = 'https://finance.yahoo.com/quote/TSLA?p=TSLA&.tsrc=fin-srch';
        <br></br>
        &#160;&#160;const browser = await puppeteer.launch(&#123;
        <br></br>
        &#160;&#160;&#160;&#160;headless: false
        <br></br>
        &#160;&#160;&#125;);  
        <br></br>
        &#160;&#160;const page = await browser.newPage();
        <br></br>
        &#160;&#160;await page.goto(url);
        <br></br>
        &#160;&#160;var accept = ("#consent-page > div > div > div > form > div.wizard-body > div.actions.couple > button");
        <br></br>
        &#160;&#160;await page.click(accept);
        <br></br>
        &#160;&#160;for(var k = 1; k &#60; 2000; k++)&#123;
        <br></br>
        &#160;&#160;var element = await page.waitForXPath("/html/body/div[1]/div/div/div[1]/div/div[2]/div/div/div[5]/div/div/div/div[3]/div[1]/div[1]/span[1]");
        <br></br>
        &#160;&#160;var price = await page.evaluate(element => element.textContent, element);
        <br></br>
        &#160;&#160;console.log(price);
        <br></br>
        &#160;&#160;await page.waitForTimeout(1000);
        <br></br>
        &#160;&#160;&#125;
        <br></br>
        &#160;&#160;browser.close();
        <br></br>
        &#125;
        <br></br>
        start();

        </div>
        </code>
        <div className="content2">
        <h3>That's it for this web-scraping tutorial!</h3>
        <br></br>
        <br></br>
        Byeeeeeee 👋
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
          font-size: 24px;
        }
        code {
          margin-top: 2%;
          background: #82caaf;
          border-radius: 5px;
          opacity: 0.8;
          overflow-x: scroll;
          width: 60%;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .cont{
          overflow-x: scroll;
          width: 420%;
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
          margin-top: 20.5%;
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
          width: 70%;
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