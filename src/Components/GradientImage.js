import React from 'react';
import {Image, Text} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientImage = props => {
  return (
    <MaskedView maskElement={<Image {...props} />}>
      <LinearGradient
        colors={['rgba(82, 63, 215, 1)', 'rgba(255, 125, 255, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Image {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientImage;
