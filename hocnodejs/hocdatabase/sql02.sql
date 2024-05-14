-- JOIN TABLE
-- SELECT * FROM users
-- INNER JOIN groups
-- ON users.group_id = groups.id

-- LEFT
-- SELECT * FROM users
-- LEFT JOIN groups
-- ON users.group_id = groups.id

-- RIGHT
-- SELECT * FROM users
-- RIGHT JOIN groups
-- ON users.group_id = groups.id

SELECT users.*, groups.name AS group_name FROM users
INNER JOIN groups
ON users.group_id = groups.id

-- Câu 1: Hiển thị thông tin các users của group có tên chứa từ khóa 'admin'
SELECT users.* FROM users
INNER JOIN groups
ON users.group_id = groups.id
WHERE LOWER(groups.name) LIKE LOWER('%admin%')

-- Câu 2 viết câu lệnh SQL truy vấn trả về danh sách user có 
-- tên group chứa từ khóa 'admin'
-- và trạng thái true
-- Yêu cầu thông tin: Thông tin bài viết, tên user, email 
SELECT posts.*, users.name AS username, users.email FROM posts
INNER JOIN users
ON posts.user_id = users.id
INNER JOIN groups
ON users.group_id = groups.id
WHERE users.status = true AND LOWER(groups.name) LIKE LOWER('%admin%')

-- Sắp xếp: ORDER BY
SELECT * FROM posts ORDER BY created_at DESC, id ASC;

-- Giới hạn: LIMIT, OFFSET
SELECT * FROM posts ORDER BY created_at DESC, id ASC LIMIT 2 OFFSET 1;
