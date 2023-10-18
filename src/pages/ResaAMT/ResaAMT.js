import React from "react";
import Footer from "../../components/Footer/Footer";
import "./ResaAMT.css";

function ResaAMT() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <div className="App">
      <div className="ResaAMT_container">
      <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2CESOBQcLPdDYH9j1FwAPOducFcvYhYptJYMLr9b4Iupjh3ulQYONUzhueG6i2k5YfaqMS6f2F?gv=true" style={{"border": "0", width:"100%", height:"100vh", frameborder:"0"}}></iframe>
      </div>
      {/* <Footer /> */}
    </div>
  );
  


}

export default ResaAMT;
