import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
};

export function currentRoute(){
    return navigationRef.current?.getCurrentRoute()  
};

export function goBack() {
  navigationRef.current?.goBack();
};

export function resetPage(name, params = {}) {
  navigationRef.current?.reset({
    routes: [{ name, params }]
  });
};

export function deeplinkNavigator(name, params = {}){
  navigationRef.current?.navigate('Main', {screen: name, params});
};