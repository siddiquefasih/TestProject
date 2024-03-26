import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../Colors';
import Icons from '../assets/index';

const DropDownInput = ({data, check}) => {
  const [dropDown, setDropDown] = useState(false);
  const [selected, setSelected] = useState('');
  const [newData, setNewData] = useState([...data]);

  useEffect(() => {
    setSelected('');
    setNewData(data);
  }, [data]);

  const onChangeText = text => {
    const newData = data?.filter(item =>
      item?.title?.toLowerCase().includes(text?.toLowerCase()),
    );
    setSelected(text);
    setNewData(newData);
  };

  return (
    <View
      style={{
        width: '100%',
        maxHeight: 400,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.white,
        marginTop: 25,
        overflow: 'hidden',
        marginBottom: 20,
        backgroundColor: Colors.grey,
      }}>
      <View
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setDropDown(!dropDown);
        }}
        activeOpacity={0.8}
        style={{
          height: 50,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          borderBottomWidth: dropDown ? 1 : 0,
          borderColor: Colors.border,
        }}>
        <TextInput
          onFocus={() => setDropDown(true)}
          onBlur={() => setDropDown(false)}
          placeholder="Select"
          style={{color: Colors.white}}
          placeholderTextColor={Colors.white}
          value={selected}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={() => setDropDown(!dropDown)}>
          <Image
            source={Icons.back}
            style={{
              width: 5,
              height: 9,
              tintColor: Colors.white,
              transform: dropDown ? [{rotate: '90deg'}] : [{rotate: '270deg'}],
            }}
          />
        </TouchableOpacity>
      </View>
      {dropDown && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{maxHeight: 200}}>
          {newData?.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                LayoutAnimation.easeInEaseOut();
                setSelected(item?.title);
                check();

                setDropDown(false);
              }}
              style={{
                height: 50,
                justifyContent: 'center',
                paddingHorizontal: 15,
                borderBottomWidth: index === newData?.length - 1 ? 0 : 1,
                borderColor: Colors.background,
              }}>
              <Text style={{fontSize: 12, color: Colors.white}}>
                {item?.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default DropDownInput;
