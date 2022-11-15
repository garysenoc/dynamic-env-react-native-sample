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
import {Table} from '../components/table';
import {Footer} from '../components/footer';
import {PrizesSection} from '../components/prizesSection';
import {Prizes2Banner} from '../components/prizes2Banner';

import customData from '../assets/sample.json';
import RNConfigReader from 'rn-config-reader';
export function Prize2Screen({navigation}) {
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
  // // const getUsers = async () => {
  // //   await fetch(
  // //     'https://raw.githubusercontent.com/garysenoc/simple-dynamic-config-react-native/master/sample1.json',
  // //   )
  // //     .then(response => {
  // //       response.json();
  // //     })
  // //     .then(json => setCustomData(json))
  // //     .catch(error => console.error(error))
  // //     .finally(() => setLoading(false));

  // //   console.log(customData);
  // // };
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

        <Prizes2Banner />

        <Table
          date={customData?.prizes1?.table1?.date}
          prizes={customData?.prizes1?.table1?.prizes}
        />

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
              source={{uri: customData?.prizes1?.banner3.image}}
              resizeMode="cover"
              style={{
                width: '100%',
                minHeight: 150,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{width: '60%', alignItems: 'center'}}>
                <Text
                  style={{
                    color: customData?.prizes1?.banner3.color,
                    fontWeight: '900',
                    fontSize: 35,
                    // textAlign: 'center',
                  }}>
                  {customData?.prizes1?.banner3.text}
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                width: '100%',
                minHeight: 130,
                backgroundColor: 'black',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '60%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: customData?.prizes1?.banner4.text1Color,
                    marginTop: '4%',
                    fontSize: 26,
                    fontWeight: '900',
                  }}>
                  {customData?.prizes1?.banner4.text1}
                </Text>
              </View>
              <View
                style={{
                  width: '75%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    color: customData?.prizes1?.banner4.text2Color,
                    textAlign: 'center',
                    fontSize: 18,
                    marginTop: '1%',
                    marginBottom: '2%',
                  }}>
                  {customData?.prizes1?.banner4.text2}
                </Text>
              </View>
              <View
                style={{
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: customData?.prizes1?.banner4.text3Color,
                    textAlign: 'center',
                    fontSize: 12,
                    marginTop: '1%',
                    marginBottom: '2%',
                  }}>
                  {customData?.prizes1?.banner4.text3}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {customData?.prizes1?.tableList.map(table => (
          <Table date={table?.date} prizes={table?.prizes} />
        ))}
        {/* <Table />
        <Table />
        <Table />
        <Table /> */}

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
            <View
              style={{
                width: '100%',
                minHeight: 130,
                backgroundColor: 'black',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '80%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: customData?.prizes1?.banner5.text1Color,
                    marginTop: '4%',
                    fontSize: 20,
                    fontWeight: '900',
                  }}>
                  {customData?.prizes1?.banner5.text1}
                </Text>
              </View>
              <View
                style={{
                  width: '80%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: customData?.prizes1?.banner5.text2Color,
                    textAlign: 'center',
                    fontSize: 14,
                    marginTop: '1%',
                    marginBottom: '2%',
                  }}>
                  {customData?.prizes1?.banner5.text2}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                minHeight: 130,
                backgroundColor: 'black',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '80%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: customData?.prizes1?.banner5.text3Color,
                    marginTop: '4%',
                    fontSize: 20,
                    fontWeight: '900',
                  }}>
                  {customData?.prizes1?.banner5.text3}
                </Text>
              </View>
              <View
                style={{
                  width: '80%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: customData?.prizes1?.banner5.text4Color,
                    textAlign: 'center',
                    fontSize: 14,
                    marginTop: '1%',
                    marginBottom: '10%',
                  }}>
                  {customData?.prizes1?.banner5.text4}
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginBottom: '8%'}}>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: 'rgb(34,72,142)',
                      textDecorationLine: 'underline',
                    }}>
                    Read the rules
                  </Text>
                </TouchableOpacity>
                <Text style={{color: 'white'}}> for full details. </Text>
              </View>
            </View>
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
