
// The OR(||) operator just looks for truthy value to return 

true || false                 // true
false || false || true        // true
false || true || false        // true
undefined || 2 || false       // 2
undefined || null || ''       // ''
undefined || 'Rizwan'         // 'Rizwan'

// The AND(&&) operator just looks for falsy value to return 

true && false                 // false
false && false && true        // false
false && true && false        // false
undefined && 2 && false       // undefined
undefined && null && ''       // undefined
undefined && 'Rizwan'         // undefined
'Salman' && 'Rizwan'          // 'Rizwan'

// The NOT (!) operator toggle the value to the opposite one

!true                         // false
!false                        // true
!(5 == 5)                     // false
