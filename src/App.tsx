import React, { FC, useState } from 'react';

import './App.css';

const App: FC = () => {
  const [noCount, setNoCount] = useState(0);
  const [isYesPressed, setIsYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const getNoButtonText = () => {
    const phrases = [
      'No',
      'Are you sure?',
      'Really sure?',
      'Think again!',
      'Last chance!',
      'Surely not?',
      'You might regret this!',
      'Give it another thought!',
      'Are you absolutely certain?',
      'This could be a mistake!',
      'Have a heart!',
      "Don't be so cold!",
      'Change of heart?',
      "Wouldn't you reconsider?",
      'Is that your final answer?',
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className='container'>
      {isYesPressed ? (
        <>
          <img src='https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif' />
          <h2>Meow</h2>
        </>
      ) : (
        <>
          <div>
            <img src='https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif' />
            <h1 className='title'>Will you be my valentine, babe?</h1>
          </div>
          <div className='container-button'>
            <button
              className='button yes-button'
              style={{ fontSize: yesButtonSize }}
              onClick={() => setIsYesPressed(true)}>
              Yes
            </button>
            <button
              className='button no-button'
              onClick={() => setNoCount((prevState) => prevState + 1)}>
              {noCount === 0 ? 'No' : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
