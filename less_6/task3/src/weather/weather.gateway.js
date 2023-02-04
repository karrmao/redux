const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const getWeatherDatas = () =>
  fetch(baseUrl).then(response => response.json());

// const baseUrl = `https://api.iev.aero/api/flights/11-02-2020`;

// export const getWeatherDatas = () =>
//   fetch(baseUrl).then(response => response.json());

// console.log(getWeatherDatas());
