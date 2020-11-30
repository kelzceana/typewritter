let counter = 50;
const sentence = "Hi there, how are you today. my name is kelechi ";
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, counter)
  counter +=50
}