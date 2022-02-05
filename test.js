const searchServer = (str, str2 = "default") => {
  console.log(`searching: ${str}, ${str2}`);
  return [str, str2];
};

const debounce = (fn) => {
  let timeout = null;
  return (delay, ...args) => {
    if (timeout) clearTimeout(timeout);
    let ret = [];
    return new Promise((resolve, reject) => {
      timeout = setTimeout(() => {
        ret = fn(...args);
        resolve(ret);
      }, delay);
    });
  };
};

const debouncer = debounce(searchServer);

const search = async (str) => {
  if (str.length <= 3) {
    return [];
  }
  const ret = await debouncer(2000, str);
  console.log(ret);
};

const input = ["asff"];
for (let v of input) {
  search(v);
}
