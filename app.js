"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
let guest_list = ['Ali', 'Arhaam', 'saira', 'sara'];
exports.guest_list = guest_list;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam'+ guest_list[i]+ ',\nWe invited you on dinner tomorrow,\nThanks You\n')
// }
let not_present = 'Ali';
let new_guest = 'Anas';
guest_list[0] = new_guest;
//  for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam'+ guest_list[i]+ ',\nWe invited you on dinner tomorrow,\nThanks You\n')
// }
guest_list.unshift('qunoot', 'hoorain');
//  for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam'+ guest_list[i]+ ',\nWe invited you on dinner tomorrow,\nThanks You\n')
// }
console.log('\nUnfortunately we can not arrange big table , Only two people allow.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam.${remove_guest} you are not invited for dinner,`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nYesyou are still invided on tomorrow dinner\nThanks you\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
