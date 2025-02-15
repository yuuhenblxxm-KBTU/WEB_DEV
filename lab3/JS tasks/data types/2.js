function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("john") ); // John
  
  // 2
  function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('book') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy bOOk now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );
  
  // 3
  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }
  // 4
  function extractCurrencyValue(str) {
    return +str.slice(1);
  }
