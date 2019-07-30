export function evalJson(data) {
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
}
