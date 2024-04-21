import React from "react";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import $ from "jquery";

import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";

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
    if (mHtml.is(":animated")) return;
    if (e.originalEvent.deltaY > 0) {
      if (page === 4) return;
      page++;
    } else if (e.originalEvent.deltaY < 0) {
      if (page === 1) return;
      page--;
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

      <Box className="section sec5">section5</Box>
      <Box className="body"></Box>
    </>
  );
}

export default Home;
