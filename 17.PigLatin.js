function translatePigLatin(str) {
  const res = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const arr = str.split('');
  let i = 0;
  while (i < arr.length) {
    if (vowels.includes(arr[i])) {
      break;
    }
    res.push(arr[i]);
    i++;
  }
  if (i === 0) {
    return str + 'way';
  }
  return arr.slice(i).join('') + res.join('') + 'ay';
}



  translatePigLatin("consonant");