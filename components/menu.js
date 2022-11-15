import * as React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

// import Icon from 'react-native-vector-icons/dist/FontAwesome';
export function Menu({onPress}) {
  return (
    <>
      <View>
        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              borderWidth: 0.5,
              borderTopWidth: 0.8,
              height: 25,
              width: 35,
              justifyContent: 'center',
              alignSelf: 'flex-end',
              alignContent: 'center',
              //   flex: 1,
              borderRadius: 4,
              marginTop: 14,
              marginRight: 10,
              padding: 2,
              // alignItems: 'center',
            }}>
            <Image
              source={require('../assets/hamburger.png')}
              style={{
                height: '90%',
                width: '100%',
                // marginTop: '4%',
              }}
              resizeMode="contain"
            />

            {/* <Icon name="person" /> */}
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
