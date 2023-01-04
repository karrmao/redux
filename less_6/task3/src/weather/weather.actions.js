/* eslint-disable import/first */
/* eslint-disable func-names */
/* eslint-disable arrow-body-style */
/* eslint-disable import/named */
export const CITY_DATA_RECEIVED = 'CITY_DATA_RECEIVED';
import { getWeatherDatas } from './weather.gateway';

export const cityDataReceived = cityData => {
  return {
    type: CITY_DATA_RECEIVED,
    payload: { cityData },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    getWeatherDatas().then(cityData => {
      dispatch(cityDataReceived(cityData));
    });
  };
};
