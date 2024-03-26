import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  LayoutAnimation,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from '../TestProject/src/assets/index';
import Colors from './src/Colors';
import GradientText from './src/Components/GradientText';
import GradientImage from './src/Components/GradientImage';
import DropDownInput from './src/Components/DropDownInput';
import GradientSlider from './src/Components/GradientSlider';

const data = [
  {
    title: 'Fun',
    content: [
      {title: 'Board games revival'},
      {title: 'Comedy trends'},
      {title: 'Amusement parks'},
      {title: 'Escape rooms'},
      {title: 'Street performances'},
      {title: 'Online challenges'},
      {title: 'Festivals impact'},
      {title: 'Crafting movement'},
      {title: 'Social gaming'},
      {title: 'Virtual reality'},
    ],
  },
  {
    title: 'Education',
    content: [
      {title: 'Gamified learning'},
      {title: 'Education systems'},
      {title: 'Bilingual benefits'},
      {title: 'Standardized testing'},
      {title: 'Arts in schools'},
      {title: 'Tech bootcamps'},
      {title: 'Homeschooling dynamics'},
      {title: 'Mentorship importance'},
      {title: 'Educational equity'},
      {title: 'Mobile learning'},
    ],
  },
  {
    title: 'Sports',
    content: [
      {title: 'Sports medicine'},
      {title: 'Team sociology'},
      {title: 'Olympic economics'},
      {title: 'Gender parity'},
      {title: 'Fandom psychology'},
      {title: 'Extreme sports'},
      {title: 'Sports business'},
      {title: 'Youth athletics'},
      {title: 'Data analytics'},
      {title: 'Doping ethics'},
    ],
  },
  {
    title: 'News',
    content: [
      {title: 'Citizen journalism'},
      {title: 'Whistleblower influence'},
      {title: 'Fake news'},
      {title: 'Print media survival'},
      {title: 'Social media news'},
      {title: 'Cybersecurity news'},
      {title: 'Democratic media'},
      {title: 'News deserts'},
      {title: 'News economics'},
      {title: 'Broadcast evolution'},
    ],
  },
  {
    title: 'Investment',
    content: [
      {title: 'Robo-advising'},
      {title: 'Geopolitical impacts'},
      {title: 'Index funds'},
      {title: 'Real estate trends'},
      {title: 'Startup investing'},
      {title: 'Social trading'},
      {title: 'Tax strategies'},
      {title: 'Emerging markets'},
      {title: 'Financial literacy'},
      {title: 'Pension futures'},
    ],
  },
  {
    title: 'Facts',
    content: [
      {title: 'Animal oddities'},
      {title: 'Everyday science'},
      {title: 'Historical obscurities'},
      {title: 'Science myths'},
      {title: 'Human body facts'},
      {title: 'Oceanic discoveries'},
      {title: 'Space exploration'},
      {title: 'Ancient tech'},
      {title: 'World laws'},
      {title: 'Bizarre news'},
    ],
  },
];
const App = () => {
  const [title, setTitle] = useState('Fun');
  const {width} = Dimensions.get('window');
  const [value, setValue] = useState(100);
  const [content, setContent] = useState(data[0]?.content);
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        marginTop: 40,
        backgroundColor: Colors.background,
        flex: 1,
      }}>
      <View style={{marginHorizontal: 20, paddingBottom: 30, flex: 1}}>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              backgroundColor: Colors.grey,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={Icons.back}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: Colors.white,
                // fontWeight: 'bold',
                fontSize: 16,
                fontFamily: 'Poppins-Medium.ttf',
              }}>
              Media management
            </Text>
            <Text
              style={{
                color: Colors.white,
                textAlign: 'center',
                fontFamily: 'Poppins-Regular.ttf',
              }}>
              Draft campaign
            </Text>
          </View>

          <View style={{}}>
            <ImageBackground
              source={Icons.background}
              style={{
                height: 60,
                width: 60,
                resizeMode: 'contain',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={Icons.user}
                style={{
                  height: 50,
                  width: 50,
                  resizeMode: 'contain',
                }}></Image>
            </ImageBackground>
          </View>
        </View>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <Image
            source={Icons.icons}
            style={{
              height: 60,
              width: '100%',
              resizeMode: 'contain',
              marginVertical: 30,
            }}
          />
          <Text
            style={{
              color: Colors.white,
              fontFamily: 'Poppins-Medium.ttf',
              fontSize: 24,
            }}>
            Content type
          </Text>
          <Text
            style={{
              color: Colors.white,
              fontFamily: 'Poppins-Regular.ttf',
              fontSize: 14,
              marginTop: 5,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'white',
            }}>
            Choose a content type that best fits your needs.
          </Text>
          <View
            style={{
              height: 0.9,
              marginVertical: 20,
              backgroundColor: Colors.lightText,
            }}
          />
          <Text
            style={{
              color: Colors.white,
              fontFamily: 'Poppins-Regular.ttf',
              fontSize: 16,
              marginTop: 20,
            }}>
            What type of content are you creating?
          </Text>

          <View>
            <FlatList
              data={data}
              style={{
                marginTop: 20,
              }}
              scrollEnabled={false}
              numColumns={3}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      LayoutAnimation.spring();
                      setTitle(item?.title);
                      console.log(item?.content, 'jhgfdxzxfgh');
                      setContent(item?.content);
                    }}
                    activeOpacity={0.8}
                    style={{
                      backgroundColor:
                        title == item?.title ? Colors.blue : Colors.background,
                      paddingHorizontal: 30,
                      paddingVertical: 20,
                      margin: 5,
                      borderRadius: 25,
                      marginBottom: 10,
                      borderColor: Colors.white,
                      borderWidth: 0.3,
                    }}>
                    <Text
                      style={{
                        color:
                          title == item?.title ? Colors.white : Colors.white,
                        fontSize: 14,
                        fontFamily: 'Poppins-Regular.ttf',
                      }}>
                      {item?.title}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text
            style={{
              color: Colors.white,
              fontSize: 16,
              fontFamily: 'Poppins-Regular.ttf',
              marginTop: 20,
            }}>
            {` Which type of "${title}" content are you creating?`}
          </Text>
          <DropDownInput data={content} />

          <View
            style={{
              width: width - 100,
              height: 40,
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: Colors.blue,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: (value / 1000) * (width - 100) - 35,
                borderRadius: 12,
              }}>
              <Text style={{color: Colors.white}}>{value}</Text>
            </View>
          </View>
          {content?.length && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: width - 40,
              }}>
              <Text style={{color: Colors.white, width: 40}}>100</Text>
              <View>
                <GradientSlider
                  style={{width: width - 120}}
                  step={100}
                  minimumValue={100}
                  maximumValue={1000}
                  value={value}
                  onValueChange={val => setValue(val)}
                  thumbTintColor="rgb(252, 228, 149)"
                  maximumTrackTintColor="#d3d3d3"
                  minimumTrackTintColor="rgb(252, 228, 149)"
                />
              </View>
              <Text
                style={{color: Colors.white, width: 40, textAlign: 'right'}}>
                1000
              </Text>
            </View>
          )}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              height: 55,
              backgroundColor: Colors.white,
              width: width - 40,
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 22,
              marginTop: 20,
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <GradientText
              style={{
                fontSize: 16,
              }}>
              Next
            </GradientText>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <GradientImage
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                  transform: [{rotate: '180deg'}],
                }}
                source={Icons.back}
              />
              <GradientImage
                style={{
                  height: 20,
                  width: 15,
                  resizeMode: 'contain',
                  transform: [{rotate: '180deg'}],
                }}
                source={Icons.back}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  textCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorGrey: {
    color: '#d3d3d3',
  },
  colorYellow: {
    color: 'rgb(252, 228, 149)',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
