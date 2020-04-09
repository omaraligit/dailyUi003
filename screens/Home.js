import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const w = Dimensions.get('window').width;
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Your Goal?</Text>
          <Text style={styles.subText}>
            Don,t worry yoou can change this later?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.push('Details')}
            style={styles.normalBtn}>
            <Text style={styles.btnText}>BE FIT AND HEALTHY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.push('Details')}
            style={styles.normalBtn}>
            <Text style={styles.btnText}>LOSE SOME WEIGHT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.push('Details')}
            style={styles.normalBtn}>
            <Text style={styles.btnText}>GAIN SOME WEIGHT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
    marginBottom: 40,
    opacity: 0.7,
    letterSpacing: 1,
  },
  normalBtn: {
    width: (2 * w) / 3,
    padding: 20,
    paddingHorizontal: 40,
    marginVertical: 10,
    borderColor: '#F2F2F2',
    borderWidth: 1,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 3,
  },
});
