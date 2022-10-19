let myInput = process.argv.slice(2);

for (let interval of myInput) {
  if (interval === "" || +interval < 0 || isNaN(interval)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, (+interval) * 1000);
}





