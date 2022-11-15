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

import customData from '../assets/sample.json';

import {PrizesSection} from '../components/prizesSection';
import {Footer} from '../components/footer';
import RNConfigReader from 'rn-config-reader';
export function PrizeScreen({navigation}) {
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

        <PrizesSection />

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
              source={{uri: customData?.prizes.banner.imageBackground}}
              resizeMode="cover"
              style={{
                width: '100%',
                height: 150,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{width: '50%'}}>
                <Text
                  style={{
                    color: 'rgb(245,179,47)',
                    fontWeight: '900',
                    fontSize: 28,
                    textAlign: 'center',
                  }}>
                  {customData?.prizes.banner.text}
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                width: '100%',
                height: 150,
                backgroundColor:
                  customData?.prizes.banner.subBanner.backgroundColor,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: customData?.prizes.banner.subBanner.text1.color,
                  marginTop: '4%',
                }}>
                {customData?.prizes.banner.subBanner.text1.text}
              </Text>
              <Text
                style={{
                  color: customData?.prizes.banner.subBanner.text2.color,
                  fontWeight: '900',
                  fontSize: 20,
                  textAlign: 'center',
                  marginTop: '2%',
                }}>
                {customData?.prizes.banner.subBanner.text2.text}
              </Text>
              <View style={{width: '90%'}}>
                <Text
                  style={{
                    color: customData?.prizes.banner.subBanner.text3.color,
                    textAlign: 'center',
                    marginTop: '1%',
                  }}>
                  {customData?.prizes.banner.subBanner.text3.text}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* <Level /> */}
        {customData?.prizes.level.map(level => (
          <Level
            levelNum={level.levelNum}
            levelTitle={level.levelTitle}
            levelDraw={level.levelDraw}
          />
        ))}

        <View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  color: customData?.prizes.voucher.color,
                  fontStyle: 'italic',
                }}>
                {customData?.prizes.voucher.text}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginTop: 15,
              marginLeft: '5%',
            }}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: 'rgb(87,137,196)',
                fontStyle: 'italic',
              }}>
              Read the rules
            </Text>
            <Text style={{color: 'black', fontStyle: 'italic'}}>
              {' '}
              for full details.
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
