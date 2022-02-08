export const setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);

export const setNull = obj => setAll(obj, null);
