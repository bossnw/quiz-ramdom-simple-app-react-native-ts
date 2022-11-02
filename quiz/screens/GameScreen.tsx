import React, {FC, useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import arrayShuffle from 'array-shuffle';

import QuestionBox from './game-screen-components/QuestionBox';
import AnswerBox from './game-screen-components/AnswerBox';
import ResultModal from './game-screen-components/ResultModal';

import {questions} from '../mockdata.json';
var tmp = questions;
tmp = arrayShuffle(tmp);
var questionss = tmp;

const GameScreen: FC = () => {
  var [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isShowResult, setShowResult] = useState(false);

  var question = questionss[currentQuestion];
  // currentQuestion = Math.floor(Math.random() * questions.length);

  const checkAnswer = useCallback(
    (userAnswer: string) => {
      if (question.correctAnswer === userAnswer) {
        setScore(score + 1);
      }

      if (currentQuestion === questions.length - 1) {
        setShowResult(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    },
    [currentQuestion, question, score],
  );

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.questionBox}>
        <QuestionBox questionContent={question.content} />
      </View>

      <View style={styles.answerBox}>
        <AnswerBox answers={question.answers} checkAnswer={checkAnswer} />
      </View>

      <ResultModal
        isVisible={isShowResult}
        score={score}
        numberQuestions={questions.length}
        restartGame={restartGame}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    backgroundColor: '#471a45',
  },
  header: {
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: '#262626',
    borderBottomWidth: 2,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingBottom: 0,
  },
  answerBox: {
    height: 230,
    padding: 5,
    paddingTop: 0,
  },
});

export default GameScreen;
