import { useState } from 'react';
import { FaSearch, FaBell, FaComments, FaClipboardList, FaChevronDown, FaUserTie } from 'react-icons/fa';
import { Input } from "@/components/ui/input"


import {
  User,
  Users,
} from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  
  const categories = [
    { name: "Bán hàng", link: "/ban-hang" },
    { name: "Nhân viên phục vụ", link: "/nhan-vien-phuc-vu" },
    { name: "Tài xế giao hàng xe máy", link: "/tai-xe-giao-hang-xe-may" },
    { name: "Tạp vụ", link: "/tap-vu" },
    { name: "Pha chế", link: "/pha-che" },
    { name: "Phụ bếp", link: "/phu-bep" },
    { name: "Nhân viên kinh doanh", link: "/nhan-vien-kinh-doanh" },
    { name: "Công nhân", link: "/cong-nhan" },
    { name: "Nhân viên kho vận", link: "/nhan-vien-kho-van" },
    { name: "Bảo vệ", link: "/bao-ve" },
  ];

  return (

    

    <header className="bg-gray-600 p-4 flex flex-col items-center w-full relative z-50">

      {/* Top Links Section */}
      
      <div className=" top-links w-full flex justify-between text-white text-sm mb-4">
        <div className="flex space-x-4">
          <a href="#" className="flex items-center text-white hover:text-gray-300">Chợ Tốt</a>
          <a href="#" className="flex items-center text-white hover:text-gray-300">Nhà Tốt</a>
          <a href="#" className="flex items-center text-white hover:text-gray-300">Chợ Tốt Xe</a>
          <a href="#" className="flex items-center text-white hover:text-gray-300">Việc Làm Tốt</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="flex items-center text-white hover:text-gray-300">Đóng góp ý kiến</a>
          <a href="#" className="flex items-center text-white hover:text-gray-300">Tải ứng dụng</a>
          <a href="#" className="flex items-center text-white hover:text-gray-300">Trợ giúp</a>
          <a href="#" className="flex items-center text-white hover:text-gray-300">
            <FaUserTie className="mr-1" />
            Dành cho nhà tuyển dụng
          </a>
        </div>
      </div>

      {/* Logo and Search Section */}
      {/* Logo and Search Section */}
      <div className="logo-search w-full flex items-center justify-between relative space-x-4">
      <div className="flex items-center">
        <img src="https://static.chotot.com/storage/APP_WRAPPER/logo/job-logo-appwrapper.png" alt="Logo" className="w-48" />
      </div>

  
      <div className="flex items-center space-x-2"> 

    
      <div className="management-dm">
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <span>Danh mục</span> {/* Chữ "Danh mục" */}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="post-job-button w-56">
            <DropdownMenuSeparator />
            <DropdownMenuGroup>   
              <DropdownMenuItem>
                <Users />
                <span>Bán hàng</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users />
                <span>Nhân viên phục vụ</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User />
                <span>Tài xế giao hàng xe</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User />
                <span>Tạp vụ</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users />
                <span>Pha chế</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuItem>
                  <Users />
                  <span>Phụ bếp</span>
                </DropdownMenuItem>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent />
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <User />
                <span>Nhân viên kinh doanh</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User />
              <span>Công nhân</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Users />
              <span>Nhân viên kho vận</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Users />
              <span>Bảo vệ</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>Xem thêm</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      

      <div className=" flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Tìm kiếm của bạn" className="w-96" />
          <Button className="bg-yellow-500 text-white font-bold rounded p-2 hover:bg-yellow-400 ">
            Tìm kiếm
          </Button>
        </div>
      </div>

  {/* Remaining Icons and Links */}
  <div className="flex items-center space-x-6 ml-2">
    <div className="relative flex items-center">
      <FaBell
        className="notification-icon text-xl text-white cursor-pointer hover:text-gray-300 ml-2"
        onClick={toggleNotifications}
      />
      {notificationsOpen && (
        <div className="notification-icon absolute right-0 top-8 bg-white p-2 rounded shadow-lg w-48 flex flex-col z-50">
          <div className="p-2 font-semibold border-b text-center">
            Thông báo
          </div>
          <div className="mt-2 flex flex-col space-y-2 items-center">
            <button className="w-full text-center bg-gray-200 rounded p-2 hover:bg-gray-300 transition duration-150">
              Hoạt động
            </button>
            <button className="w-full text-center bg-gray-200 rounded p-2 hover:bg-gray-300 transition duration-150">
              Tin mới
            </button>
          </div>
        </div>
      )}
  </div>

  <div className="management-link flex items-center text-white">
    <a href="#" className="flex items-center text-white hover:text-gray-300">
      <FaClipboardList className="text-xl" />
      <span className="ml-1">Quản lý tin</span>
    </a>
  </div>

  <div className="login-register flex items-center text-white">
    <a href="#" className="flex items-center text-white hover:text-gray-300">Đăng nhập/Đăng ký</a>
  </div>

  <div className="post-job-button flex items-center">
    <a href="/dang-tuyen">
      <Button className="bg-yellow-500 text-white font-bold rounded p-2 hover:bg-yellow-400 w-36">
        Đăng tuyển
      </Button>
    </a>
  </div>
</div>
</div>
    </header>
  );
}
