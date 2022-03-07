import React, {useEffect} from 'react'
import results from '../data/results'
import "../style/results.scss"
import { FacebookShareButton, TwitterShareButton } from "react-share";
import mixpanel from 'mixpanel-browser';


function Results({ answersResult }) {
  const max = Math.max(...answersResult);
  const mostAnswered = answersResult.indexOf(max);
  const result = results[mostAnswered]

  //log the result
  useEffect(() => { 
    mixpanel.track('Get Result', {
      result: result.text,
      answers: answersResult
    });
  }, [])

  const trackShare = (platform) => { 
    mixpanel.track('Shared', {
      platform: platform
    });
  }

  const trackReport = (platform) => { 
    mixpanel.track('Shared', {
      platform: platform
    });
  }

  return (
    <div className="Results">
      <div className="result-wrap">
      <div className="result-content">
        <h4>You are most aligned with</h4>
        <h2>{result.text}</h2>
        <h3>Along with { result.percent }% of the public</h3>
          <div className="intro" dangerouslySetInnerHTML={{ __html: result.content }}></div>
          <a className="button"
            target="_blank"
            rel="noreferrer"
            onClick={trackReport}
            href="https://knightfoundation.org/"
          >
            Read the Report
          </a>
      </div>

        <div className="result-social">
          <h3>Share your results</h3>
          <FacebookShareButton
            url="https://develop.knightfoundation.org/interactive-quiz-test/"
            beforeOnClick={() => trackShare('facebook')}
            quote={result.share}
            >
          <div className="button">Facebook</div>
        </FacebookShareButton>
          <TwitterShareButton
            url="https://develop.knightfoundation.org/interactive-quiz-test/"
            title={result.share}
            beforeOnClick={() => trackShare('facebook')}
          >
        <div className="button">Twitter</div>
        </TwitterShareButton>
      </div>
      </div>
    </div>
  );
}

export default Results;