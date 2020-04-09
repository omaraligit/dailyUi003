import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ProgressCircle from 'react-native-progress-circle';
import Task from './components/Task';
const PROGW = 200;
export default class Details extends React.Component {
  tasks = [
    {
      type: 'BREAKFAST',
      title: 'Green Saled',
      subtitle: '234/555',
      color: '#7367CE',
      bgcolor: '#F0EFFA',
    },
    {
      type: 'BREAKFAST',
      title: 'Salamonella',
      subtitle: '345/400',
      color: '#5773B7',
      bgcolor: '#EDF0F7',
    },
    {
      type: 'BREAKFAST',
      title: 'Honey Roasted Cashews',
      subtitle: '56/65',
      bgcolor: '#EFEFEF',
      color: '#696963',
    },
    {
      type: 'BREAKFAST',
      title: 'Add Dinner',
      subtitle: '699/900',
      color: '#79D8AC',
      bgcolor: '#EDFAF4',
    },
  ];
  render() {
    return (
      <ScrollView style={{flex: 1, display: 'flex', backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <View style={styles.containerHeaderDrop}>
              <View style={styles.containerHeaderText}>
                <Text style={styles.containerHeaderTxt}>Today</Text>
                <Icon name="chevron-down" size={14} style={{marginLeft: 12}} />
              </View>
              <Text style={styles.containerHeaderSubTex}>Nov 26, 2019</Text>
            </View>
            <View style={styles.containerHeaderIcon}>
              <Icon name="user" size={20} />
            </View>
          </View>
          <View style={styles.progresContainer}>
            <ProgressCircle
              percent={30}
              radius={PROGW / 2}
              borderWidth={2}
              color="#867CD4"
              shadowColor="#E8E8E8"
              containerStyle={{width: PROGW - 4, height: PROGW - 4}}
              outerCircleStyle={{width: PROGW, height: PROGW}}
              bgColor="#fff">
              <View style={{alignItems: 'center'}}>
                <Text style={styles.progresstext}>{'243'}</Text>
                <View style={styles.lefttext}>
                  <Icon
                    name="fire"
                    size={12}
                    style={{marginRight: 5, color: 'gray', opacity: 0.7}}
                  />
                  <Text style={{fontSize: 14, color: 'gray', opacity: 0.7}}>
                    {'LEFT'}
                  </Text>
                </View>
              </View>
            </ProgressCircle>
          </View>
          <View style={[styles.containerHeader, {marginHorizontal: 30}]}>
            <View style={{alignItems: 'center'}}>
              <Text style={[styles.progresstext, {fontSize: 28}]}>
                {'+1,379'}
              </Text>
              <View style={styles.lefttext}>
                <Icon
                  name="fire"
                  size={12}
                  style={{marginRight: 5, color: 'gray', opacity: 0.7}}
                />
                <Text style={{fontSize: 14, color: 'gray', opacity: 0.7}}>
                  {'TAKEN'}
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={[styles.progresstext, {fontSize: 28}]}>
                {'-970'}
              </Text>
              <View style={styles.lefttext}>
                <Icon
                  name="fire"
                  size={12}
                  style={{marginRight: 5, color: 'gray', opacity: 0.7}}
                />
                <Text style={{fontSize: 14, color: 'gray', opacity: 0.7}}>
                  {'BURNED'}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.containerHeader,{marginBottom:20}]}>
            <Text style={{fontSize: 20, color: 'gray', opacity: 0.7}}>
              {"Today's Activity"}
            </Text>
            <TouchableOpacity >
            <Ionicon name="ios-add-circle-outline" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        {this.tasks.map((item,i) => (
          <Task key={i} {...item} />
        ))}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  containerHeader: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerHeaderDrop: {},
  containerHeaderText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerHeaderTxt: {fontSize: 26, fontWeight: 'bold'},
  containerHeaderSubTex: {color: 'gray', opacity: 0.7, letterSpacing: 1},
  containerHeaderIcon: {},
  progresContainer: {alignItems: 'center', marginVertical: 50},
  progresstext: {fontSize: 38, marginBottom: 4, fontWeight: 'bold'},
  lefttext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
