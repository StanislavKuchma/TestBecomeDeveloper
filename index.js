let uniqArray = [];

document.querySelector(".button").addEventListener("click", () => {
  let data = document.querySelector(".input").value;
  console.log(data);
  const regex1 = /[^a-zA-Z\d]/g;

  const text = data.replace(regex1, " ").split(" ");

  for (let index = 0; index < text.length; index++) {
    if (firstUniqChar(text[index]) !== -1) {
      uniqArray.push(...firstUniqChar(text[index]));
    }
  }
  const uniq = firstUniqChar(uniqArray);
  document.querySelector(".out-block").innerHTML = uniq;
});

let firstUniqChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let current = s[i];

    if (map.has(current)) {
      map.set(current, map.get(current) + 1);
    } else {
      map.set(current, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return s[i];
    }
  }
  return -1;
};
