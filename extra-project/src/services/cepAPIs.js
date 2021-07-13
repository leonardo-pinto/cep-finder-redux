export const fetchViaCEP = (cep) => {
  const URL = `https://viacep.com.br/ws/${cep}/json`
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error)
};

export const fetchApiCEP = (cep) => {
  const URL = `https://api.findcep.com/v1/cep/${cep}.json`
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error)
};