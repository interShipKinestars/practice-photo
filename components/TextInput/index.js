import React from 'react';
import { TextInput, View, I18nManager } from 'react-native';
import PropTypes from 'prop-types';
export default function Index(props) {
  const {
    style,
    onChangeText,
    onFocus,
    placeholder,
    value,
    success,
    secureTextEntry,
    keyboardType,
    multiline,
    textAlignVertical,
    onSubmitEditing,
    editable,
    textInputStyle,
    ...others
  } = props;
  return (
    <View style={[
      {
        paddingHorizontal: 10,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }, { backgroundColor: '#fff' }, style]}>
      <TextInput
        style={[{
          flex: 1,
          height: '100%',
          textAlign: I18nManager.isRTL ? 'right' : 'left',
          color: '#000',
          paddingVertical: Platform.OS === 'ios' ? 15 : 5,
          justifyContent: 'center',
          alignItems: 'center'
        }, textInputStyle]}
        onChangeText={text => onChangeText(text)}
        onFocus={() => onFocus()}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={success ? '#ccc' : '#D73A48'}
        secureTextEntry={secureTextEntry}
        value={value}
        selectionColor={'#000'}
        keyboardType={keyboardType}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
        onSubmitEditing={onSubmitEditing}
        underlineColorAndroid="transparent"
        editable={editable}
        {...others}
      />
    </View>
  );
};

Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  success: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  multiline: PropTypes.bool,
  textAlignVertical: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  textInputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Index.defaultProps = {
  style: {},
  onChangeText: text => { },
  onFocus: () => { },
  placeholder: 'Placeholder',
  value: '',
  success: true,
  secureTextEntry: false,
  keyboardType: 'default',
  multiline: false,
  textAlignVertical: 'center',
  onSubmitEditing: () => { },
  textInputStyle: {}
};