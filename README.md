# Hướng dẫn cấu hình kiểm thử

## Chuẩn bị môi trường

1. Sau khi clone dự án, chạy lệnh sau để cài đặt các gói phụ thuộc:

```bash
npm i
```

2. Chạy lệnh sau để bắt đầu thực thi các ca kiểm thử đang có

```bash
npm test
```

## Mô tả dự án

Dự án được xây dựng trên framework Cucumber.js

Cấu trúc thư mục: 

- features: Nơi chứa kịch bản kiểm thử. Các file có đuôi .feature được viết theo cú pháp Gherkin với ngôn ngữ tiếng Việt (Tìm hiểu thêm tại: https://cucumber.io/docs/gherkin/)
- step_definitions: Nơi chứa định nghĩa mã thực thi cho các bước trong kịch bản kiểm thử (thư mục `features`). Các bước phụ thuộc vào thư viện `selenium-webdriver` (Tìm hiểu thêm tại: https://www.npmjs.com/package/selenium-webdriver)
- page_objects: Nơi chứa các Page Object sử dụng trong mã thực thi ở thư mục `step_definitions`. Các page object này được xây dựng theo Page Object Model Design Pattern.
- support: Nơi chứa các thao tác chuẩn bị trước khi thực thi mã ở thư mục `step_definitions`.
