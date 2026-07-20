import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky-top" style={{ zIndex: 1000 , top: "0px",width:"99%",marginLeft:"0.5%",paddingTop:"10px",paddingBottom:"10px"}}>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          maxWidth: "100%",
					maxHeight: "45px",
          background: "#ffffff10",
          border: "1px solid rgba(255,255,255,0.8)",
          borderRadius: "28px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
					padding:"1px 18.5px",
        }}
      >
        {/* Logo */}
        <div>
          <div
            className="text-white"
            style={{
              fontFamily: "handjet",
							fontSize: "40px",
            }}
          >
            Techsprint Arena
          </div>
        </div>

        {/* Hamburger */}
        <button
          className="btn btn-outline text-white flex justify-content-center align-items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					height="45px"
        >
          <FaBars size={32} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="mx-auto mt-2 px-4"
          style={{
						maxwidth:"30%",
            background: "#1A908590",
            border: "2px solid #ffffff75",
						borderRadius: "20px 0px 20px 0px",
						display: "flex",
						flexDirection: "column",
						position: "absolute",
						right: "40px",
						gap: "0px",
						fontFamily: "handjet",
						fontSize: "35px",
          }}
        >
          <Link
            to="/"
            className="d-block rounded-pill text-white text-decoration-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            HOME
          </Link>

          <Link
            to="/"
            className="d-block rounded-pill text-white text-decoration-none "
            onClick={() => setMobileMenuOpen(false)}
          >
						HOW IT WORKS
          </Link>

          <Link
            to="/"
            className="d-block rounded-pill text-white text-decoration-none "
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTRUBUTION
          </Link>

          <Link
            to="/"
            className="d-block rounded-pill text-white text-decoration-none "
            onClick={() => setMobileMenuOpen(false)}
          >
            ABOUT US
          </Link>

					<Link
            to="/"
            className="d-block rounded-pill text-white text-decoration-none "
            onClick={() => setMobileMenuOpen(false)}
          >
            REWARDS
          </Link>

          <Link
            to="/"
            className="d-block rounded-pill text-white text-decoration-none "
            onClick={() => setMobileMenuOpen(false)}
          >
            ENROLL NOW
          </Link>
        </div>
      )}
    </div>
  );
}