"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 bg-input">
      <div className="bg-background p-8 rounded-xl shadow-md max-w-md w-full border border-border">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-primary mb-1">
          Quên mật khẩu?
        </h1>
        <p className="text-sm text-muted text-center mb-6">
          Nhập email của bạn và chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu.
        </p>

        {/* Form */}
        <form className="space-y-4">
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
              placeholder="Nhập địa chỉ email..."
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md font-medium transition-colors"
            >
              Gửi liên kết đặt lại mật khẩu
            </button>
          </div>
          
          <div className="flex items-center justify-center mt-2">
            <button
              type="button"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              Xác nhận email
            </button>
          </div>
        </form>

        {/* Link to login */}
        <p className="mt-4 text-center text-sm text-muted">
          Nhớ mật khẩu rồi?{" "}
          <Link href="/auth/login" className="text-primary hover:text-primary-dark transition-colors">
            Quay lại đăng nhập
          </Link>
        </p>
      </div>
    </section>
  );
}
