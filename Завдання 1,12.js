function Sum() {
    let nums = [];
    while (true) {
        let value = prompt("Ваше число:", 0);
        if (value === "" || value === null || !isFinite(value)) break;
     nums.push(+value);
    }
    let sum = 0;
    for (let num of nums) {
      sum += num;
    }
    return sum;
  }
  alert( Sum() );