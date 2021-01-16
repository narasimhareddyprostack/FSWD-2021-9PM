let x = 0;
for (; ; x = x + 3) {
  if (x <= 10) {
    console.log("x value:", x);
  }
}

//not recemmed
//browser Memory Leakage problem will come.
