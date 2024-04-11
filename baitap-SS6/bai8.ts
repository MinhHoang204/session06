let firstName: string = "john";
let lastName: string = "doe";

// Kiểm tra và viết hoa chữ cái đầu trong hai chuỗi
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
// Ghép chuỗi
let fullName: string = firstName + " " + lastName;
console.log(fullName); 