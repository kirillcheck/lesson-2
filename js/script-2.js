let money = +prompt('"Ваш бюджет на месяц'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    savings: false,
    expenses: {},
    optionalExpenses: {},
    income: []

};

// Цикл for 
// for (let i = 0; i < 2; i++) {
//     let a = prompt("введите обязательно статью расходов в этом месяце ", ''),
//         b = prompt("Во сколько обойдется?", '');



//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//      i--;
//      alert("некорректный ввод, повторите попытку!");
//     }
// };

// Цикл for 



// // Цикл while
// let i = 0;
// while (i < 1) {
//     let a = prompt("введите обязательно статью расходов в этом месяце ", ''),
//         b = prompt("Во сколько обойдется?", '');
//     i++;
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         alert("некорректный ввод, повторите попытку!");
//         i--;

//     }
// }
// // Цикл while


// // цикл while 
// function validate() {
//     let i = 0;
//     let a = prompt("введите обязательно статью расходов в этом месяце ", ''),
//         b = prompt("Во сколько обойдется?", '');

//     while (i < 2) {
//         i++;
//         if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//             a != '' && b != '' && a.length < 50) {
//             console.log('done');
//             appData.expenses[a] = b;
//         } else {
//            alert( "некорректный ввод, повторите попытку!" );
//           return validate();

//         }
//     }
// }
// validate();

// // цикл while 









appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log(" Высокий уровень достатка ");
} else {
    console.log("Произошла ошибка");
}