/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     const str = `${i + 1}) ${items[i]}`;
//     console.log(str);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names, phones) {
//   names = names.split(',');
//   phones = phones.split(',');

//   for (let i = 0; i < names.length; i++) {
//     console.log(`${names[i]} - ${phones[i]}`);
//   }
// }

// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   const hoursStr = hours.toString().padStart(2, '0');
//   const minutesStr = minutes.toString().padStart(2, '0');

//   const result = `${hoursStr}:${minutesStr}`;
//   return result;
// }

// console.log(formatTime(70)); // "24:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
