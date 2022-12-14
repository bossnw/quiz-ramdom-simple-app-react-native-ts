import React, {FC} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

const BUTTON_BG_COLOR = ['#000000', '#000000', '#000000', '#000000'];

interface Answer {
  key: string;
  content: string;
}

interface AnswerBoxProps {
  answers: Answer[];
  checkAnswer: (userAnswer: string) => void;
}

const AnswerBox: FC<AnswerBoxProps> = ({answers, checkAnswer}) => {
  let answerContent = [];

  for (let i = 0; i < answers.length; i++) {
    const key = answers[i].key;

    answerContent.push(
      <TouchableHighlight
        key={key}
        onPress={() => checkAnswer(key)}
        style={styles.answerButtonWrapper}>
        <View
          style={[styles.answerButton, {backgroundColor: BUTTON_BG_COLOR[i]}]}>
          <Text style={styles.answerText}>{answers[i].content}</Text>
        </View>
      </TouchableHighlight>,
    );
  }

  return <View>{answerContent}</View>;
};

const styles = StyleSheet.create({
  answerButtonWrapper: {
    height: 50,
    marginTop: 5,
  },
  answerButton: {
    height: '100%',
    justifyContent: 'center',
    borderColor: '#000000',
  },
  answerText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default AnswerBox;
