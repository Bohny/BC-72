/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (let i = 0; i < friends.length; i++) {
//   friends[i] += '_name';
// }

// console.table(friends);

// ===========================================
// const arr = [10, 20, 30, 3, 1, 3, 5, 6, 2, 1, 5];

// for (let i = 0; i < arr.length; i += 1) {
//   const message = `${i + 1}) - ${arr[i]}`;
//   console.log(message);
// }

// ===========================================
// const arr = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Java'];
// const arr = [10, 20, 30, 40, 50, 60, 70];

// let total = 0;

// for (const num of arr) {
//   console.log(`total(${total}) += ${num}`);
//   total += num;
// }

// console.log(total);

// for (let friend of friends) {
//   console.log(friend);
//   console.log(friends);
// }
// ===========================================

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const nums = values.split(' ');
// const width = +nums[0];
// const height = +nums[1];
// const s = width * height;
// console.log(s);

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1}) ${fruits[i]}`);
// }
