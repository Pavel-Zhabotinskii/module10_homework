//10.3 Задание 1
const a = prompt('Введите число')
const b = + a;
if(typeof b == "number" && !isNaN(b)){
  if(b == 0) {
    console.log('ноль')
  } else if (b % 2 == 0){
    console.log('чётное')
  } else {
    console.log('нечётное')
  }
} else {
  console.log('Упс, кажется, вы ошиблись')
}
