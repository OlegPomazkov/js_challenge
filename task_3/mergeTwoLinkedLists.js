//  Примечание
// `l1` и `l2` не массив, вы не можете получить доступ к элементу по индексу `l1[0]`. 
// Это Линейный связный список – https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA

// `l1, l2` это `ListNode` и  имеет  только `.x` и `.next`. Декларация обьекта ниже. Вы не можете вносить изменения в объект.
function ListNode(x) {
  this.value = x;
  this.next = null;
}


function mergeTwoLinkedLists(l1, l2) {
 
  function setNewNodeInList (val) {
    var tmp;
    var newNode = new ListNode(val);
  
    if(!l3.value) {
      l3 = newNode;
    } else {
      tmp = l3;
      while( tmp.next ) {
        tmp = tmp.next;
      }
      tmp.next = newNode;
    }        
  }

  function setRests(obj) {
    while (obj) {
      setNewNodeInList (obj.value);
      obj = obj.next;
    }
  }

  var tmp1 = l1;
  var tmp2 = l2;
  var l3 = {}; 

  while( tmp1 || tmp2 ) {
    if( tmp1.value < tmp2.value ) {
      setNewNodeInList(tmp1.value);
      if (tmp1.next) {
        tmp1 = tmp1.next;
      } else {  
        setRests(tmp2);
        break;
      }
    } else {
      setNewNodeInList(tmp2.value);
      if (tmp2.next) {
        tmp2 = tmp2.next;
      } else {  
        setRests(tmp1);
        break;
      }
    }
  }
  
  return l3;
}