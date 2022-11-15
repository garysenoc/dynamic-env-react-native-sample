import * as React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

// import Icon from 'react-native-vector-icons/dist/FontAwesome';
export function Table({date, prizes = []}) {
  return (
    <>
      <View style={{alignItems: 'center', marginTop: 25}}>
        <View>
          <Text style={{fontWeight: '900', color: 'black'}}>{date}</Text>
        </View>

        <View style={{marginTop: 15}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '90%',
            }}>
            <View style={{width: '20%', backgroundColor: 'rgb(245,179,47)'}}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                PLACE
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                backgroundColor: 'rgb(245,179,47)',
                borderLeftColor: 'white',
                borderLeftWidth: 1,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                PRIZE
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '90%',
            }}>
            <View
              style={{
                width: '20%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                1st
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                borderRightColor: 'rgb(245,179,47)',
                borderRightWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  marginLeft: 10,
                }}>
                {prizes[0] == null ? '' : prizes[0]}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '90%',
            }}>
            <View
              style={{
                width: '20%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                2nd
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                borderRightColor: 'rgb(245,179,47)',
                borderRightWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  marginLeft: 10,
                }}>
                {prizes[1]}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '90%',
            }}>
            <View
              style={{
                width: '20%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                3rd
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                borderRightColor: 'rgb(245,179,47)',
                borderRightWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  marginLeft: 10,
                }}>
                {prizes[2]}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '90%',
            }}>
            <View
              style={{
                width: '20%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                4th
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                borderRightColor: 'rgb(245,179,47)',
                borderRightWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  marginLeft: 10,
                }}>
                {prizes[3]}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '90%',
            }}>
            <View
              style={{
                width: '20%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                5th
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                borderRightColor: 'rgb(245,179,47)',
                borderRightWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  marginLeft: 10,
                }}>
                {prizes[4]}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '90%',
            }}>
            <View
              style={{
                width: '20%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                6th
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                borderRightColor: 'rgb(245,179,47)',
                borderRightWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  marginLeft: 10,
                }}>
                {prizes[5]}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '90%',
            }}>
            <View
              style={{
                width: '20%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                7th
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                borderRightColor: 'rgb(245,179,47)',
                borderRightWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  marginLeft: 10,
                }}>
                {prizes[6]}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '90%',
            }}>
            <View
              style={{
                width: '20%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                8th
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                borderRightColor: 'rgb(245,179,47)',
                borderRightWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  marginLeft: 10,
                }}>
                {prizes[7]}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '90%',
            }}>
            <View
              style={{
                width: '20%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                9th
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                borderRightColor: 'rgb(245,179,47)',
                borderRightWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  marginLeft: 10,
                }}>
                {prizes[8]}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '90%',
            }}>
            <View
              style={{
                width: '20%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                height: 30,
                justifyContent: 'center',
                borderBottomColor: 'rgb(245,179,47)',
                borderBottomWidth: 1,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                10th
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                borderLeftColor: 'rgb(245,179,47)',
                borderLeftWidth: 1,
                borderRightColor: 'rgb(245,179,47)',
                borderRightWidth: 1,
                borderBottomColor: 'rgb(245,179,47)',
                borderBottomWidth: 1,
                height: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  marginLeft: 10,
                }}>
                {prizes[9]}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
