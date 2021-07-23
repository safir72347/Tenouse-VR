import { StyleSheet } from 'react-360';

const styles = StyleSheet.create({
  audioPanel: {
    flexDirection: 'row',
  },
  audioImage: {
    height: 50,
    width: 50
  },
  infoPanel: {
    width: 300,
    height: 200,
    opacity: 0.8,
    backgroundColor: 'rgb(102, 153, 255)',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 3,
    borderRadius: 20,
  },
  buttonPanel: {
    width: 300,
    height: 300,
    opacity: 0.8,
    backgroundColor: 'rgb(102, 153, 255)',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 3,
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  hover: {
    height: 60,
    width: 200,
    backgroundColor: '#0073B7',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 5
  },
  button: {
    height: 60,
    width: 200,
    backgroundColor: 'rgb(0,0,0)',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
  panelHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  infoText: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default styles;
