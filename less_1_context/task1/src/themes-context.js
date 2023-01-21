/* eslint-disable spaced-comment */
import React from 'react';

export const themes = {
  dark: {
    fontColor: '#ffffff', //white
    background: '#222222', //ble
  },
  light: {
    fontColor: '#000000', //black
    background: '#eeeeee', //silver
  },
};

export const ThemeContext = React.createContext(themes.dark);
