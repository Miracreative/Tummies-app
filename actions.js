export const lang = () => ({type: "LNG"});
export const addr = (place) => ({type: "LOCATION", payload: place});
export const lat = (coord) => ({type: "LATITUDE", payload: coord});
export const long = (coord) => ({type: "LONGITUUDE", payload: coord});
export const gen1 = (gen) => ({type: "GENDER1", payload: gen});
export const name1 = (name) => ({type: "NAME1", payload: name});

