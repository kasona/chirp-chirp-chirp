function chirp(a,b){
  if (b === 1) {
    return " chirp ";
  }
  b--;
  return " chrip " + chirp(a,b);
}
chirp(1,3);