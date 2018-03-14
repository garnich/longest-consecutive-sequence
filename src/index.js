module.exports = function longestConsecutiveLength(array) {
  // your solution here
  var callback;
  var a = array;
  var b = a.sort();

  b = a.sort(moreorless); //сортируем заданный массив

  function moreorless(first, second)
  {
      if (first == second)
          return 0;
      if (first < second)
          return -1;
      else
          return 1;
  }

  if(array.length == 0){
    callback = "" ;
  }
  if(array.length == 1){
    callback = 1 ;
  }

  if(array.length > 1){
    function longest(b) {
        var consecutive_arr = [b[0]];
        var temp_arr = [b[0]]
        for (var i = 1; i < b.length; i++) {
              var s = b[i-1];
              var f = b[i];
            if (f - s == 1 ) {
                temp_arr.push(b[i]);
            } else {
                if (temp_arr.length > consecutive_arr.length) {
                    consecutive_arr = temp_arr;
                }
                temp_arr = [b[i]];
            }
        }
        if (temp_arr.length > consecutive_arr.length) {
            consecutive_arr = temp_arr;
        }
        return consecutive_arr.length;
    }
    callback = longest(b);
  }

  return callback;
}
