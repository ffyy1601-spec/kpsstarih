import React, { useEffect, useMemo, useState } from 'react';
import LandingScreen from './components/LandingScreen';
import TopicSelectionScreen from './components/TopicSelectionScreen';
import QuizScreen from './components/QuizScreen';
import GameOverScreen from './components/GameOverScreen';
import { topicCatalog } from './data/topicCatalog.js';

function getTopicFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('topic');
}

function getTopicPath(topicId) {
  if (topicId === 'all') {
    return '/konular/';
  }

  const topic = topicCatalog.find((item) => item.id === topicId);
  return topic ? `/konular/${topic.slug}/` : '/konular/';
}

function setTopicInUrl(topicId) {
  const url = new URL(window.location.href);

  if (topicId) {
    url.searchParams.set('topic', topicId);
  } else {
    url.searchParams.delete('topic');
  }

  window.history.replaceState({}, '', url);
}

function App() {
  const initialTopicId = useMemo(() => getTopicFromUrl(), []);
  const validTopicIds = useMemo(() => new Set([...topicCatalog.map((item) => item.id), 'all']), []);
  const hasPresetTopic = initialTopicId && validTopicIds.has(initialTopicId);

  const [currentScreen, setCurrentScreen] = useState(hasPresetTopic ? 'quiz' : 'landing');
  const [selectedTopicId, setSelectedTopicId] = useState(hasPresetTopic ? initialTopicId : null);
  const [gameResult, setGameResult] = useState(null);

  useEffect(() => {
    if (selectedTopicId) {
      setTopicInUrl(selectedTopicId);
      return;
    }

    setTopicInUrl(null);
  }, [selectedTopicId]);

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
    setGameResult(null);
  };

  const handleGameOver = (resultData) => {
    setGameResult(resultData);
    setCurrentScreen('gameover');
  };

  const handleRestart = () => {
    setCurrentScreen('quiz');
  };

  const handleQuizBack = () => {
    if (hasPresetTopic) {
      window.location.href = getTopicPath(selectedTopicId);
      return;
    }

    setCurrentScreen('topics');
  };

  const handleHome = () => {
    if (hasPresetTopic) {
      window.location.href = getTopicPath(selectedTopicId);
      return;
    }

    goBackToLanding();
  };

  return (
    <>
      {currentScreen === 'landing' && <LandingScreen onStart={startGame} />}
      {currentScreen === 'topics' && (
        <TopicSelectionScreen onSelectTopic={selectTopic} onBack={goBackToLanding} />
      )}
      {currentScreen === 'quiz' && (
        <QuizScreen topicId={selectedTopicId} onBack={handleQuizBack} onGameOver={handleGameOver} />
      )}
      {currentScreen === 'gameover' && (
        <GameOverScreen result={gameResult} onRestart={handleRestart} onHome={handleHome} />
      )}
    </>
  );
}

export default App;
