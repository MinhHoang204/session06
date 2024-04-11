let num1: number = 10;
let num2: number = 5;
let num3: number;
// Cộng
num3 = num1 + num2;
console.log("Tổng:", num3);
// Trừ
num3 = num1 - num2;
console.log("Hiệu:", num3);
// Nhân
num3 = num1 * num2;
console.log("Tích:", num3);
// Chia
num3 = num1 / num2;
console.log("Thương:", num3);
// Thay đổi kiểu dữ liệu
num1 = "10" as unknown as number; // Thay đổi kiểu dữ liệu của num1 thành string
num2 = true as unknown as number; // Thay đổi kiểu dữ liệu của num2 thành boolean
// Thực hiện lại các phép tính và kiểm tra kết quả
// Cộng
num3 = num1 + num2;
console.log("Tổng (sau khi thay đổi kiểu dữ liệu):", num3); // Kết quả sẽ là "101" do TypeScript sẽ cố gắng chuyển đổi kiểu dữ liệu của num2 thành số để thực hiện phép cộng.
// Trừ
// TypeScript sẽ thông báo lỗi vì không thể trừ một giá trị boolean từ một giá trị string hoặc number.
// Nhân
// TypeScript sẽ thông báo lỗi vì không thể nhân một giá trị boolean với một giá trị string hoặc number.
// Chia
// TypeScript sẽ thông báo lỗi vì không thể chia một giá trị boolean cho một giá trị string hoặc number.