# Bài 6
*_NOTE_*
- Câu lệnh chạy ở VSCode terminal và terminal ngoài là giống nhau
- Chỉ khác nhau ở vị trí thư mục
- Terminal ngoài -> Mặc định ở thư mục home
- Terminal VSCode -> Mở sẵn ở thư mục đang đứng
## 1. Câu lệnh git
- Xóa nhánh: `git branch -D <tên nhánh>`  
 *_NOTE_*: Nguyên tắc xóa nhánh là hiện tại không đứng ở nhánh đó  
 ## 2. Object  
 ### 2.1 Khai báo
 - Cách 1 -> Phổ biến
 ```javascript
 const <tên biến>= {
    <tên_thuộc_tính>: <giá_trị_thuộc_tính>,
    <tên_thuộc_tính>: <giá_trị_thuộc_tính>,
    ....
 };
```
    - Ví dụ:
```javascript
    const sinhVien={
        id: "SV001",
        ten:"VuiTran"
    };
    const sinhVien={
    id: "SV001",
    diaChi: {
        phuong:"YenHoa",
        thanhPho:"HaNoi"
    }
};
    console.log(sinhVien.id);
    console.log(sinhVien["id"]);
    console.log(sinhVien.diaChi.phuong);
    console.log(sinhVien["diaChi"]["phuong"]);
```
- Cách 2: Dùng new Object()
 ```javascript
let sinhvien=new Object();
sinhvien.id="SV001";
sinhvien.ten="VuiTran";
```
### 2.2 Quy tắc đặt tên key
- Thường là kiểu string
- Có 2 cách viết
    - name: "VuiTran" -> Nếu key ko có dấu cách thì ko cần ngoặc đơn/ngoặc kép
    - "full name": "VuiTran" -> Nếu key có dấu cách thì cần dấu ngoặc đơn/ngoặc kép
### 2.3 Truy xuất dữ liệu
- `console.log(sinhvien.id)` -> key ko có dấu cách thì dùng "."
- `console.log(sinhvien["full name"])` -> key có dấu cách thì dùng cặp ngoặc []
## 3. Array
### 3.1 Khai báo
- Cách 1 -> Phổ biến
```javascript
 const <tên mảng>=["Phần tử 1","Phần tử 2",...]
```
    - Ví dụ:
```javascript
    const monHoc=["Toán","Lý","Hóa"];
```
_*NOTE_*  
    - Khai báo mảng thì tên biến để số nhiều  
    - Mỗi phần từ trong mảng có một vị trí(index) bắt đầu từ 0. 
    - Array có thể có nhiều kiểu dữ liệu khác nhau nhưng trong thực tế nên giữ các phần tử cùng kiểu dữ liệu để dễ xử lý  
    - Lấy độ dài của mảng: `array.length`
- Cách 2: Dùng new Array();
```javascript
    const monHoc=new Array("Toán","Lý","Hóa");
```
- Ví dụ về mảng có phần tử là object
```javascript
const listSinhVien=[
    {
    id:"SV001",
    name:"Ten SV1",
    diaChi:{
        phuong:"YenHoa",
        thanhPho:"Ha Noi"
    }
    },
    {
    id:"SV002",
    name:"Ten SV2",
    diaChi:{
        phuong:"CauGiay",
        thanhPho:"Ha Noi"
    }
    }
];
console.log(listSinhVien[0]); 
--> In ra
{
  id: 'SV001',
  name: 'Ten SV1',
  diaChi: { phuong: 'YenHoa', thanhPho: 'Ha Noi' }
}
console.log(listSinhVien[0].diaChi.phuong);
--> In ra
`YenHoa`
console.log(listSinhVien[1]["diaChi"]["thanhPho"]);
--> In ra
`Ha Noi`
```
### 3.2 Truy xuất dữ liệu
- Dùng index -> `console.log(monHoc[0]);`
### 3.3 Các lệnh với mảng
- Thay đổi giá trị
    `monHoc[0]="Anh";` -> Gán lại
- Add phần tử vào đầu
    `monHoc.unshift("CN");`//có thể thêm nhiều phần tử cùng lúc `monHoc.unshift("Sinh","GDCD");`
- Xóa phần tử ở đầu
    `monHoc.shift();`
- Add phần tử vào cuối
    `monHoc.push("Thể dục");`
- Xóa phần tử ở cuối
    `monHoc.pop();`
### 3.4 Vòng lặp với mảng
```javascript
for (let i=0; i<monHoc.length;i++){
    console.log(monHoc[i]);
}
```
## 4. Hàm
- Là một khối lệnh được đặt tên, có thể gọi lại nhiều lần mà không cần viết lại code
### 4.1 Khai báo
```javascript
function tinhDienTich(dai, rong){
    console.log(`Dien tich hinh chu nhat voi chieu dai ${dai} x chieu rong ${rong} la: ${dai*rong}`);
};
```
### 4.2 Sử dụng
- Gọi hàm: `tinhDienTich(3,5);`