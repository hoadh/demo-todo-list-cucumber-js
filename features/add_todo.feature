Feature: Là người bận rộn, tôi muốn thêm việc cần làm vào danh sách công việc để lập kế hoạch hằng ngày

  Background:
    Given Mở ứng dụng Todos List

  Scenario: Thêm một việc cần làm vào danh sách
    Given Danh sách việc cần làm ban đầu rỗng
    When Thêm việc 'Viết bài hướng dẫn Cucumber' vào danh sách
    Then Danh sách việc cần làm sẽ có 'Viết bài hướng dẫn Cucumber'