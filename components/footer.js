import {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import RNConfigReader from 'rn-config-reader';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import customData from '../assets/sample.json';

export function Footer({onPress}) {
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
      <View
        style={{
          height: 420,
          backgroundColor: 'black',
          marginTop: 30,
        }}>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Image
            source={{
              uri: customData?.footer.companyLogo,
            }}
            style={{
              height: '55%',
              width: '55%',
              // marginTop: '4%',
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{alignItems: 'center', marginTop: '-18%'}}>
          <Text
            style={{color: customData?.footer.companyName.color, fontSize: 14}}>
            {customData?.footer.companyName.text}
          </Text>
          <Text style={{color: customData?.footer.address1.color}}>
            {' '}
            {customData?.footer.address1.text}
          </Text>
          <Text style={{color: customData?.footer.address2.color}}>
            {customData?.footer.address2.text}
          </Text>
          <Text style={{color: customData?.footer.email.color}}>
            Email: {customData?.footer.email.text}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Text
                style={{
                  color: customData?.footer.link1.color,
                  textDecorationLine: 'underline',
                }}>
                {customData?.footer.link1.text}
              </Text>
            </TouchableOpacity>
            <Text style={{color: 'white'}}> | </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: customData?.footer.link2.color,
                  textDecorationLine: 'underline',
                }}>
                {customData?.footer.link2.text}
              </Text>
            </TouchableOpacity>
          </View>

          <Image
            source={{uri: customData?.footer.teamImage}}
            style={{
              height: '55%',
              width: '55%',
              marginTop: '-4%',
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    </>
  );
}
