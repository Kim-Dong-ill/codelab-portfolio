import React, { useState } from "react";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import $ from "jquery";

import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";
import Section05 from "./Section05";

function Home() {
  window.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  var mHtml = $("html");
  var page = 1;
  mHtml.animate({ scrollTop: 0 }, 10);

  $(window).on("wheel", function (e) {
    // console.log("휠 작동");
    if (mHtml.is(":animated")) return;
    if (e.originalEvent.deltaY > 0) {
      // console.log("휠 내리기");
      // console.log("page : " + page);

      page++;
      console.log("page : " + page);
    } else if (e.originalEvent.deltaY < 0) {
      // console.log("휠 올리기");
      page--;
    }
    // console.log("page : " + page);
    if (page < 1) {
      page = 1;
    } else if (page > 6) {
      page = 6;
    }
    var posTop = (page - 1) * $(window).height();

    mHtml.animate({ scrollTop: posTop });
  });

  return (
    <>
      <Section01></Section01>
      <Section02></Section02>
      <Section03></Section03>
      <Section04></Section04>
      <Section05></Section05>

      <Box className="section sec6">section6</Box>
    </>
  );
}

export default Home;
