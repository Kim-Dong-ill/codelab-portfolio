import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import $ from "jquery";

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
      if (page == 4) return;
      page++;
    } else if (e.originalEvent.deltaY < 0) {
      if (page == 1) return;
      page--;
    }
    var posTop = (page - 1) * $(window).height();
    mHtml.animate({ scrollTop: posTop });
  });
  return (
    <>
      <div className="section sec1">
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  border: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Section1
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="section sec2">
        {" "}
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  border: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Section2
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="section sec3">section3</div>
      <div className="section sec4">section4</div>
      <div className="section sec5">section5</div>
      <div className="body"></div>
    </>
  );
}

export default Home;
