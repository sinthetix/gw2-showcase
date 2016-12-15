import axios from 'axios';

const GW2 = 'https://api.guildwars2.com/v2';

export function getAccountInfo(key) {
  const url = `${GW2}/account?access_token=${key}`;
  return axios.get(url);
}

export function getCharacterList(key) {
  const url = `${GW2}/characters?access_token=${key}`;
  return axios.get(url);
}

export function getCharacterInfo(key, name) {
  const url = `${GW2}/characters/${name}?access_token=${key}`;
  return axios.get(url);
  // need to sub spaces with %20
}

export function getItemInfo(id) {
  const url = `${GW2}/items/${id}`;
  return axios.get(url);
}

export function getSkinInfo(id) {
  const url = `${GW2}/skins/${id}`;
  return axios.get(url);
}

export function getPermissions(key) {
  const url = `${GW2}/tokeninfo?access_token=${key}`;
  return axios.get(url);
}

export function getTitle(id) {
  const url = `${GW2}/titles/${id}`;
  return axios.get(url);
}
