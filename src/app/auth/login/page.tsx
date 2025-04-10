"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 bg-input">
      <div className="bg-background p-8 rounded-xl shadow-md max-w-md w-full border border-border">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-center text-foreground mb-1">
          Chào mừng trở lại
        </h2>
        <p className="text-sm text-muted text-center mb-6">
          Vui lòng nhập thông tin để đăng nhập.
        </p>

        {/* Login form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="Nhập email của bạn"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="Nhập mật khẩu"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-muted">Ghi nhớ đăng nhập</span>
            </label>
            <Link href="/auth/forgot-password" className="text-primary hover:text-primary-dark transition-colors">
              Quên mật khẩu?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md font-medium transition-colors"
          >
            Đăng nhập
          </button>
        </form>

        {/* Register link */}
        <p className="mt-4 text-center text-sm text-muted">
          Chưa có tài khoản?{" "}
          <Link href="/auth/register" className="text-primary hover:text-primary-dark transition-colors">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </section>
  );
}
