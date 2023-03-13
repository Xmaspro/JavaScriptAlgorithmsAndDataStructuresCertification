function truthCheck(collection, pre) {
    // Is everyone being true?
    let preTrue = collection.every(function(item) {
      return item[pre];
    });
    if (preTrue) {
      return true;
    } else {
      return false;
    }
  }

  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));