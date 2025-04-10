"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 bg-input">
      <div className="bg-background p-8 rounded-xl shadow-md max-w-md w-full border border-border">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-primary mb-1">
          Tạo tài khoản mới
        </h1>
        <p className="text-sm text-muted text-center mb-6">
          Điền thông tin để tạo tài khoản của bạn
        </p>

        {/* Register Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Họ và tên
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="Nhập họ và tên của bạn"
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Tên đăng nhập
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="Chọn tên đăng nhập"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="Nhập email của bạn"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="Tạo mật khẩu"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="Nhập lại mật khẩu"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md font-medium transition-colors"
            >
              Đăng ký
            </button>
          </div>
          
          <div className="flex items-center justify-center mt-2">
            <button
              type="button"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              Xác nhận thông tin
            </button>
          </div>
        </form>

        {/* Link to login */}
        <p className="mt-4 text-center text-sm text-muted">
          Đã có tài khoản?{" "}
          <Link href="/auth/login" className="text-primary hover:text-primary-dark transition-colors">
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </section>
  );
}
