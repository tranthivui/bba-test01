# Bài 1
## 1. nvm(node version manager): Dùng để quản lý các phiên bản node.js
Tại sao lại cần nvm  
Ví dụ: Làm project A cần phiên bản node 20.0.0, làm project B cần phiên bản node 25.0.0
-> nếu ko cài nvm thì khi làm project A phải cài lại bản node 20.0.0, khi làm project B thì phải gỡ bản node 20.0.0 ra để cài bản 25.0.0     
==> Mất thời gian, nvm quản lý các node version, khi nào cần thì chuyển đổi sang version cần dùng.

## 2. npm(node package manager): quản lý các package của node

## 3. Git: quản lý source code  
### 3.1 Config
    - Config username(tên người dùng): `git config --global user.name "<tên bạn>"`
    - Config email(địa chỉ email): `git config --global user.email "<email của bạn>"`
    - Config branch default(nhánh mặc định): `git config --global init.defaultBranch main`. 
## 4. Github: Chia sẻ code, làm việc nhóm
## 5. VSCode=IDE: Công cụ để code  
    5.1 Cài đặt extention  
        - VS Code -> Extendtion -> Tìm playwright của microsoft -> Cài đặt  
        - Vào TEST EXPLORE -> Playwright -> Tích chọn "Show browser"  
        - Đổi terminal mặc đặc về Git Bash(windown): Ctrl+Ship+P -> Tìm kiếm Termianl default -> Chọn Terminal: Select Default Profile -> Chọn git bash. 

## 6. Cài đặt playwright. 
- Tạo thư mục -> Mở thư mục trong terminal -> Chạy câu lệnh `npm init playwright@latest`. 