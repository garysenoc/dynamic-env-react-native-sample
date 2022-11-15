import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Menu} from '../components/menu';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../components/header';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
export function Games({title, logo}) {
  return (
    <>
      <View style={{flexDirection: 'row', marginTop: 12}}>
        <View style={{width: 100}}>
          <LinearGradient
            style={{
              height: 52,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderWidth: 1,
              borderRightWidth: 0,
            }}
            colors={['rgb(32,66,99)', 'rgb(59,111,157)', 'rgb(146,176,199)']}>
            <View
              style={{
                width: '80%',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 17,
                  color: 'white',
                  marginTop: 1,
                  textAlign: 'center',
                }}>
                {title}
              </Text>
            </View>
          </LinearGradient>
        </View>
        <View style={{width: 50}}>
          <LinearGradient
            style={{
              height: 52,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              borderWidth: 2,
              borderLeftWidth: 0,
            }}
            colors={[
              'rgb(155,158,160)',
              'rgb(188,190,191)',
              'rgb(248,248,248)',
            ]}>
            <View
              style={{
                width: '70%',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            />
            <Image
              source={{
                uri: logo,
              }}
              style={{
                height: '110%',
                width: '100%',
                // marginTop: '4%',
              }}
              resizeMode="contain"
            />
          </LinearGradient>
        </View>
      </View>
    </>
  );
}
