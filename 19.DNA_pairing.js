function pairElement(str) {
    let arr = str.split('');
    let res = [];
    let i = 0;
    while (arr[i]) {
        switch (arr[i]) {
            case 'A':
            res.push(['A', 'T']);
            break;
            case 'T':
            res.push(['T', 'A']);
            break;
            case 'G':
            res.push(['G', 'C']);
            break;
            case 'C':
            res.push(['C', 'G']);
            break;
        }
        i++;
    }
    return res;
  }

  console.log(pairElement("GCG"));