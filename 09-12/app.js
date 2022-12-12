// let students = [
//   { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//   { id: 2, year: 2000, name: "Asilbek Topilov" },
//   { id: 3, year: 2002, name: "Najmiddin Nazarov " },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra " },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
// ];

// const updateUser = ({ id, key, value }) => {
//   let res = students.map(
//     (usr) => (usr.id === id ? { ...usr, [key]: value } : "hey")
//     // usr.id === id ? { ...usr, [key]: value } : usr
//   );
//   return (students = res);
// };

// // updateUser({ id: 3, key: "name", value: "Gulchapchap" });

// const addUser = (user) => {
//   return (students = [...students, user]);
// };

// const deleteStudent = (id) => {
//   let res = students.filter((v) => v.id !== id);
//   return (students = res);
// };

// const sortByAlphabet = () => {
//   let res = students.sort((a, b) => a.name.localeCompare(b.name));
//   return (students = res);
// };

// const sortByYear = () => {
//   let res = students.sort((a, b) => a.year - b.year);
//   return (students = res);
// };

// // name = 'ov'
// const sortByInputName = (name) => {
//   let res = students.filter((value) => value.name.includes(name));
//   return (students = res);
// };
// // name = 'ov'
// const sortByInputYear = (year) => {
//   let res = students.filter((value) => `${value.year}`.includes(year));
//   return (students = res);
// };
// const Filter = ({ value: input, type }) => {
//   let res = students.filter((value) => `${value[type]}`.includes(input));
//   return (students = res);
// };

// addUser({ id: 9, year: 2007, name: "Eshmat Eshmatov" });

// deleteStudent(4);
// deleteStudent(6);

// sortByAlphabet();
// sortByYear();
// sortByInputName("Muhammad");
// sortByInputYear(1995);
// Filter({ value: 1995, type: "year" });
// Filter({ value: "Muhammad", type: "name" });
// // console.log(students);

// let str1 = "Webbrain Academy"; // web
// let str2 = "bew"; // web
// let res = {};

// for (v of str1) {
//   if (v in res) ++res[v];
//   else res[v] = 1;
// }
// console.log(res);

// if (str1.length === str2.length) {
//   console.log(
//     str1.toLowerCase().split("").sort().join(""),
//     str2.toLowerCase().split("").sort().join("")
//   );
//   return (
//     str1.toLowerCase().split("").sort().join("") ===
//     str2.toLowerCase().split("").sort().join("")
//   );
// } else return false;

// let ar = [2, 3, 4, 5, 1, 2, 2];
// [2, 3, 1, 1, 2, 2];
// [1, 1, 1, 2, 2];
// [1, 1, 1];
// [1];
// let Object = {
// banana: 1,
// orange: 2,
// meat: 4,
// };

// let doublePrices = Object.fromEntries(
// // convert prices to array, map each key/value pair into another pair
// // and then fromEntries gives back the object
// Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );

// alert(doublePrices.meat); // 8

// ===================
// let salaries = {
//      "John": 100,
//      "Pete": 300,
//      "Mary": 250
//    };
   
//    alert( sumSalaries(salaries) ); // 650