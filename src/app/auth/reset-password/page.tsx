"use client";

import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 bg-input">
      <div className="bg-background p-8 rounded-xl shadow-md max-w-md w-full border border-border">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-primary mb-1">
          Đặt lại mật khẩu
        </h1>
        <p className="text-sm text-muted text-center mb-6">
          Vui lòng nhập mật khẩu mới cho tài khoản của bạn
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Mật khẩu mới
            </label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              required
              placeholder="Nhập mật khẩu mới"
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-new-password"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Xác nhận mật khẩu mới
            </label>
            <input
              type="password"
              id="confirm-new-password"
              name="confirm-new-password"
              required
              placeholder="Nhập lại mật khẩu"
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md font-medium transition-colors"
            >
              Cập nhật mật khẩu
            </button>
          </div>
          
          <div className="flex items-center justify-center mt-2">
            <button
              type="button"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              Xác nhận mật khẩu mới
            </button>
          </div>
        </form>

        {/* Link to login */}
        <p className="mt-4 text-center text-sm text-muted">
          Nhớ lại mật khẩu?{" "}
          <Link href="/auth/login" className="text-primary hover:text-primary-dark transition-colors">
            Đăng nhập
          </Link>
        </p>
      </div>
    </section>
  );
}
