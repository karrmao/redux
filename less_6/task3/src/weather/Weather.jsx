/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { cityDataSelector } from './weather.selectors';
import * as weatherActions from './weather.actions';

const Weather = ({ citiesList, getWeatherData }) => {
  useEffect(() => {
    return getWeatherData(), [];
  });
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {citiesList.map(city => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    citiesList: cityDataSelector(state),
  };
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};
export default connect(mapState, mapDispatch)(Weather);
