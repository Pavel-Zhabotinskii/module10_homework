//10.3 Задание 7
let arr = [5, 5, 0, 5,'e'];
for (let a = 0; a < arr.length; a++){
  if (typeof arr[a] == 'number'){
    if (arr[a] % 2 == 0){
      console.log('Это четное число');
    } else {
      console.log('Это нечетное число');
    }
  } else if (arr[a] == 0) {
    console.log('Это 0');
  } else {
    console.log('Это не число');
  }
}
