import React, { useState } from 'react';
import LandingScreen from './components/LandingScreen';
import TopicSelectionScreen from './components/TopicSelectionScreen';
import QuizScreen from './components/QuizScreen';
import GameOverScreen from './components/GameOverScreen';

function App() {
  // Ekranlar: 'landing', 'topics', 'quiz', 'gameover'
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  
  // Oyun Sonu verileri
  const [gameResult, setGameResult] = useState(null);

  const startGame = () => {
    setCurrentScreen('topics');
  };

  const selectTopic = (topicId) => {
    setSelectedTopicId(topicId);
    setCurrentScreen('quiz');
  };

  const goBackToLanding = () => {
    setCurrentScreen('landing');
    setSelectedTopicId(null);
  };
  
  const handleGameOver = (resultData) => {
    setGameResult(resultData);
    setCurrentScreen('gameover');
  };

  const handleRestart = () => {
    setCurrentScreen('quiz');
  };

  return (
    <>
      {currentScreen === 'landing' && <LandingScreen onStart={startGame} />}
      {currentScreen === 'topics' && <TopicSelectionScreen onSelectTopic={selectTopic} onBack={goBackToLanding} />}
      {currentScreen === 'quiz' && <QuizScreen topicId={selectedTopicId} onBack={() => setCurrentScreen('topics')} onGameOver={handleGameOver} />}
      {currentScreen === 'gameover' && <GameOverScreen result={gameResult} onRestart={handleRestart} onHome={goBackToLanding} />}
    </>
  );
}

export default App;
