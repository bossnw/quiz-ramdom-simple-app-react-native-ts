import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface QuestionBoxProps {
  questionContent: string;
}

const QuestionBox: FC<QuestionBoxProps> = ({questionContent}) => {
  return (
    <View style={styles.questionContent}>
      <Text style={styles.questionText}>{questionContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 5,
  },
  questionText: {
    fontSize: 24,
    lineHeight: 38,
    color: '#000000',
    textAlign: 'center',
  },
});

export default QuestionBox;
