import axios from 'axios';

const GW2 = 'https://api.guildwars2.com/v2';

export function getAccountInfo(key) {
  const url = `${GW2}/account`;
  return axios.get(url, { headers: `Authorization: Bearer ${key}` });
}

export function getCharacterList(key) {
  const url = `${GW2}/characters`;
  return axios.get(url, { headers: `Authorization: Bearer ${key}` });
}

export function getCharacterInfo(key, name) {
  const url = `${GW2}/characters/${name}`;
  return axios.get(url, { headers: `Authorization: Bearer ${key}` });
  // need to sub spaces with %20
}

export function getPermissions(key) {
  const url = `${GW2}/tokeninfo`;
  return axios.get(url, { headers: `Authorization: Bearer ${key}` });
}
