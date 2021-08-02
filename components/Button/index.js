import React from 'react';
import {TouchableOpacity, StyleSheet, ActivityIndicator, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function Button(props) {
  const {
    style,
    styleText,
    outline,
    full,
    round,
    loading,
    children,
    disabled,
    customDisable,
    indicatorColor,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      style={StyleSheet.flatten([
        [styles.default, {backgroundColor: '#000'}],
        outline && [
          styles.outline,
          {backgroundColor: '#fff', borderColor: '#000'},
          ,
        ],
        full && styles.full,
        round && styles.round,
        style,
        disabled && !customDisable && {opacity: 0.5}
      ])}
      activeOpacity={0.9}>
      <Text
        style={StyleSheet.flatten([
          styles.textDefault,
          outline && {color: '#fff'},
          styleText,
        ])}
        numberOfLines={1}>
        {children || 'Button'}
      </Text>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={indicatorColor ? '#000' : '#fff'}
          style={{paddingLeft: 5}}
        />
      ) : null}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  outline: PropTypes.bool,
  full: PropTypes.bool,
  round: PropTypes.bool,
  loading: PropTypes.bool,
  customDisable: PropTypes.bool,
  indicatorColor:PropTypes.bool,
};

Button.defaultProps = {
  style: {},
  outline: false,
  full: false,
  round: false,
  loading: false,
  customDisable: false,
  indicatorColor: false
};