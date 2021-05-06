function uniqError(el: string, array: string[]) {
  return !(array.filter((current) => current === el).length > 1);
}

export default uniqError;
