-- Đây là comment của SQL

-- Thêm DỮ LIỆU
-- INSERT INTO users(id, name, email, password, status, created_at, updated_at)
-- VALUES (5, 'User 5', 'user5@gmail.com', '123456', true, NOW(), NOW())

-- INSERT INTO users(id, name, email, password, status, created_at, updated_at)
-- VALUES (3, 'User 3', 'user3@gmail.com', '123456', true, NOW(), NOW())

-- Sửa dữ liệu
-- UPDATE users
-- SET updated_at=NULL
-- WHERE id = 3

-- Xóa dữ liệu
-- DELETE FROM users
-- WHERE id = 1

-- Lọc dữ liệu
-- SELECT *
-- FROM users
-- WHERE LOWER(email) LIKE LOWER('%user 1%') OR LOWER(name) like LOWER('%USER 2%')

INSERT INTO users(id, email, password)
VALUES(6, 'user7@gmail.com', '123456')

