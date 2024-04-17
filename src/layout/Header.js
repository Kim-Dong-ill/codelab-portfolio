import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

//mui
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [menuBtn, setMenuBtn] = useState(false);
  const [mobileMenuBtn, setMobileMenuBtn] = useState(false);

  //menuBtn click 함수
  function menuBtnClick() {
    setMenuBtn(!menuBtn);
    if (menuBtn === false) {
      menuSlideRight();
    } else {
      menuSlideLeft();
    }
  }

  //메뉴 슬라이드
  function menuSlideRight() {
    setTimeout(function () {
      $(".menuList ul li:nth-child(1)").css("left", 0);
    });
    setTimeout(function () {
      $(".menuList ul li:nth-child(2)").css("left", 0);
    }, 80);
    setTimeout(function () {
      $(".menuList ul li:nth-child(3)").css("left", 0);
    }, 160);
    setTimeout(function () {
      $(".menuList ul li:nth-child(4)").css("left", 0);
    }, 240);
  }
  function menuSlideLeft() {
    setTimeout(function () {
      $(".menuList ul li:nth-child(1)").css("left", "-100%");
    });
    setTimeout(function () {
      $(".menuList ul li:nth-child(2)").css("left", "-100%");
    }, 80);
    setTimeout(function () {
      $(".menuList ul li:nth-child(3)").css("left", "-100%");
    }, 160);
    setTimeout(function () {
      $(".menuList ul li:nth-child(4)").css("left", "-100%");
    }, 240);
  }

  //모바일 메뉴 슬라이드
  function mobileMenuClick() {
    setMobileMenuBtn(!mobileMenuBtn);
    mobileMenuToggle();
  }
  function mobileMenuToggle() {
    $(".mobileMenuList").stop().slideToggle();
  }

  return (
    <>
      <div className="header">
        <div className="logo">
          <NavLink>logo</NavLink>
        </div>
      </div>

      {/* menu Wrap */}

      <div className="mobileMenuWrap">
        <div className="mobileMenuBtn" onClick={mobileMenuClick}>
          <MenuIcon></MenuIcon>
        </div>
        <div className="mobileMenuList">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/aboutme">ABOUT ME</NavLink>
            </li>
            <li>
              <NavLink to="project">PROJECT</NavLink>
            </li>
            <li>
              <NavLink to="resume">RESUME</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className={`menuWrap ${menuBtn ? "click" : ""}`}>
        <div className="menuBtn" id="menuBtn" onClick={menuBtnClick}>
          <MenuIcon></MenuIcon>
        </div>
        <div className="menuList">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/aboutme">ABOUT ME</NavLink>
            </li>
            <li>
              <NavLink to="project">PROJECT</NavLink>
            </li>
            <li>
              <NavLink to="resume">RESUME</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
