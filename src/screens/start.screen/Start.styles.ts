import { StyleSheet } from 'react-native';

export const startScreenStyleSheet = StyleSheet.create({
  container: {
    paddingVertical: 40,
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,2,167,0.68)',
    color: '#fdfdfd'
  },
  title: {
    fontWeight: '900',
    fontSize: 48,
    marginVertical: 16,
    color: '#fdfdfd'
  },
  description: {
    fontWeight: '500',
    fontSize: 20,
    color: '#fdfdfd'
  },
  playButton: {
    width: '100%',
    paddingVertical: 16,
    marginTop: 16,
    borderWidth: 4,
    borderColor: '#fdfdfd',
    borderRadius: 5,
  },
});
