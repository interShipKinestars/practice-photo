import React from 'react';
import { View, TouchableOpacity,  Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export default function Header(props) {
  const {
    style,
    styleLeft,
    styleCenter,
    styleRight,
    styleRightSecond,
    title,
    onPressLeft,
    onPressRight,
    onPressRightSecond,
    renderLeft,
    renderRightSecond,
    renderRight,
    disableRight,
    titleStyle,
    primaryMode
  } = props;

  return (
    <View style={[styles.contain, primaryMode && styles.primaryStyle, style]}>
      <TouchableOpacity
        style={[styles.contentLeft, styleLeft]}
        onPress={onPressLeft}>
        {renderLeft()}
      </TouchableOpacity>
      <View style={[styles.center, styleCenter]}> 
        <Text  style={[primaryMode && styles.txtTitle, titleStyle]}>
          {title}
        </Text> 
      </View>
      <View style={styles.right}>
        <TouchableOpacity
          style={[styles.contentRightSecond, styleRightSecond]}
          onPress={onPressRightSecond}>
          {renderRightSecond()}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.contentRight, styleRight, disableRight && {opacity: 0.7}]}
          onPress={onPressRight}
          disabled={disableRight}>
          {renderRight()}
        </TouchableOpacity>
      </View>
    </View>
  );
};

Header.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleCenter: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleRightSecond: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  renderLeft: PropTypes.func,
  renderRight: PropTypes.func,
  renderRightSecond: PropTypes.func,
  onPressRightSecond: PropTypes.func,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  title: PropTypes.string,
  primaryMode: PropTypes.bool
};

Header.defaultProps = {
  style: {},
  styleLeft: {},
  styleCenter: {},
  styleRight: {},
  styleRightSecond: {},
  renderLeft: () => { },
  renderRight: () => { },
  renderRightSecond: () => { },
  onPressLeft: () => { },
  onPressRight: () => { },
  onPressRightSecond: () => { },
  title: 'Title',
  titleStyle: {},
  primaryMode: false,
};