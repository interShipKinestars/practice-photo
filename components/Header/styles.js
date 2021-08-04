import {StyleSheet, Platform} from 'react-native';
import { getStatusBarHeight, hasNotch } from '../../utils';

export default StyleSheet.create({
  contain: {
    paddingTop: 15,
    paddingBottom: 15, 
    flexDirection: 'row',
    minHeight: 60,
    },
  primaryStyle: {
    backgroundColor: '#fff'
  },
  contentLeft: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 60,
    height: 30
  },
  contentCenter: {
    flex: 1,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingRight: 20,
  },
  contentRightSecond: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
  },
  right: {
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  txtTitle: { 
    color: '#000', 
    fontWeight: '500', 
    fontSize: 18,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});