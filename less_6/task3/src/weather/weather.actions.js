/* eslint-disable spaced-comment */
import { getWeatherDatas } from './weather.gateway';

export const CITY_DATA_RECEIVED = 'CITY_DATA_RECEIVED';

export const cityDataReceived = cityData => ({
  type: CITY_DATA_RECEIVED,
  payload: { cityData },
});

export const getWeatherData = () =>
  function (dispatch) {
    getWeatherDatas().then(cityData => {
      console.log(cityData);
      //{id: '1', temp: 34, name: 'Moenhaven'}
      //{id: '4', temp: 25, name: 'Lake Elwinchester'}
      //...
      dispatch(cityDataReceived(cityData));
    });
  };
//console.log(cityDataReceived());
