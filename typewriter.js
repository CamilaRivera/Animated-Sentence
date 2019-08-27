const sentence = "hello there from lighthouse labs";

const typeWriter = (sentence) => {
  const sentenceArray = sentence.split("");
  sentenceArray.forEach((char, index) => {
    setTimeout(() => {
      // print the char here
      process.stdout.write(char);
      if(index === sentenceArray.length - 1){
        console.log("");
      }
    }, index * 50); // <= 1s delay to make it noticeable. Can dial it down later.
  });
  
};


typeWriter(sentence);
