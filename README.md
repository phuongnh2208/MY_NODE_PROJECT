# MY NODE PROJECT

Dự án backend API được xây dựng bằng Node.js với Express framework, hỗ trợ authentication và quản lý dữ liệu.

## Giới thiệu

Đây là một dự án Node.js backend API thực hành với các tính năng authentication, routing, và tổ chức code theo kiến trúc modular. Dự án sử dụng bcrypt để mã hóa password và có cấu trúc rõ ràng phù hợp cho việc mở rộng.

## Công nghệ sử dụng

### Core Technologies
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **JavaScript** - 100%

### Security & Authentication
- **bcrypt 6.0.0** - Password hashing và encryption

### Other Libraries
- **dotenv** - Quản lý environment variables (có file .env)

## Cấu trúc thư mục

```
MY_NODE_PROJECT/
├── config/              # File cấu hình (database, app settings)
├── src/
│   ├── apps/           # Các module ứng dụng chính
│   ├── bin/            # File khởi động server
│   ├── common/         # Utilities và helpers dùng chung
│   ├── libs/           # Thư viện tự viết
│   └── routers/        # Định nghĩa API routes
├── .env                # Environment variables (không commit)
├── package.json        # Project dependencies
└── node_modules/       # Dependencies đã cài đặt
```

## Yêu cầu hệ thống

- Node.js phiên bản 18.x trở lên (yêu cầu của bcrypt)
- npm hoặc yarn
- Database (tùy theo cấu hình trong config/)

## Cài đặt

1. Clone repository về máy:

```bash
git clone https://github.com/pulapily2208/MY_NODE_PROJECT.git
cd MY_NODE_PROJECT
```

2. Cài đặt dependencies:

```bash
npm install
```

3. Cấu hình environment variables:

Tạo file `.env` trong thư mục gốc (hoặc chỉnh sửa file có sẵn):

```env
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=my_database
DB_USER=your_username
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
```

## Chạy ứng dụng

### Chế độ Development

```bash
npm start
```

hoặc nếu có nodemon:

```bash
npm run dev
```

### Chế độ Production

```bash
NODE_ENV=production npm start
```

Server sẽ chạy tại `http://localhost:3000` (hoặc port được cấu hình trong .env)

## API Endpoints

### Authentication
```
POST /api/auth/register    - Đăng ký tài khoản mới
POST /api/auth/login       - Đăng nhập
POST /api/auth/logout      - Đăng xuất
GET  /api/auth/profile     - Lấy thông tin user
```

### Other Endpoints
```
GET  /api/...              - Các endpoints khác tùy ứng dụng
```

(Cập nhật chi tiết các endpoints theo dự án của bạn)

## Tính năng chính

### Authentication & Security
- Mã hóa password với bcrypt
- Hash password với salt rounds
- Secure password storage

### API Architecture
- RESTful API design
- Modular routing structure
- Middleware support
- Error handling

### Code Organization
- Separation of concerns
- Reusable libraries
- Configuration management
- Environment-based settings

## Cấu trúc Code

### Config Directory
Chứa các file cấu hình:
- Database configuration
- Application settings
- Environment-specific configs

### Source Directory

**apps/**: Modules chính của ứng dụng
- User management
- Authentication
- Business logic modules

**bin/**: Server initialization
- HTTP server setup
- Port configuration

**common/**: Shared utilities
- Helper functions
- Constants
- Common middleware

**libs/**: Custom libraries
- Database connection
- Custom utilities
- Third-party integrations

**routers/**: API routes
- Route definitions
- Route handlers
- API versioning

## Environment Variables

Các biến môi trường cần thiết:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment | `development` / `production` |
| `DB_HOST` | Database host | `localhost` |
| `DB_PORT` | Database port | `5432` |
| `DB_NAME` | Database name | `my_database` |
| `DB_USER` | Database user | `postgres` |
| `DB_PASSWORD` | Database password | `your_password` |
| `JWT_SECRET` | JWT secret key | `your_secret_key` |

## Security Best Practices

- Không commit file `.env` vào git
- Sử dụng bcrypt cho password hashing
- Validate input data
- Implement rate limiting
- Use HTTPS trong production
- Keep dependencies updated

## Testing

```bash
npm test
```

## Linting

```bash
npm run lint
```

## Scripts

Các lệnh npm có sẵn:

- `npm start` - Khởi động server
- `npm run dev` - Development với auto-reload
- `npm test` - Chạy tests
- `npm run lint` - Kiểm tra code style

(Kiểm tra package.json cho các scripts chi tiết)

## Database

Dự án hỗ trợ kết nối với database. Cấu hình database trong thư mục `config/`.

Các bước setup database:
1. Tạo database
2. Cấu hình connection trong .env
3. Chạy migrations (nếu có)
4. Seed data (nếu cần)

## Deployment

### Chuẩn bị
1. Set NODE_ENV=production
2. Cấu hình production environment variables
3. Setup database production
4. Configure reverse proxy (nginx)

### Deploy lên server
```bash
npm install --production
NODE_ENV=production npm start
```

## Troubleshooting

### Lỗi khi cài đặt bcrypt
Nếu gặp lỗi khi cài bcrypt, cần cài build tools:

**Windows:**
```bash
npm install --global windows-build-tools
```

**Linux:**
```bash
sudo apt-get install build-essential
```

**macOS:**
```bash
xcode-select --install
```

## Đóng góp

Đây là dự án cá nhân để thực hành. Mọi góp ý và đóng góp đều được chào đón!

## Liên hệ

- GitHub: [@pulapily2208](https://github.com/pulapily2208)
- Repository: [MY_NODE_PROJECT](https://github.com/pulapily2208/MY_NODE_PROJECT)

## License

Private project - For learning purposes only

## Ghi chú

Dự án này được tạo ra cho mục đích học tập và thực hành Node.js backend development với các best practices về security, authentication và code organization.
