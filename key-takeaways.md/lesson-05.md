# Các câu lệnh với git
1. `git branch <ten-nhanh>` : tạo nhánh mới <ten-nhanh>.
2. `git checkout <ten-nhanh>`: đổi sang nhánh mới <ten-nhanh>.
3. `git checout -b <ten-nanh>`: vừa tạo nhánh mới <ten-nhanh> vừa đổi sang nhánh mới luôn.
4. `git restore --staged <file>`: đưa file <file> từ cùng staging area về vùng working directory.  
    ***NOTE***:  
        - Phải có một commit đầu tiên thì mới dùng được lệnh `git restore --staged <file>`.   
        - Nếu muốn đưa hết file thì dùng lệnh `git restore --staged .`.
5. `git reset HEAD~1`: rollback các file trong commit cuối cùng từ vùng repository về vùng working directory.
6. `git commit --amend -m"message"`: thay đổi commit message.

# Quy trình làm việc
1. Luôn luôn checkout về nhánh main: `git checkout main`.  
2. Pull code từ nhánh main về: `git pull origin main`.  
3. Tạo nhánh mới từ nhánh main: `git checkout -b <ten-nhanh>`.  
4. Làm việc trên nhánh mới tạo
5. Commit code: `git commit -m"message"`.  
6. Push code lên từ nhánh mới tạo: `git push origin <ten-nhanh>`.  
7. Lên github tạo request pull code và gửi link 

# Làm bài tập
1. Tạo một thư mục mới trong thư mục của mình(tests/submissions/27-vuitran) với format: lesson-{number}.  
2. Các file tạo ra trong bài học thì đặt trong thư mục mới này.  
3. Tên nhánh mới tạo theo format: lesson-{number}-{ten-minh}