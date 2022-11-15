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
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Menu} from '../components/menu';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../components/header';
import {Games} from '../components/games';

import customData from '../assets/sample.json';
import {Footer} from '../components/footer';
import RNConfigReader from 'rn-config-reader';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
export function HomeScreen({navigation}) {
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
    <SafeAreaProvider style={{backgroundColor: 'white'}}>
      {/* <StatusBar backgroundColor="transparent" /> */}

      <Menu
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
      <ScrollView>
        <Header />

        <View
          style={{
            height: 1.2,
            backgroundColor: 'rgb(0,87,170)',
            width: '100%',
            marginTop: 20,
          }}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text
            style={{color: customData?.home.text1.color, fontWeight: '900'}}>
            {customData?.home.text1.text}
          </Text>
          <View style={{width: '55%', alignItems: 'center', marginTop: -5}}>
            <Text
              style={{
                textAlign: 'center',
                color: customData?.home.text2.color,
                fontWeight: '900',
              }}>
              {customData?.home.text2.text}
            </Text>
          </View>

          <View style={{marginTop: 10}} />
          {/*
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
                colors={[
                  'rgb(32,66,99)',
                  'rgb(59,111,157)',
                  'rgb(146,176,199)',
                ]}>
                <View
                  style={{
                    width: '70%',
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
                    JIGSAW PUZZLE
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
                    uri: 'https://firebasestorage.googleapis.com/v0/b/android-chat-ef593.appspot.com/o/jigsaw.png?alt=media&token=74317422-9f10-4e9a-8739-d963e46a5235',
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
          </View> */}

          {/* <Games /> */}

          {customData?.home.games.map(game => (
            <Games title={game.title} logo={game.logo} />
          ))}
        </View>

        <View style={{height: 500}}>
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: customData?.home.firstSection.image,
              }}
              style={{
                height: '75%',
                width: '75%',
                // marginTop: '4%',
              }}
              resizeMode="contain"
            />
            <View>
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 28,
                  color: customData?.home.firstSection.title.color,
                  marginTop: -10,
                }}>
                {customData?.home.firstSection.title.text}
              </Text>
            </View>
            <View style={{alignSelf: 'center', marginTop: 10}}>
              <LinearGradient
                colors={[
                  'rgb(160,163,165)',
                  'rgb(217,218,219)',
                  'rgb(6253,254,254)',
                ]}
                style={styles.linearGradient}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                  {customData?.home.firstSection.buttonText}
                </Text>
              </LinearGradient>
            </View>
          </View>
        </View>
        <View style={{height: 500, marginTop: -70}}>
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: customData?.home.secondSection.image,
              }}
              style={{
                height: '75%',
                width: '75%',
                // marginTop: '4%',
              }}
              resizeMode="contain"
            />
            <View>
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 28,
                  color: customData?.home.secondSection.title.color,
                  marginTop: -10,
                }}>
                {customData?.home.secondSection.title.text}
              </Text>
            </View>
            <View style={{alignSelf: 'center', marginTop: 10}}>
              <LinearGradient
                colors={[
                  'rgb(160,163,165)',
                  'rgb(217,218,219)',
                  'rgb(6253,254,254)',
                ]}
                style={styles.linearGradient}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                  {customData?.home.secondSection.buttonText}
                </Text>
              </LinearGradient>
            </View>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: -55,
          }}>
          <View
            style={{
              width: '77%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: customData?.home.quote.color,
                fontWeight: '900',
                textAlign: 'center',
                fontSize: 15,
              }}>
              {customData?.home.quote.text}
            </Text>

            <Text
              style={{
                color: customData?.home.quoteBy.color,
                fontStyle: 'italic',
              }}>
              - {customData?.home.quoteBy.text}
            </Text>
          </View>
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaProvider>
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
