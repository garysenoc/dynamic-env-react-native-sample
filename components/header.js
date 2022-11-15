import {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import RNConfigReader from 'rn-config-reader';
import LinearGradient from 'react-native-linear-gradient';

// import customData from '../assets/sample.json';

// import Icon from 'react-native-vector-icons/dist/FontAwesome';
export function Header({}) {
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

  useEffect(() => {
    setLoading(true);
    goForFetch();
    // console.log(customData);
    // console.log(users);
  }, []);
  return (
    <>
      <View style={{height: 60, marginTop: 10}}>
        <LinearGradient
          colors={['rgb(13,34,53)', 'rgb(33,66,96)', 'rgb(65,118,172)']}
          style={styles.linearGradient}>
          <Image
            source={{uri: customData?.headerImage}}
            style={{
              height: '110%',
              width: '100%',
            }}
            resizeMode="contain"
          />
        </LinearGradient>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            justifyContent: 'center',
            width: 150,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 15,
              alignContent: 'center',
            }}>
            {customData?.headerDescription1.firstText}
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
            {customData?.headerDescription1.secondText}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 2,
          }}>
          <View style={{alignSelf: 'center'}}>
            <LinearGradient
              colors={[
                'rgb(160,163,165)',
                'rgb(217,218,219)',
                'rgb(6253,254,254)',
              ]}
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                height: 30,
                borderRadius: 12,
                alignItems: 'center',

                justifyContent: 'center',
                // borderBottomWidth: 0.2,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                {customData?.headerButton.text}
              </Text>
            </LinearGradient>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,

    height: 20,
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
