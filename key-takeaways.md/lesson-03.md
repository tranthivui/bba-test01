# Bài 3. 
## 1. Kết nối github. 
    - Tạo repo dưới local -> Tạo repository trên github trùng tên với repo dưới local. 
    - Lấy ssh key: cat ~/ .ssh/id_ed25519.pub. 
    - Copy key -> Lên github -> Setting -> SSH àn GPG keys -> New SSH key -> Đặt tên -> Paste key -> Add SSH key. 
    - Push code lên github:  
        - git init(khởi tạo repo 3 vùng: working directory, staging area, repository)
        - git add .(add các file thay đổi sang vùng repository). 
            *_Note_*: git add. `<file1>``<file2>`.. -> add file1, file2
        - git commit -m"init project".(commit code chuẩn bị push lên github). 
        - Lên github -> repository mới tạo -> tab SSH -> copy link  
        - Terminal chạy lệnh: git remote add origin <link ssh>  
        - git push origin main. 
## 2. Các vùng trong git. 
    - working directory: các file mới hoặc file có thay đổi. 
    - staging area: các file đưa vào vùng chuẩn bị commit. 
    - repository: các commit. 
## 3. Câu lệnh check trạng thái file: git status  
## 4. Toán tử so sánh. 
    - So sánh a=b: a==b. 
    - So sánh a<>b: a!==b
## 5. Toán tử logic. 
    - a && b: -> Đúng khi a và b đều đúng
    - a || b: -> Đúng khi a đúng/b đúng/cả a và b đều đúng
## 6. Toán tử một ngôi. 
    - prefix: ++x, --x -> tăng/giảm trước -> trả về sau
    - postfix: x++, x-- -> trả về trước -> tăng/giảm sau