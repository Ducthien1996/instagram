## Checklist cho MR
Tick vào trong checklist các mục đã làm. PM xác nhận pass hết các điều kiện dưới đây thì nhấn approve

### [Developer]
   - [ ] Đã xác nhận source code không có các thay đổi không cần thiết, như là 
      - Khoảng trắng thừa 
      - File thừa, hoặc thay đổi trong code không liên quan tới task 
  - [ ] Đã đặt **Title MR** và **commit message** theo định dạng `Task #{ISSUE_NUMBER} - {ISSUE_CONTENTS}`
    - Trong đó :
      - `#{ISSUE_NUMBER}` là Task ID trên Zenhub.
      - `#{ISSUE_CONTENTS}` là nội dung ngắn gọn mô tả task
    - V/d: `Task #1234 - Hôm nay trời nhẹ lên cao`
  - [ ] Đã sefl review
  - [ ] Đã self-test và điền kết quả vào checklist 
  - [ ] Đã viết đầy đủ thông tin trên Zenhub. Mục nào không có thì ghi "Không", không để giá trị mặc định
  - [ ] Đã viết Release Notes. Đảm bảo release khi có lỗi xảy ra có thể rollback ngay lập tức 
  - [ ] Đã chuyển Zenhub issue sang trạng thái **Review/QA** (Coding done)

### [Tester]
  - [ ] Đã test lại và xác nhận KHÔNG GÂY ẢNH HƯỞNG TỚI CHỨC NĂNG KHÁC
  - [ ] Đã cập nhật testcase result vào Zenhub
  - [ ] Đã chuyển trạng thái sang **Done**

### [PM]
  - [ ] Xác nhận khách hàng đã đồng ý release
  - [ ] Xác nhận Release Notes không có vấn đề gì


