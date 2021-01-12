const sentence = "hello there from lighthouse labs";

const typeWriter = function(str) {
  let delay = 0;
  for (let i = 0; i < str.length; i++) {
    setTimeout(() => {
      if (i === str.length - 1) {
        process.stdout.write(str[i]);
        console.log('\n');
      } else {
        process.stdout.write(str[i]);
      }
    }, delay);
    delay += 100;
  }
};

typeWriter(sentence);