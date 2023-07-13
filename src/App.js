import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import './App.css';


const alanKey='d2f622e21d96f096a8b9964ac97f40362e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setactiveArticle] = useState(0);
  useEffect(()=>{
    alanBtn({
      key : alanKey,
      onCommand: ({command, articles}) => {
        if(command==='newHeadlines'){
          setNewsArticles(articles);
        } else if(command==='highlight'){
          setactiveArticle(prevActiveArticle => prevActiveArticle+1);
        }
      }
    });
  },[])
  return (
    <div className="App">
     <div className='logoContainer'>
      <img src='https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg' className='alanLogo' alt='alan logo'/>
     </div>
      <NewsCards articles ={newsArticles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;
