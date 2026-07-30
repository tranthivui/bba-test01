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

### 4.3 Một số hàm trong array
#### 4.3.1 map()
- map(): tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

const students = ['An', 'Binh', 'Cuong'];
const studentList = students.map((name, index) => ({
    id: index + 1,
    name: name,
    code: `SV001${index + 1}`
}));
console.log(studentList);
```
*_Note:_* Cú pháp array.map((element, index, array) => {});
- element: giá trị phẳn tử
- index: vị trí của phần tử hiện tại
- arrray: mảnh đang được duyệt

#### 4.3.2 filter()
- filter(): Tạo mảng mới chỉ chứa các phần tử thỏa mãn điều kiện trong hàm callback. Trả về mảng đã được lọc
```javascript
const numbers=[1,2,3,4,5,6,7,8,9,10];
const evenNumber=numbers.filter(num => num%2===0);
console.log(numbers);
console.log(evenNumber);
```
#### 4.3.3 find()
- find(): Tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện. Trả về undefined nếu không tìm thấy
```javascript
const numbers=[1,2,3,4,5,6,7,8,9,10];
const evenNumber=numbers.find(num => num%2===0);
console.log(evenNumber);
```
#### 4.3.4 reduce()
- reduce(): Duyệt qua mảng và tích lũy các phần tử thành một giá trị duy nhất(số, chuỗi, object…) dựa trên hàm callback
```javascript
const numbers=[1,2,3,4,5,6,7,8,9,10];
const sum=numbers.reduce((accumulator,current) => {
    console.log(`accumulator: ${accumulator}, current: ${current}`);
    return accumulator+current;
},0);
console.log(sum);
```
- Đầu tiên gán accumulator=0
- Sau mỗi vòng chạy thì lấy accumulator+giá trị hiện tại đang duyệt
#### 4.3.4 some()
- some(): Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện hay không. Trả về true/false
*_NOTE:_* Dừng ngay khi tìm thấy
```javascript
const numbers=[1,2,3,4,5];
const hasEve=numbers.some(number => number%2===0);
if (hasEve){
    console.log("Co so chan");
}else{
    console.log("Ko co so chan")
}
```
#### 4.3.5 every()
- every(): Kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện hay không. Trả về true/false
```javascript
const numbers=[1,2,3,4,5];
const hasEve=numbers.every(number => number%2===0);
if (hasEve){
    console.log("Tat ca la so chan");
}else{
    console.log("Co phan tu la so le")
}
```
#### 4.3.6 sort()
- sort(): Sắp xếp các phần tử trong mảng theo thứ tự(mặc định là alphabet/tăng dần). Thay đổi mảng gốc
```javascript
const numbers=[1,2,5,4,3];
console.log(`Mang truoc khi sort: ${numbers}`);
numbers.sort();
console.log(`Mang sau khi sort: ${numbers}`);
```
*_NOTE:_* Nếu mảng [10, 5, 40, 25, 1000, 1] -> khi sort thì sẽ là [1,10,1000,25,40,5] -> bị sai -> cần dùng compare function
```javascript
const numbers=[10,5,40,25,1000,1];
const sortIncreare=numbers.map(num => num);
const sortDecreare=numbers.map(num => num);
console.log("*******Sort sai*******");
console.log(`Mang truoc khi sort: ${numbers}`);
numbers.sort();
console.log(`Mang sau khi sort: ${numbers}`);

console.log("*******Sort dung tang dan*******");
console.log(`Mang truoc khi sort: ${sortIncreare}`);
sortIncreare.sort((a,b) => a-b);
console.log(`Mang sau khi sort: ${sortIncreare}`);

console.log("*******Sort dung giam dan*******");
console.log(`Mang truoc khi sort: ${sortDecreare}`);
sortDecreare.sort((a,b) => b-a);
console.log(`Mang sau khi sort: ${sortDecreare}`);
```
#### 4.3.7 push()
- push(): Thêm một hoặc nhiều phần tử vào cuối mảng. Thay đổi mảng gốc và trả về độ dài mới
```javascript
const numbers=[10,5,40,25,1000,1];
numbers.push(30,60,90);
console.log(numbers);
```
#### 4.3.8 pop()
- pop(): Xóa và trả về phần tử cuối cùng của mảng. Thay đổi mảng gốc và làm giảm độ dài.
Nếu mảng rỗng và Pop thì trả về undefined
```javascript
const numbers=[10,5,40,25,1000,1];
numbers.pop();
console.log(numbers);
```
#### 4.3.9 shift()
- shift(): Xóa và trả về phần tử đầu tiên của mảng. Thay đổi mảng gốc và làm giảm độ dài.
Nếu mảng rỗng và shift thì trả về undefined
```javascript
const numbers=[10,5,40,25,1000,1];
numbers.shift();
console.log(numbers);
```
#### 4.3.10 unshift()
- unshift: Thèm một hoặc nhiều phần tử vào đầu mảng. Thay đổi mảng gốc và trả về độ dài mới của mảng
```javascript
const numbers=[10,5,40,25,1000,1];
numbers.unshift(90,102,88,50);
console.log(numbers);
```