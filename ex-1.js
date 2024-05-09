// ให้แก้ไข Bug ที่เกิดขึ้นจาก Code ด้านล่างนี้

// ผลลัพธ์ในปัจจุบันของ Variable accountBalanceMessage เป็น "Your account balance is 40010" ซึ่งไม่ถูกต้อง

// ผลลัพธ์ที่ถูกต้องของ Variable accountBalanceMessage ต้องเป็น "Your account balance is 410"

let accountBalance = 400;
let depositAmountFromUser = "10";


accountBalance = accountBalance + Number(depositAmountFromUser);

let accountBalanceMessage = "Your account balance is " + accountBalance;

console.log(accountBalanceMessage);
