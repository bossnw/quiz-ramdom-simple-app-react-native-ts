import React, {FC} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Modal} from 'react-native';

interface ResultModalProps {
  isVisible: boolean;
  restartGame: () => void;
  score: number;
  numberQuestions: number;
}

const ResultModal: FC<ResultModalProps> = ({
  isVisible,
  restartGame,
  score,
  numberQuestions,
}) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.dialog}>
          <Text style={styles.dialogText}>
            LEADERBOAD: {score}/{numberQuestions} POINTS{' '}
          </Text>

          <TouchableHighlight
            style={[styles.button, styles.buttonPrimary]}
            onPress={() => restartGame()}>
            <Text style={styles.buttonText}>Do it Again</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dialog: {
    height: '100%',
    padding: 15,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  dialogText: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    margin: 5,
    padding: 10,
  },
  buttonPrimary: {
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#000000',
  },
});

export default ResultModal;
