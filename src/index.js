module.exports = function longestConsecutiveLength(array) {
  // your solution here
  //console.log(array);
  var callback;
  var a = array;

  var b = a.sort();
  //console.log(b);
  b = a.sort(moreorless); //сортируем заданный массив



  //console.log(uniq_fast(b));



  function moreorless(first, second)
  {
      if (first == second)
          return 0;
      if (first < second)
          return -1;
      else
          return 1;
  }

  console.log(array.length);

  if(array.length == 0){
    callback ="";
  }

  if(array.length == 1){
    callback ="1";
  }

  // for (var i = 0; i <= b.length-1; i++){
  //  if(b.length > 0 ){
  //    var s = b[i+1];
  //    var f = b[i];
  //    if(s - f == 1){
  //     numb= numb + 1;
  //   }
  //   else{ if(s - f > 1)
  //   {
  //     res.push(numb);
  //     numb=0;
  // }
  // res1 = res.sort(moreorless);
  // callback = res1[res1.length-1];
  // }}}
  // console.log(res) ;
  // console.log(callback+1) ;

  if(a.length > 1){

    function uniq_fast(b) {
        var seen = {};
        var out = [];
        var len = a.length;
        var j = 0;
        for(var i = 0; i < len; i++) {
             var item = a[i];
             if(seen[item] !== 1) {
                   seen[item] = 1;
                   out[j++] = item;
             }
        }
        return out;

    }
    var d = uniq_fast(b);

    function longest(d) {
      var consecutive_arr = [d[0]];
      var temp_arr = [d[0]]
      for (var i = 1; i < d.length; i++) {
            var s = d[i-1];
            var f = d[i];
          if (f - s == 1 ) {
              temp_arr.push(d[i]);
            //   console.log(temp_arr);
          } else {
              if (temp_arr.length > consecutive_arr.length) {
                  consecutive_arr = temp_arr;
              }
              temp_arr = [d[i]];

          }
      }
      if (temp_arr.length > consecutive_arr.length) {
          consecutive_arr = temp_arr;

      }
      return consecutive_arr.length;

    }
    callback = longest(d);
    //console.log(callback);




              }

  return callback;
}
