import {useState, useEffect} from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Menu} from '../components/menu';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../components/header';
import {Level} from '../components/level';
import RNConfigReader from 'rn-config-reader';

import customData from '../assets/sample.json';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
export function Prizes2Banner({onPress}) {
  const [customData, setCustomData] = useState();
  // const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [fromFetch, setFromFetch] = useState(false);
  const goForFetch = async () => {
    setFromFetch(true);
    setLoading(true);
    await fetch(RNConfigReader.TEST_CONFIG_FIELD)
      .then(response => response.json())
      .then(responseJson => {
        console.log('getting data from fetch', responseJson);
        setTimeout(() => {
          setLoading(false);
          setCustomData(responseJson);
        }, 2000);
      })
      .catch(error => console.log(error));
  };
  // const getUsers = async () => {
  //   await fetch(
  //     'https://raw.githubusercontent.com/garysenoc/simple-dynamic-config-react-native/master/sample1.json',
  //   )
  //     .then(response => {
  //       response.json();
  //     })
  //     .then(json => setCustomData(json))
  //     .catch(error => console.error(error))
  //     .finally(() => setLoading(false));

  //   console.log(customData);
  // };
  useEffect(() => {
    setLoading(true);
    goForFetch();
    // console.log(customData);
    // console.log(users);
  }, []);
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          marginTop: 40,
        }}>
        <View
          style={{
            width: '90%',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <ImageBackground
            source={{uri: customData?.prizes1.banner1.image1}}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: '80%', alignItems: 'center'}}>
              <Text
                style={{
                  color: customData?.prizes1.banner1.textColor,
                  fontWeight: '900',
                  fontSize: 40,
                  // textAlign: 'center',
                }}>
                {customData?.prizes1.banner1.text1}
              </Text>
            </View>
          </ImageBackground>
          <View
            style={{
              width: '100%',
              minHeight: 130,
              backgroundColor: customData?.prizes1.banner2.backgroundColor,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                marginTop: '4%',
                fontSize: 26,
                fontWeight: '900',
              }}>
              {customData?.prizes1.banner2.text1}
            </Text>

            <View style={{width: '80%'}}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 20,
                  marginTop: '1%',
                }}>
                {customData?.prizes1.banner2.text2}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
