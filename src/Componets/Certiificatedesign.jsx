import React, { useRef } from "react";
import html2canvas from 'html2canvas';
import { QRCodeSVG } from "qrcode.react";

// Import Playwrite România font
const playwriteRomania = {
  fontFamily: "'Playwrite RO', cursive",
  src: "url('https://fonts.googleapis.com/css2?family=Playwrite+RO:wght@400;500;600;700&display=swap')"
};

export default function CertificateDesign({
  name,
  fatherName,
  registrationNum,
  rollNo,
  centerName,
  machineName,
  proficiencyScore,
  grade,
  completedate,
  profileimg
}) {
  const certificateRef = useRef(null);

  const handleDownloadCertificate = async () => {
    if (certificateRef.current) {
      try {
        const canvas = await html2canvas(certificateRef.current, {
          scale: 2,
          useCORS: true,
        });
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = imgData;
        link.click();
      } catch (error) {
        console.error('Error converting certificate to image:', error);
      }
    }
  };

  return (

    <div className="">

    <div className="flex flex-col items-center justify-center min-h-screen w-full p-2 sm:p-4">
      <div
        ref={certificateRef}
        className="scale-[0.45] xs:scale-[0.55] sm:scale-[0.65] md:scale-[0.75] lg:scale-[0.85] xl:scale-[0.95] 2xl:scale-100 origin-center transition-transform duration-300"
        style={{ 
          width: "990px", 
          height: "703px", 
          backgroundImage: "url('/frame3.png')",
          // backgroundImage: "url('/bgyellow frame.jpg')",
          backgroundSize: "990px 700px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          transformOrigin: "center center",
          margin: "auto"
        }}
      >
        {/* Top Row - Roll No and Reg No */}
        <div style={{ 
          position: "absolute", 
          top: "180px", 
          left: "50px"
        }}>
          <div style={{
            marginLeft:"50px",
            marginTop:"30px"
          }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600, color: "Black" }}>
              Roll No: <span style={{ fontWeight: 700, color: "Black", fontSize: "20px" }}>{rollNo}</span>
            </h3>
          </div>
          <div style={{
            marginLeft:"50px"
          }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600, color: "black" }}>
              Reg No: <span style={{ fontWeight: 400, color: "black", fontSize: "20px" }}>{registrationNum}</span>
            </h3>
          </div>
        </div>

        {/* Title Section */}
        <div style={{ 
          textAlign: "center", 
          marginTop: "100px", 
          position: "relative" 
        }}>
          <h1 style={{ 
            fontSize: "29px", 
            fontWeight: 700, 
            maxWidth:"30",
            color: "#0f172a", 
            textTransform: "uppercase", 
            letterSpacing: "1px", 
            marginBottom: "3px",
            background: "linear-gradient(to right, #1e3a8a, #0f172a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            fontFamily: "'Playwrite RO', cursive"
          }}>
            {centerName}
          </h1>
          
          <h2 style={{ 
            fontSize: "24px", 
            fontWeight: 600, 
            color: "#1f2937", 
            textTransform: "uppercase", 
            letterSpacing: "2px", 
            marginBottom: "1px",
            fontFamily: "'Playwrite RO', cursive"
          }}>
            Certificate of Proficiency
          </h2>
          
          <p style={{ marginBottom: "1px", color: "#374151", fontFamily: "'Playwrite RO', cursive" }}> *We build skill and empower* </p>
          
          <h2 style={{ 
            fontSize: "30px", 
            color: "#166534", 
            fontWeight: 600, 
            marginBottom: "1px",
            textAlign: "center",
            fontFamily: "'Playwrite RO', cursive"
          }}>
            {name}
          </h2>
          
          <h4 style={{ fontSize: "18px", color: "#374151", fontFamily: "'Playwrite RO', cursive" }}>
            Son of <span style={{ fontWeight: 600, color: "#1e3a8a" }}>{fatherName}</span>
          </h4>
          
          <div style={{
            position: "absolute",
            top: "70px",
            right: "120px",
            width: "118px",
            height: "140px",
            borderRadius: "6px",
            overflow: "hidden",
            border: "2px solid #60a5fa",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)"
          }}>
            {profileimg && (
              <img
                src={profileimg}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              />
            )}
          </div>
        </div>

        {/* Skill/Field */}
        <h3 style={{ 
          fontSize: "24px", 
          fontWeight: 700, 
          color: "black", 
          textAlign: "center", 
          textTransform: "uppercase", 
          letterSpacing: "1px", 
          marginTop: "1px"
        }}>
          {machineName} 
        </h3>

        {/* Description */}
        <div style={{ 
          maxWidth: "750px", 
          margin: " auto" 
        }}>
          <p style={{ 
            fontSize: "18px", 
            textAlign: "center", 
            color: "#1f2937", 
            marginBottom: "20px", 
            lineHeight: "1.5", 
            borderRadius: "12px",
            fontFamily: "'Playwrite RO', cursive"
          }}>
            This is to certify that <span style={{ fontWeight: 600, color: "#1e3a8a" }}>{name}</span> has
            successfully completed the <span style={{ fontWeight: 600, color: "#1e3a8a" }}>{machineName}</span> training program with
            distinction and is hereby recognized as a qualified professional.
          </p>
        </div>

        {/* Signatures */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "36px", 
          alignItems: "center", 
          marginBottom: "32px", 
          color: "#4b5563" 
        }}>
          <div style={{
            background: "linear-gradient(to right, #e0e7ff, #f0f7ff)",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
            border: "1px solid #dbeafe"
          }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#1f2937", fontFamily: "'Playwrite RO', cursive" }}>
              Proficiency: <span style={{ fontWeight: 700, color: "#1e3a8a", fontSize: "20px" }}>{proficiencyScore}</span>
            </h3>
          </div>
          <div style={{
            background: "linear-gradient(to right, #fef3c7, #fef9c3)",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
            border: "1px solid #fde68a"
          }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#1f2937", fontFamily: "'Playwrite RO', cursive" }}>
              Grade: <span style={{ fontWeight: 700, color: "#166534", fontSize: "20px" }}>{grade}</span>
            </h3>
          </div>
        </div>

        {/* Date of Issue */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "16px", 
          color: "#4b5563" 
        }}>
          <div style={{ textAlign: "center", flex: 1 }}>
            <p style={{ fontWeight: 600, fontSize: "18px", fontFamily: "'Playwrite RO', cursive", color: "#1f2937" }}>
              Date of Issue: <span style={{ fontWeight: 500, color: "#1f2937" }}>{new Date(completedate).toLocaleDateString()}</span>
            </p>
          </div>
        </div>

        {/* Signatures at bottom */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-evenly", 
          alignItems: "center", 
          gap: "10px", 
          marginTop: "20px", 
          color: "#4b5563" 
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ textAlign: "center" }}>
               <h3 className="font-bold text-blue-600">Ghulam Shabbir</h3>
              <div style={{ width: "128px", borderBottom: "2px solid #4b5563", marginTop: "5px", marginLeft: "auto", marginRight: "auto" }}></div>
              <p style={{ fontWeight: 600, fontSize: "18px", fontFamily: "'Playwrite RO', cursive", color: "#1f2937" }}>Instructor Sign</p>
            </div>
          </div>
<div className="qrcode">
<QRCodeSVG value="https://themaster.vercel.app/" size={70} />

</div>


          <div style={{ flex: 1 }}>
            <div style={{ textAlign: "center" }}>
            <h3 className="font-bold text-blue-600">Malik Dilawar Abbas</h3>
              <div style={{ width: "138px", borderBottom: "2px solid #4b5563", marginTop: "5px", marginLeft: "auto", marginRight: "auto" }}></div>
              <p style={{ fontWeight: 600, fontSize: "18px", fontFamily: "'Playwrite RO', cursive", color: "#1f2937" }}>Director's Sign/Stamp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}