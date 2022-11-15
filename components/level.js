import {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import customData from '../assets/sample.json';
import RNConfigReader from 'rn-config-reader';

// import Icon from 'react-native-vector-icons/dist/FontAwesome';
export function Level({levelNum, levelTitle, levelDraw}) {
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
      <View style={{marginTop: 20}}>
        <View style={{alignItems: 'center', width: '100%'}}>
          <View
            style={{
              width: '90%',
              height: 60,

              backgroundColor: customData?.prizes.levelColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Level {levelNum}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              width: '40%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '900',
                fontSize: 14,
                textAlign: 'center',
              }}>
              {levelTitle}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '900',
                fontSize: 12,
                textAlign: 'center',
              }}>
              {levelDraw}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
