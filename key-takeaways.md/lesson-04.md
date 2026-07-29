# Bài 4
## 1. Câu điều kiện. 
```javascript
if (<điều kiện>) {
    // code... -> Điều kiện đúng chạy đoạn code này
}
```
```javascript
if (<điều kiện>) {
    // code... -> Điều kiện đúng chạy đoạn code này
}else{
    //code2 -> Điều kiện sai thì chạy đoạn code này
}
```
*_NOTE_*: Khi chia điều kiện thì đi theo 1 chiều xuôi hoặc ngược để tránh bị sót case  
## 2. Vòng lặp  
- Dùng lặp lại 1 đoạn logic. Có thể lặp một số lần nhất định, hoặc lặp vô hạn, tùy theo điều kiện dừng.
- Cú pháp
```javascript
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
    // code... -> Điều kiện đúng chạy đoạn code này
}
```
    - Điều kiện khởi tạo: chạy một lần duy nhất, khi vòng lặp bắt đầu  
    - Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng lại  
    - Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm  
- Ví dụ:
```javascript
for (let i=0; i<=10; i++) {
    console.log("Xin chao");
}
```
## 3. Convention
### 3.1 Quy tắc đặt tên
- snake_case: tất cả các chữ viết thường, cách nhau bằng dấu gạch dưới(xin_chao_toi_la_vui) -> 
- kebab-case: tất cả các chữ viết thường, cách nhau bởi dấu gạch ngang(xin-chao-toi-la-vui) -> thường dùng đặt tên file  
- camelCase: chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu tiên(xinChaoToiLaVui) -> thường dùng đặt tên biến  
- PascalCase: tất cả các chữ cái đầu viết hoa(XinChaoToiLaVui) -> thường dùng đặt tên class  
- UPPER_CASE: viết hoa tất cả -> thường dùng cho hằng số
### 3.2 Quy tắc viết message commit
- feat: thêm tính năng mới -> feat: add code for test 3  
- chore: việc vặt(đổi tên file, đổi tên biến...) -> chore: remove redundant files  
- fix: sửa lỗi -> fix: test case authentication  
*_NOTE_*: message nên
- Ngắn gọn(<50 kí tự)
- Mô tả trực tiếp vấn đề
- Thì hiện tại đơn
## 4. Câu lệnh git  
- git log: xem lịch sử commit -> commit cuối cùng hiển thị trước