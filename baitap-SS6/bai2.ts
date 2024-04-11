let userName: string = "John"; // Khai báo và gán giá trị là chuỗi
console.log(userName);
if (typeof userName === "string") { // Kiểm tra kiểu dữ liệu của biến
    userName = "123"; // Gán lại giá trị là một số
    console.log(userName); // In ra 123
} else {
    console.log("userName is not a string");
}