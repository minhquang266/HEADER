import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const JobCard = ({ partnerLabel, jobTitle, salary, company, location, logoSrc }) => {
  return (
    <div className="job-card" style={{ display: 'flex', alignItems: 'flex-start', padding: '15px', border: '1px solid #eaeaea', borderRadius: '5px', margin: '10px 0', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
      <div className="company-logo" style={{ flexShrink: 0, marginRight: '20px' }}>
        <img src={logoSrc} alt={`${company} logo`} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
      </div>
      <div className="job-info" style={{ flexGrow: 1 }}>
        <div className="partner-label" style={{ fontWeight: 'bold', color: '#333', fontSize: '16px' }}>{partnerLabel}</div>
        <div className="job-title" style={{ fontSize: '18px', margin: '5px 0', color: '#555' }}>{jobTitle}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <span className="salary" style={{ color: '#28a745', fontSize: '14px' }}>{salary}</span>
          <span className="company" style={{ color: '#007bff', fontSize: '14px' }}>{company}</span>
          <span className="location" style={{ color: '#6c757d', fontSize: '14px' }}>{location}</span>
        </div>
      </div>
    </div>
  );
};


const Home = () => {

  const [expanded, setExpanded] = useState(false); // State to handle expand/collapse
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const images = [
    'https://cdn.chotot.com/admincentre/sTOUiYGp3vElHpCgC8CqZSmDCvUGlIZ8pp22hv0oysY/preset:raw/plain/f0b942343185c4a7952a42f89ee6b15b-2898000411889697002.jpg',
    'https://cdn.chotot.com/admincentre/HahN_v5InwnUl9LfONnzSeHWJcCHywa4xIw8bPxMRHo/preset:raw/plain/eeae8d68e17ab00943377cadda307a1f-2900136994109972248.jpg',
    'https://cdn.chotot.com/admincentre/PULW81q_zOrYKB10F08EuczIfPs2ItjlI8wCKtL4T8U/preset:raw/plain/e0a9bfc7ae8b3303a5b1317f76758351-2890432289901500220.jpg',
    'https://cdn.chotot.com/admincentre/xcpd8cnYdJ7a_4btPpQdJ5BQEjAz-y6K_gaKMZaq5RI/preset:raw/plain/624e28e4254c2f8d096b89bedb1b5a4d-2901015890122752794.jpg',
    'https://cdn.chotot.com/admincentre/A0dL-ACRpmTfYqRo0aht9akTl_vSHzt4RCUEDE92424/preset:raw/plain/d9daaa667c6fe752f9e71937f8834eaa-2900738657830073071.jpg',
  ];

  const logoSrcs = [
    'https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75',
    'https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75',
    'https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75',
    'https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75',
    'https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75',
    'https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75',
    'https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75',
    'https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75',
  ];

  const employerCards = [
    {
      title: 'Quản lý ứng viên',
      status: <strong>Chưa có tin đăng</strong>,
      iconSrc: 'https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75',
    },
    {
      title: 'Tìm ứng viên mới',
      status: <strong>126072 ứng viên</strong>,
      iconSrc: 'https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75',
    },
    {
      title: 'Trở thành Đối Tác',
      status: <strong>Xem ngay</strong>,
      iconSrc: 'https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75',
    },
    {
      title: 'Gói tuyển dụng',
      status: <strong>Khám phá ngay</strong>,
      iconSrc: 'https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75',
    },
  ];

  const keywords = [
    "Việc Làm Thời Vụ", "Việc Làm Online", "Việc Làm Khu Công Nghiệp", 
    "Nhận Hàng Gia Công Về Nhà Làm", "Việc Làm Hóc Môn", "Tài Xế TPHCM", 
    "Việc làm Đà Nẵng", "Việc Làm Khánh Hòa", "Việc Làm Quảng Nam", 
    "Việc làm Bắc Ninh", "Việc làm Đồng Nai", "Tài Xế Bình Dương", 
    "Việc Làm Gò Vấp", "Việc làm Quận 9", "Việc Làm Ninh Thuận", 
    "Việc Làm Gia Lai", "Việc Làm Huế", "Việc Làm Bình Dương", 
    "Việc Làm Part Time", "Việc Làm Tại Nhà", "Việc Làm Quận 8", 
    "Việc làm Cần Thơ", "Việc Làm Quận Bình Tân", "Việc Làm Phú Yên", 
    "Việc Làm Hà Nam", "Việc Làm Hà Tĩnh", "Việc Làm Hà Nội", 
    "Việc Làm Online Tại Nhà", "Việc Làm Thêm", "Việc Làm Củ Chi", 
    "Việc Làm Quận 12", "Việc Làm Quận 7", "Việc làm Hải Phòng", 
    "Việc Làm Quảng Ngãi", "Tìm việc làm TPHCM"
  ];


  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ul style={{ margin: '0px', padding: '0px', listStyle: 'none' }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'grey',
          display: 'inline-block',
          margin: '0 5px',
        }}
      ></div>
    )
  };


  
  return (
    <div className="w-screen" style={{ marginTop: '0' }}>
      
      {/* Carousel */} {/*1*/}
      <div className="home-container" style={{ maxWidth: '1024px', margin: '0 auto', paddingTop: '0', paddingBottom: '20px' }}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </div>
          ))}
        </Slider>
      </div>

              {/* Việc làm theo ngành nghề */} {/*2*/}
              <div style={{ 
                textAlign: 'center', 
                padding: '10px', // Giảm padding
                backgroundColor: '#fff', 
                maxWidth: '1024px', 
                margin: '0 auto', 
                borderRadius: '8px', 
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden' // Thêm thuộc tính này nếu muốn ẩn phần tràn
              }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Việc làm theo ngành nghề</h2>
                
                
                {/* Grid Layout for Logos */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(10, 1fr)', 
                  gap: '20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '20px',
                  // Responsive styles
                    '@media (max-width: 768px)': {
                      gridTemplateColumns: 'repeat(4, 1fr)', // Display 4 icons on mobile
                  },
                }}>
                  {[
                    { src: 'https://cdn.chotot.com/admincentre/FSFApA-ve7u0AnBfBlUnVK8Fv1xiOO4UlLq01Bje3Ls/preset:raw/plain/95398b432e2683798eae20fb3cdec327-2809864671391774411.jpg', name: 'Tạp vụ' },
                    { src: 'https://cdn.chotot.com/admincentre/FSFApA-ve7u0AnBfBlUnVK8Fv1xiOO4UlLq01Bje3Ls/preset:raw/plain/95398b432e2683798eae20fb3cdec327-2809864671391774411.jpg', name: 'Tạp vụ' },
                    { src: 'https://cdn.chotot.com/admincentre/FSFApA-ve7u0AnBfBlUnVK8Fv1xiOO4UlLq01Bje3Ls/preset:raw/plain/95398b432e2683798eae20fb3cdec327-2809864671391774411.jpg', name: 'Tạp vụ' },
                    { src: 'https://cdn.chotot.com/admincentre/FSFApA-ve7u0AnBfBlUnVK8Fv1xiOO4UlLq01Bje3Ls/preset:raw/plain/95398b432e2683798eae20fb3cdec327-2809864671391774411.jpg', name: 'Tạp vụ' },
                    { src: 'https://cdn.chotot.com/admincentre/FSFApA-ve7u0AnBfBlUnVK8Fv1xiOO4UlLq01Bje3Ls/preset:raw/plain/95398b432e2683798eae20fb3cdec327-2809864671391774411.jpg', name: 'Tạp vụ' },
                    { src: 'https://cdn.chotot.com/admincentre/FSFApA-ve7u0AnBfBlUnVK8Fv1xiOO4UlLq01Bje3Ls/preset:raw/plain/95398b432e2683798eae20fb3cdec327-2809864671391774411.jpg', name: 'Tạp vụ' },
                    { src: 'https://cdn.chotot.com/admincentre/FSFApA-ve7u0AnBfBlUnVK8Fv1xiOO4UlLq01Bje3Ls/preset:raw/plain/95398b432e2683798eae20fb3cdec327-2809864671391774411.jpg', name: 'Tạp vụ' },
                    { src: 'https://cdn.chotot.com/admincentre/FSFApA-ve7u0AnBfBlUnVK8Fv1xiOO4UlLq01Bje3Ls/preset:raw/plain/95398b432e2683798eae20fb3cdec327-2809864671391774411.jpg', name: 'Tạp vụ' },
                    { src: 'https://cdn.chotot.com/admincentre/FSFApA-ve7u0AnBfBlUnVK8Fv1xiOO4UlLq01Bje3Ls/preset:raw/plain/95398b432e2683798eae20fb3cdec327-2809864671391774411.jpg', name: 'Tạp vụ' },
                    { src: 'https://cdn.chotot.com/admincentre/FSFApA-ve7u0AnBfBlUnVK8Fv1xiOO4UlLq01Bje3Ls/preset:raw/plain/95398b432e2683798eae20fb3cdec327-2809864671391774411.jpg', name: 'Tạp vụ' },
                    // Thêm các ngành nghề khác tương tự ở đây
                  ].map((job, index) => (
                    <div key={index} style={{ textAlign: 'center', margin: '0 auto' }}>
                      <img src={job.src} alt={job.name} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                      <p style={{ wordWrap: 'break-word', marginTop: '10px', textAlign: 'center' }}>{job.name}</p>
                    </div>
                  ))}
                </div>

                <a href="#" style={{ 
                    backgroundColor: 'gold', 
                    color: 'white', 
                    fontSize: '18px', 
                    textDecoration: 'none', 
                    padding: '10px 15px', 
                    borderRadius: '5px', 
                    display: 'inline-block', 
                    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', 
                    marginTop: '10px' 
                }}>
                  Xem tất cả 33 ngành nghề
                </a>
              </div>


              {/* Khoảng cách giữa hai phần */}
              <div style={{ margin: '30px 0' }}></div> 

              {/* Việc Làm Tuyển Gấp */} {/*3*/}
              <div className="job-list-section" >
                <div className="header">
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>Việc làm tuyển gấp</h2>
                
                  {/* Thêm một khoảng cách ở đây */}
                  <div style={{ marginTop: '10px' }}></div>  {/* Điều chỉnh khoảng cách tùy ý */}

                  <div className="job-grid">
                    <JobCard
                      partnerLabel="Nhân viên LẬP TRÌNH WEB"
                      salary="Đến 15 triệu/tháng"
                      company="Công ty"
                      location="Thành phố Hồ Chí Minh"
                      logoSrc="https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75"
                    />

                    <JobCard
                      partnerLabel="Nhân viên LẬP TRÌNH MOBILE"
                      salary="Đến 15 triệu/tháng"
                      company="Công ty"
                      location="Thành phố Hồ Chí Minh"
                      logoSrc="https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75"
                    />

                    <JobCard
                      partnerLabel="Nhân viên LẬP TRÌNH GAME"
                      salary="Đến 10 triệu/tháng"
                      company="Công ty"
                      location="Thành phố Hồ Chí Minh"
                      logoSrc="https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75"
                    />


                    <JobCard
                      partnerLabel="Nhân viên XỬ LÝ DỮ LIỆU"
                      salary="Đến 10 triệu/tháng"
                      company="Công ty"
                      location="Thành phố Hồ Chí Minh"
                      logoSrc="https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75"
                    />

                    {/* Thêm các JobCard khác tương tự */}
                  </div>

                  <div className="see-more">
                    <a href="#" style={{ 
                        backgroundColor: 'gold', 
                        color: 'white', 
                        fontSize: '18px', 
                        textDecoration: 'none', 
                        padding: '10px 15px', 
                        borderRadius: '5px', 
                        display: 'inline-block', 
                        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', 
                        marginTop: '10px' 
                      }}>
                        Xem thêm các việc làm khác
                    </a>
                  </div>

                </div>
              </div>


                  {/* Việc làm từ Nhà tuyển dụng tiêu biểu */} {/*4*/}
                  <div style={{
                    textAlign: 'center',
                    padding: '10px',
                    backgroundColor: '#fff',
                    maxWidth: '1024px',
                    margin: '0 auto',
                    borderRadius: '8px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    marginTop: '30px'
                  }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Việc làm từ nhà tuyển dụng tiêu biểu</h2>

                {/* Flexbox Layout for Company Logos */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'nowrap', // Prevent wrapping to a new line
                    justifyContent: 'space-around', // Adjust space between the logos
                    alignItems: 'center',
                    overflowX: 'auto', // Add horizontal scrolling if necessary
                    marginBottom: '20px',
                  }}>
                  {logoSrcs.map((src, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                      <img src={src} alt={`Company Logo ${index + 1}`} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                    </div>
                  ))}
                </div>
              </div>


                      {/* Khoảng cách giữa hai phần */}
                      <div style={{ margin: '30px 0' }}></div> 


                      {/* Từ Đối Tác Việc Làm Tốt Section */} {/*5*/}
                      <div className="job-list-section" >
                        <div className="header">
                        <h2 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>Từ đối tác việc làm tốt</h2>

                        {/* Thêm một khoảng cách ở đây */}
                        <div style={{ marginTop: '10px' }}></div> 

                        <div className="options" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                              <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>ĐỐI TÁC</span>
                              <span style={{ color: '#c7c7c7' }}>Việc làm xác thực</span>
                              <span style={{ color: '#c7c7c7' }}>Phản hồi trong 7 ngày</span>
                          </div>

                          <div style={{ marginTop: '1px', alignSelf: 'flex-start' }}>
                              <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>VIỆC LÀM TỐT</span>
                          </div>
                        </div>


                          {/* Thêm một khoảng cách ở đây */}
                          <div style={{ marginTop: '10px' }}></div>  {/* Điều chỉnh khoảng cách tùy ý */}

                          <div className="job-grid">
                            <JobCard
                              partnerLabel="Nhân viên siêu thị AEON Mall"
                              salary="Đến 12 triệu/tháng"
                              company="Công ty"
                              location="Thành phố Hồ Chí Minh"
                              logoSrc="https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75"
                            />

                            <JobCard
                              partnerLabel="Nhân viên siêu thị LOTTE Mart"
                              salary="Đến 12 triệu/tháng"
                              company="Công ty"
                              location="Thành phố Hồ Chí Minh"
                              logoSrc="https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75"
                            />

                            <JobCard
                              partnerLabel="Nhân viên Điện Máy Xanh"
                              salary="Đến 12 triệu/tháng"
                              company="Công ty"
                              location="Thành phố Hồ Chí Minh"
                              logoSrc="https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75"
                            />


                            <JobCard
                              partnerLabel="Nhân viên Điện Máy Chợ Lớn"
                              salary="Đến 12 triệu/tháng"
                              company="Công ty"
                              location="Thành phố Hồ Chí Minh"
                              logoSrc="https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75"
                            />

                            {/* Thêm các JobCard khác tương tự */}
                          </div>

                          <div className="see-more">
                            <a href="#" style={{ 
                                backgroundColor: 'gold', 
                                color: 'white', 
                                fontSize: '18px', 
                                textDecoration: 'none', 
                                padding: '10px 15px', 
                                borderRadius: '5px', 
                                display: 'inline-block', 
                                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', 
                                marginTop: '10px' 
                              }}>
                                Xem thêm các việc làm khác
                            </a>
                          </div>

                        </div>
                      </div>

    
                              {/* Thêm một khoảng cách ở đây */}
                              <div style={{ marginTop: '10px' }}></div>  {/* Điều chỉnh khoảng cách tùy ý */}

                              <div style={{
                                textAlign: 'center',
                                padding: '20px',
                                backgroundColor: '#fff',
                                maxWidth: '1024px',
                                margin: '0 auto',
                                borderRadius: '8px',
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                marginTop: '30px'
                              }}>
                                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Dành cho Nhà Tuyển Dụng</h2>
                                  <span>Trải nghiệm các công cụ đắc lực: Ưu đãi NTD, Quản lý ứng viên, Tìm ứng viên mới, Gói Tuyển Dụng,...</span>

                                  {/* Thêm một khoảng cách ở đây */}
                                  <div style={{ marginTop: '10px' }}></div>  {/* Điều chỉnh khoảng cách tùy ý */}

                                  {/* Cards for Employers */}
                                  <div className="employer-cards" style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '5px'
                                  }}>
                                      {employerCards.map((card, index) => (
                                        <div key={index} className="card" style={{
                                          backgroundColor: card.title.includes('Quản lý') ? '#a4c6eb' : 
                                                        card.title.includes('Tìm') ? '#f4f3cd' : 
                                                        card.title.includes('Đối Tác') ? '#efbfb8' : 
                                                        '#dff7dc',
                                          color: card.title.includes('Tìm') ? 'black' : 'black',
                                          borderRadius: '5px',
                                          padding: '5px',
                                          flex: '1',
                                          marginRight: index < employerCards.length - 1 ? '10px' : '0',
                                          textAlign: 'center'
                                        }}>
                                          <img src={card.iconSrc} alt={card.title} style={{ width: '30px', height: '30px' }} />
                                          <p className="card-title">{card.title}</p>
                                          <p className="card-status">{card.status}</p>
                                        </div>
                                      ))}
                                  </div>
                              </div>

                              
                              {/* Khoảng cách giữa các phần */}
                              <div style={{ margin: '30px 0' }}></div> 

                              {/* Để lại thông tin nhận việc ngay */} {/*7*/}
                              <div style={{
                                  textAlign: 'center',
                                  padding: '10px',
                                  backgroundColor: '#fff',
                                  maxWidth: '1024px',
                                  margin: '0 auto',
                                  borderRadius: '8px',
                                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                  marginTop: '30px'
                                }}>
                                      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                                            Để lại thông tin nhận việc ngay
                                      </h2>
                                      <span style={{ display: 'block', marginBottom: '10px' }}>
                                        Hãy để lại số điện thoại để nhà tuyển dụng gọi cho bạn khi có công việc phù hợp nhé!
                                      </span>
                                            <div className="see-more">
                                                <a href="#" style={{ 
                                                    backgroundColor: 'gold', 
                                                    color: 'white', 
                                                    fontSize: '18px', 
                                                    textDecoration: 'none', 
                                                    padding: '10px 15px', 
                                                    borderRadius: '5px', 
                                                    display: 'inline-block', 
                                                    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', 
                                                    marginTop: '10px' 
                                                  }}>
                                                  Tạo hồ sơ
                                                </a>
                                              </div>
                                </div>


                                {/* Thêm phần Việc làm gần bạn - Đi làm ngay */} {/*8*/}
                                <div style={{
                                  textAlign: 'center',
                                  padding: '10px',
                                  backgroundColor: '#fff',
                                  maxWidth: '1024px',
                                  margin: '0 auto',
                                  borderRadius: '8px',
                                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                  marginTop: '30px' // Khoảng cách giữa các phần
                                }}>
                                      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Việc làm gần bạn - Đi làm ngay</h2>

                                  {/* Thanh tìm kiếm */}
                                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                    <input
                                      type="text"
                                      placeholder="Nhập vị trí để tìm việc làm gần nhất"
                                      style={{
                                        padding: '10px',
                                        borderRadius: '5px',
                                        border: '1px solid #e0e0e0',
                                        width: '750px',
                                        marginRight: '10px'
                                      }}
                                    />
                                        <button style={{
                                          backgroundColor: 'gold',
                                          color: 'white',
                                          fontSize: '18px',
                                          padding: '10px 15px',
                                          border: 'none',
                                          borderRadius: '5px',
                                          cursor: 'pointer',
                                          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                                        }}>
                                          Tìm kiếm
                                        </button>
                                      </div>
                                  </div>

     
                                        {/* Khoảng cách giữa hai phần */}
                                        <div style={{ margin: '30px 0' }}></div> 

                                        {/* Việc Làm Tuyển Gấp */} {/*9*/}
                                        <div className="job-list-section" >
                                          <div className="header">
                                          <h2 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>Việc làm mới nhất</h2>
  
                                            {/* Thêm một khoảng cách ở đây */}
                                            <div style={{ marginTop: '10px' }}></div>  {/* Điều chỉnh khoảng cách tùy ý */}

                                                <div className="job-grid">
                                                  <JobCard
                                                    partnerLabel="Tuyển dụng nhân viên TRÍ TUỆ NHÂN TẠO"
                                                    salary="Đến 15 triệu/tháng"
                                                    company="Công ty"
                                                    location="Thành phố Hồ Chí Minh"
                                                    logoSrc="https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75"
                                                  />

                                                  <JobCard
                                                    partnerLabel="Tuyển dụng nhân viên KỸ THUẬT PHẦN MỀM"
                                                    salary="Đến 15 triệu/tháng"
                                                    company="Công ty"
                                                    location="Thành phố Hồ Chí Minh"
                                                    logoSrc="https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75"
                                                  />

                                                  <JobCard
                                                    partnerLabel="Tuyển dụng nhân viên HỆ THỐNG THÔNG TIN"
                                                    salary="Đến 10 triệu/tháng"
                                                    company="Công ty"
                                                    location="Thành phố Hồ Chí Minh"
                                                    logoSrc="https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75"
                                                  />

                                                  <JobCard
                                                    partnerLabel="Tuyển dụng nhân viên AN TOÀN THÔNG TIN"
                                                    salary="Đến 10 triệu/tháng"
                                                    company="Công ty"
                                                    location="Thành phố Hồ Chí Minh"
                                                    logoSrc="https://www.vieclamtot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F2.png&w=3840&q=75"
                                                  />

                                                  {/* Thêm các JobCard khác tương tự */}
                                                </div>

                                                    <div className="see-more">
                                                      <a href="#" style={{ 
                                                          backgroundColor: 'gold', 
                                                          color: 'white', 
                                                          fontSize: '18px', 
                                                          textDecoration: 'none', 
                                                          padding: '10px 15px', 
                                                          borderRadius: '5px', 
                                                          display: 'inline-block', 
                                                          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', 
                                                          marginTop: '10px' 
                                                        }}>
                                                          Xem thêm các việc làm khác
                                                      </a>
                                                    </div>

                                              </div>
                                            </div>


                                            {/* Khoảng cách giữa hai phần */}
                                            <div style={{ margin: '30px 0' }}></div>

                                            {/* Giới thiệu */} 
                                            <div className="container">
                                              {/* Title */}
                                              <div className="title-section">
                                                <h2>Giới thiệu</h2>
                                                <img
                                                  src="https://static.chotot.com/storage/default_images/job_introduce.png"
                                                  alt="Việc Làm Tốt Logo"
                                                />
                                              </div>

                                              {/* Description */}
                                              <span className="description">
                                                Việc Làm Tốt là chuyên trang tuyển dụng & tìm việc được ra mắt vào tháng 07/2021 bởi trang mua bán, rao vặt trực tuyến Chợ Tốt. Với sứ mệnh nâng cao chất lượng cuộc sống và mang đến cơ hội tốt hơn cho người Việt, Việc Làm Tốt được xây dựng để trở thành một nền tảng trực tuyến <span className="highlight">Hiệu quả & Đáng tin cậy</span> cho Nhà tuyển dụng và Người tìm việc.
                                              </span>

                                              {/* Stats section */}
                                              <div className="stats-section">
                                                <div className="stat-item">
                                                  <img src="https://www.vieclamtot.com/_next/image?..." alt="" />
                                                  <h3>1.400.000+</h3>
                                                  <p>Việc làm đang tuyển</p>
                                                </div>

                                                <div className="stat-item">
                                                  <img src="https://www.vieclamtot.com/_next/image?..." alt="" />
                                                  <h3>53.000+</h3>
                                                  <p>Nhà tuyển dụng</p>
                                                </div>

                                                <div className="stat-item">
                                                  <img src="https://www.vieclamtot.com/_next/image?..." alt="" />
                                                  <h3>4.200.000+</h3>
                                                  <p>Truy cập mỗi tháng</p>
                                                </div>
                                              </div>
                                            </div>






                                          <div className="w-screen" style={{ marginTop: '0' }}>
                                          {/* Existing components and sections... */}

                                          {/* New Section: Giới thiệu Việc Làm Tốt */} {/*11*/}
                                          <div style={{
                                            textAlign: 'center',
                                            padding: '20px',
                                            backgroundColor: '#fff',
                                            maxWidth: '1024px',
                                            margin: '0 auto',
                                            borderRadius: '8px',
                                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                            marginTop: '30px'
                                          }}>
                                            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Giới thiệu Việc Làm Tốt - Kênh tìm việc làm nhanh chóng, hiệu quả cao hàng đầu Việt Nam</h2>
                                            <span style={{ textTransform: 'uppercase', fontSize: '18px', display: 'block', marginBottom: '10px' }}>Chuyên trang tuyển dụng và tìm việc lao động phổ thông tháng 10/2024</span>
                                            
                                            <div style={{ maxHeight: expanded ? 'none' : '150px', overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}>
                                              <p style={{ textAlign: 'justify', margin: '0' }}>
                                              Hiện nay, tìm được một việc làm thích hợp có mức lương và phúc lợi xứng đáng không hề đơn giản. Đặc biệt là trong trạng thái Bình Thường Mới, hầu như mọi người không còn xin việc trực tiếp nữa. Không phải cầm chiếc hồ sơ giấy, đi đến từng công ty để nộp, thay vào đó là những trang tìm việc làm có thể ứng tuyển trực tuyến ngay. Vừa tiết kiệm thời gian và chi phí, vừa an toàn trong thời kỳ dịch covid. Với giao diện thân thiện, dễ dàng sử dụng, Việc Làm Tốt hiện là cầu nối tuyệt vời giữa nhà tuyển dụng và ứng viên trên toàn quốc.

                                              Trên Việc Làm Tốt có hơn 1 triệu việc làm đang tuyển dụng, số lượng tin đăng đang tăng nhiều hơn từng ngày. Đặc biệt, tin đăng luôn được đội ngũ Việc Làm Tốt kiểm duyệt chất lượng, cập nhật mới liên tục. Đảm bảo cho người tìm việc tiếp cận được những việc làm mới nhất, phù hợp nhất.

                                              Ngoài ra, các nhà tuyển dụng cũng có thể chủ động tìm kiếm các ứng viên tiềm năng cho công ty, doanh nghiệp của mình. Trên kênh Việc Làm Tốt, người tìm việc có thể đăng tin cần tìm công việc cụ thể cho bản thân, bạn bè,... Nhờ đó, các nhà tuyển dụng có thể tìm kiếm, chọn lọc và nhanh chóng liên hệ với ứng viên phù hợp.

                                              Những việc làm lao động phổ thông đang phổ biến có nhu cầu tuyển dụng nhiều nhất hiện nay: Shipper, Bán Hàng, Bảo Vệ, Giúp Việc - Tạp Vụ, Công nhân,...

                                              Đặc biệt, Việc Làm Tốt còn cung cấp cho bạn những thông tin về thị trường lao động cũng như chia sẻ kinh nghiệm tìm việc, tuyển dụng. Bạn là người lao động xa quê tìm việc, bạn không biết bắt đầu từ đâu? Bạn là sinh viên muốn kiếm việc làm thêm? Bạn cần tìm nhanh việc thời vụ?... Việc Làm Tốt sẽ gợi ý, hướng dẫn bạn một cách dễ hiểu và đơn giản nhất. Mời bạn truy cập vào trang chia sẻ kinh nghiệm về việc làm của chúng tôi để xem thêm nhiều thông tin bổ ích.

                                              Nếu bạn đang có nhu cầu tìm việc, hãy đến với chuyên mục việc làm của Việc Làm Tốt để được tiếp cận những công việc mới nhất, phù hợp nhất.

                                              Bạn là nhà tuyển dụng, đừng ngần ngại đăng tuyển việc làm lên Việc Làm Tốt, với thao tác đơn giản, dễ làm, tin đăng của bạn sẽ nhanh chóng tiếp cận được với các ứng viên. Trong trường hợp bạn tìm mãi chưa thấy ứng viên phù hợp, hãy truy cập vào trang người tìm việc của Việc Làm Tốt để chọn cho mình những ứng viên sáng giá nhất.

                                              Hy vọng bạn sẽ có những trải nghiệm tuyệt vời trên kênh của chúng tôi. Đừng quên giới thiệu Việc Làm Tốt cho người thân, bạn bè đang tìm kiếm công việc lao động phổ thông nhé.
                                              </p>
                                            </div>

                                            <button onClick={toggleExpanded} style={{
                                              backgroundColor: 'gold',
                                              color: 'white',
                                              fontSize: '16px',
                                              padding: '10px 15px',
                                              border: 'none',
                                              borderRadius: '5px',
                                              cursor: 'pointer',
                                              marginTop: '10px',
                                              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)'
                                            }}>
                                              {expanded ? 'Thu gọn' : 'Xem thêm'}
                                            </button>
                                          </div>

                                          {/* Existing components and sections... */}
                                        </div>

                                        
                                            {/* New Section: Giới thiệu Việc Làm Tốt */} {/*12*/}
                                            <div style={{
                                              textAlign: 'center',
                                              padding: '20px',
                                              backgroundColor: '#fff',
                                              maxWidth: '1024px',
                                              margin: '0 auto',
                                              borderRadius: '8px',
                                              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                              marginTop: '30px'
                                            }}>
                                              <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Các từ khóa phổ biến</h2>
                                              
                                              <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(5, 1fr)', // Adjust as necessary
                                                gap: '10px',
                                                listStyleType: 'none',
                                                padding: 0,
                                              }}>
                                                {keywords.map((keyword, index) => (
                                                  <div key={index} style={{
                                                    fontSize: '10px',
                                                    textAlign: 'left', // Center align keywords
                                                    color: '#666',
                                                  }}>
                                                    {keyword}
                                                  </div>
                                                ))}
                                              </div>
                                            </div>

                                        
                                        




    </div>
  );
};

export default Home;
