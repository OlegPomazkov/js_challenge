// При решении задачи предполагалось, что массивы не упорядоченные и
// могут содержать как положительные, так и отрицательные числа
function sumOfTwo(array1, array2, x) {
  var array3 = array1.map(function(item) {
    return (x - item);
  });

  for (var i = 0; i < array3.length; i++) {
    if( array2.indexOf(array3[i]) !== -1) return true;
  }

  return false;
}
