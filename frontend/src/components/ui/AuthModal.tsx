import { useEffect } from 'react';

interface AuthModalProps {
  open: boolean;
  mode?: 'login' | 'register';
  onClose: () => void;
  onSwitchMode?: (m: 'login' | 'register') => void;
}

export default function AuthModal({ open, mode = 'login', onClose, onSwitchMode }: AuthModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const title = mode === 'login' ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ';
  const cta = mode === 'login' ? 'ĐĂNG NHẬP' : 'TIẾP TỤC';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-[#1f1f1f] p-8 text-white shadow-2xl">
        <button
          aria-label="Đóng"
          className="absolute right-4 top-4 text-2xl opacity-70 hover:opacity-100"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="mb-2 text-center text-2xl font-extrabold tracking-wide">{title}</h2>
        <p className="mb-6 text-center text-sm opacity-80">
          Bạn chưa có tài khoản? Không cần đăng ký. Đăng nhập nhanh với Beauty Box bằng số điện thoại.
        </p>

        <div className="mb-4">
          <label className="mb-2 block text-sm opacity-80">Số điện thoại</label>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#2a2a2a] px-3 py-2">
            <span className="opacity-80">+84</span>
            <input
              type="tel"
              placeholder="Nhập số của bạn"
              className="w-full bg-transparent outline-none placeholder:opacity-50"
            />
          </div>
        </div>

        <button className="mb-3 w-full rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 py-3 font-semibold text-white">
          {cta}
        </button>

        <p className="mb-2 text-center text-xs opacity-70">*Vui lòng không huỷ đơn hàng khi đã thanh toán*</p>

        <p className="text-center text-xs">
          Đăng nhập ngay để mua sắm dễ dàng hơn, sử dụng những tiện ích mới nhất và tận hưởng thêm nhiều ưu đãi đặc quyền dành riêng cho thành viên Beauty Box.
        </p>

        {onSwitchMode && (
          <div className="mt-6 text-center text-sm">
            {mode === 'login' ? (
              <button className="underline" onClick={() => onSwitchMode('register')}>Chưa có tài khoản? Đăng ký</button>
            ) : (
              <button className="underline" onClick={() => onSwitchMode('login')}>Đã có tài khoản? Đăng nhập</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

