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
import RNConfigReader from 'rn-config-reader';
import customData from '../assets/sample.json';

// import Icon from 'react-native-vector-icons/dist/FontAwesome';
export function PrizesSection({onPress}) {
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
          marginTop: 15,
        }}>
        <Text
          style={{
            color: customData?.prizes?.title?.color,
            fontWeight: '900',
            fontSize: 20,
          }}>
          {customData?.prizes?.title?.text}
        </Text>
        <View style={{width: '80%', alignItems: 'center', marginTop: 5}}>
          <Text
            style={{
              textAlign: 'center',
              color: customData?.prizes?.subtitle?.color,
              fontSize: 13,
            }}>
            {customData?.prizes?.subtitle?.text}
          </Text>
        </View>

        <View style={{marginTop: 10}} />

        <View>
          <View style={{fliexDirectory: 'row'}}>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <LinearGradient
                colors={[
                  'rgb(160,163,165)',
                  'rgb(217,218,219)',
                  'rgb(6253,254,254)',
                ]}
                style={[styles.linearGradient, {marginRight: 40}]}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                  {customData?.prizes?.button1Text}
                </Text>
              </LinearGradient>
              <LinearGradient
                colors={[
                  'rgb(160,163,165)',
                  'rgb(217,218,219)',
                  'rgb(6253,254,254)',
                ]}
                style={styles.linearGradient}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                  {customData?.prizes?.button2Text}
                </Text>
              </LinearGradient>
            </View>
          </View>

          <View style={{alignSelf: 'center'}}>
            <LinearGradient
              colors={[
                'rgb(160,163,165)',
                'rgb(217,218,219)',
                'rgb(6253,254,254)',
              ]}
              style={[styles.linearGradient, {marginTop: 10}]}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                {customData?.prizes?.button3Text}
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </>
  );
}

var styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 30,
    borderRadius: 12,
    alignItems: 'center',

    justifyContent: 'center',
    // borderBottomWidth: 0.2,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
