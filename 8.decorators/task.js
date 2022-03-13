function cachingDecoratorNew(func) {
  let cache = {};

  let numberRecords = 0;

  return function wrapper(...args) {
    const hash = args.join(',');
    
    if (hash in cache) {
      return `Из кэша: ${cache[hash]}`;
    } else {
      numberRecords++;

      let result = func(...args);

      cache[hash] = result;

      if (numberRecords > 5) {   
        delete cache[Object.keys(cache)[0]];
      } 

      return `Вычисляем: ${result}`;
    }
  }

}

function debounceDecoratorNew(func, ms) {
  let timeout;

  let flag = true;

  function wrapper (...args) {
    clearTimeout(timeout);

    if (!flag) {
      timeout = setTimeout(() => {
        func.apply(this, args);
        console.timeEnd('time');
        console.time('time');
      }, ms);
    } else {
      func.apply(this, args);
      flag = false;
    }
  }

  return wrapper;
}

console.time('time');


function debounceDecorator2(func) {
  let timeout;

  let flag = true;

  function wrapper (...args) {
    clearTimeout(timeout);

    wrapper.count++;

    if (!flag) {
      timeout = setTimeout(() => {
        func.apply(this, args);
        console.timeEnd('time');
        console.time('time');
      }, ms);
    } else {
      func.apply(this, args);
      flag = false;
    }

  }

  wrapper.count = 0;

  return wrapper;
}
