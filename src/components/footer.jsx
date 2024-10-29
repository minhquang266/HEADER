// footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-4 footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-4 px-4">

        {/* Mã QR và liên kết tải ứng dụng */}
        <div className="self-start flex flex-col items-center"> {/* Thay đổi ở đây để căn giữa */}
          <h4 className="text-md font-semibold mb-2 text-center">Tìm việc làm trên ứng dụng Chợ Tốt</h4>
          <div className="flex items-center gap-2">
            <img
              src="https://static.chotot.com/storage/default/group-qr.webp"
              alt="QR Code"
              className="w-16 h-16" // Kích thước QR Code nhỏ hơn
            />
            <div className="flex flex-col items-center space-y-2 ml-2">
              <img
                src="https://static.chotot.com/storage/default/ios.svg"
                alt="App Store"
                className="w-20 h-6"
              />
              <img
                src="https://static.chotot.com/storage/default/android.svg"
                alt="Google Play"
                className="w-20 h-6"
              />
            </div>
          </div>
        </div>

        {/* Phần liên kết về việc làm tốt */}
        <div className="self-start">
          <h4 className="text-md font-semibold mb-2">Về Việc Làm Tốt</h4>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:underline">Về Việc Làm Tốt</a></li>
            <li><a href="/rules" className="hover:underline">Quy chế hoạt động sàn</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Chính sách bảo mật</a></li>
            <li><a href="/dispute-resolution" className="hover:underline">Giải quyết tranh chấp</a></li>
            <li><a href="/terms" className="hover:underline">Điều khoản sử dụng</a></li>
          </ul>
        </div>

        {/* Liên kết mạng xã hội và chứng nhận */}
        <div className="self-start">
          <h4 className="text-md flex space-x-2 font-semibold mb-2">Liên Kết</h4>
          <div className="flex space-x-2 mb-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://static.chotot.com/storage/default/facebook.svg" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://static.chotot.com/storage/default/youtube.svg" alt="YouTube" className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://static.chotot.com/storage/default/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>

          <h4 className="text-md font-semibold mb-2">Chứng nhận</h4>
          <a href="http://online.gov.vn/Home/WebDetails/84494" target="_blank" rel="noopener noreferrer">
            <img src="https://static.chotot.com/storage/default/certificate.webp" alt="Chứng nhận" className="w-24 h-6" />
          </a>
        </div>

      </div>

      {/* Thông tin công ty ở phần dưới */}
      <div className="text-center mt-4 text-xs text-gray-500 px-4">
        <p>CÔNG TY TNHH CHỢ TỐT - Người đại diện theo pháp luật: Nguyễn Trọng Tấn; GPDKKD: 0312120782 do sở KH & ĐT TP.HCM cấp ngày 11/01/2013;</p>
        <p>Giấy phép hoạt động dịch vụ việc làm: Số 33035/2021/03/SLEĐTBXH-VLATLĐ cấp ngày 15/10/2021;</p>
        <p>Địa chỉ: Tầng 18, Tòa nhà Flemington, 182 Lê Đại Hành, Phường 15, Quận 11, TP. Hồ Chí Minh, Việt Nam</p>
        <p>Email: trogiup@chotot.vn - Tổng đài CSKH: 19003003 (1.000đ/phút)</p>
      </div>
    </footer>
  );
};

export default Footer;