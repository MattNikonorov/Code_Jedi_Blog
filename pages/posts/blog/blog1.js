import Link from 'next/link'
import Image from 'next/image'
import Pic1 from '/fun-fun-begins.gif'
import Pic2 from './/fakenews.png'
import Pic3 from './/realnews.png'
export default function code1() {
  return (
    <div className="container"> 
      <h1>Detect fake news headlines with python</h1>
      <hr align="center" width="80%" className="hr9"></hr>
      <div className="content">First things first, import these libraries:</div>
      <code>import pandas as pd
        import numpy as np
        from sklearn.feature_extraction.text import CountVectorizer
        from sklearn.model_selection import train_test_split
        from sklearn.naive_bayes import MultinomialNB
      </code>
      <hr align="center" width="40%" className="hr8"></hr>
      <div className="content2">For this machine learning project, I'll be using this dataset for training our model to detect real or fake news headlines.</div>

      <hr align="center" width="40%" className="hr8"></hr>
      <div className="content2">Now to start working with the data, load in the dataset and define the x and y variables:</div>
      <code>
        data = pd.read_csv("news.csv")
        <br></br>
        x = np.array(data["title"])
        <br></br>
        y = np.array(data["label"])
            </code>
            <div className="content2"><i>x will be defined as the news headlines which we'd like our model to be trained and tested on
        <br></br>y will be the label( Fake or Real ) which we are going to predict</i></div>
        <hr align="center" width="40%" className="hr8"></hr>
        <div className="content2">Next, add these lines of code to your script:</div>
        <code>
        cv = CountVectorizer()
        <br></br>
        x = cv.fit_transform(x)
        </code>
        <div className="content2">
        <b>"WTH?" you might ask</b>
        <br></br>
        To put it simply:
        <ul>
        <li>
        The "CountVectorizer()" function counts the number of word occurrences in the headlines in order to find the difference between real and fake headlines. Without judging wether a news headline is real or fake by how plausible it sounds, you'd probably agree that the main difference between real and fake headlines is the tone and the choice of words, a model like this can't judge news headlines based on how plausible they sound since it has no judgement of what sounds plausible or not, that's why, it's best bet at detecting real or fake headlines is by analyzing their tone and word choices.
        "fit_transform()" then fits the x variable and transforms it from plain text into a list of word occurrences of all the words encountered from both real and fake headlines in order to differenciate them by their word choice, length and tone.
        </li>
        <br></br>
        <li>
        "fit_transform()" then fits the x variable and transforms it from plain text into a list of word occurrences of all the words encountered from both real and fake headlines in order to differenciate them by their word choice, length and tone.
        </li>
        </ul>
        </div>
        <hr align="center" width="40%" className="hr8"></hr>
        <div className="content2">To make, train and test our model, add these lines of code to your script:</div>
        <code>
        xtrain, xtest, ytrain, ytest = train_test_split(x, y, test_size=0.2, random_state=42)
        <br></br>
        model = MultinomialNB()
        <br></br>
        model.fit(xtrain, ytrain)
        </code>
        <div className="content2">
        <b>Let me explain...</b>
        <ul>
        <li>
        First of all, we split out dataset in train(80%) and test(20%) sets, and set the "random_state" to 42 to make sure we have the same train and test sets every time you run your script( the number 42 has no meaning, you can put any number )</li>
        <br></br>
        <li>
        Next, we define our model using "MultinomialNB()", which is used for classifying data based on word counts.
        </li>
        <br></br>
        <li>
        Finally, we fit our model with the "xtrain" and "ytrain" sets.
        </li>
        </ul>
        </div>
        <hr align="center" width="40%" className="hr8"></hr>
        <div className="content2">
        <b>Start detecting real or fake headlines!</b>
        </div>
        <div className="i1"><Image src={Pic1} className="i1" /></div>
        <hr align="center" width="40%" className="hr8"></hr>
        <div className="content2">
        Now to predict wether a news headline is real or not, add these lines of code to your script:
        </div>
        <code>
        news_headline = "Atlantis discovered under the Atlantic Ocean!"
        <br></br>
        data = cv.transform([news_headline]).toarray()
        <br></br>
        print(news_headline)
        <br></br>
        print(model.predict(data))
        </code>
        <hr align="center" width="40%" className="hr8"></hr>
        <div className="content2">Now if you run your script, you should see that it has predicted that this news headline is fake:</div>
        <div className="i1"><Image src={Pic2}/></div>
        <hr align="center" width="40%" className="hr8"></hr>
        <div className="content2">
        Now let's take a random news headline from bbc news and see if our model classifies it as real:
        </div>
        <code>
        news_headline = "Kathy Hochul: Who is New York's first female governor?"
        </code>
        <div className="i1"><Image src={Pic3}/></div>
        <div className="content2">
        <b>Now of course, this model is not perfect</b>
        <br></br>
        <br></br>
        News headlines change all the time, and even though the dataset which we are using to train our model is a whopping 30MB worth of plain text, it is only about 50% accurate.
        If you add <icode>print(model.score(xtest, ytest))</icode> to your script, you'll see that the accuracy score is ~80%, even though I've tested 40 news headlines from last week and got a 50% to 60% accuracy, that's because news headlines, news headline vocabulary and news headline topics change all the time.</div>
        <hr align="center" width="40%" className="hr8"></hr>
        <div className="content2"><b>Nevertheless, I hope that you found this project interesting, and I see you in the next blog post ;)</b></div>
        <hr align="center" width="40%" className="hr8"></hr>
        <hr align="center" width="80%" className="hr8"></hr>
      <h3 className="foot">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h3>
      <div className="sub"><b>Let's build a simple python script that will detect fake news headlines as well as real ones!</b></div>
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
          font-size: 20px;
        }
        .i1{
          margin-top: 2%;
          width: 60%;
          height: auto;
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