# Bài 2. 
## 1. SSH. 
    1.1 Gen key  
    - `ssh-keygen -t ed25519 -C "<email của mình> -f ~/.ssh/id_ed25519_work"`  
        - ssh-keygen: mặc định. 
        - -t ed25519: thuật toán -> mặc định. 
        - -C <email>: mail công ty/mail cá nhân. 
        - -f: tên file(id_ed25519_work). Nếu là máy công ty thì để mặc định ko cần tên file _(bỏ đoạn -f)_ và cấu hình riêng cho key personal. 
## 2. Cài đặt tự động lưu: File -> Click chọn "Auto save". 
## 3. Cú pháp. 
    3.1 console.log("nội dung") -> có thể dùng nháy đơn hoặc nháy kép. 
    3.2 Comment: // -> bỏ qua không chạy dòng code này. 
## 4. Biến, hằng. 
 ###   4.1 Biến  
    - Có thể thay đổi được. 
    - Khai báo: let <tên biến>=<giá trị>  
 ###   4.2 Hằng  
    - Không thay đổi được. Dùng để khai báo các giá trị không có nhu cầu thay đổi hoặc chỉ dùng một lần. 
    - Khai báo: const <tên hằng> = <giá trị>  
        _*NOTE*_  
            - Mặc định dùng `const` để khai báo giúp code an toàn hơn, dễ đọc hơn. Tránh trường hợp khai báo let, có người nào đó sửa code thay đổi giá trị -> Dẫn đến code sai. 
            - Chỉ dùng `let `khi **chắc chắn** cần gán lại giá trị. 
###    4.3 Kiểu dữ liệu: Có 8 kiểu dữ liệu, chia làm 2 nhóm chính. 
        - Kiểu nguyên thủy. 
            - Number(Số nguyên, số thực->Không phân biệt int/float. Infinity: Số vô hạn->Chia cho 0. NAN: không phải số). 
            - String(Nháy đơn, nháy kép, backtick: dấu huyền cạnh số 1). 
            - Boolen(true/false). 
            - Undefined. 
            - Null. 
            - Symbol. 
            - BigInt. 
        - Kiểu tha chiếu. 
            - Object. 