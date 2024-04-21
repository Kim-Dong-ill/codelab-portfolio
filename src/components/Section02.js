import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Section02() {
  return (
    <>
      <Box className="section sec2">
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid
                className="sec2-skill"
                item
                xs={12}
                md={4}
                sx={{
                  border: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  marginBottom: 1,
                }}
              >
                Design
              </Grid>
              <Grid
                className="sec2-skillList"
                item
                xs={12}
                md={8}
                sx={{ border: 1, padding: 2, marginBottom: 1 }}
              >
                xs=8
              </Grid>

              <Grid
                className="sec2-skill"
                item
                xs={12}
                md={4}
                sx={{
                  border: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  marginBottom: 1,
                }}
              >
                Code
              </Grid>
              <Grid
                className="sec2-skillList"
                item
                xs={12}
                md={8}
                sx={{ border: 1, padding: 2, marginBottom: 1 }}
              >
                xs=8
              </Grid>
              <Grid
                className="sec2-skill"
                item
                xs={12}
                md={4}
                sx={{
                  border: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  marginBottom: 1,
                }}
              >
                Tools
              </Grid>
              <Grid
                className="sec2-skillList"
                item
                xs={12}
                md={8}
                sx={{ border: 1, padding: 2, marginBottom: 1 }}
              >
                xs=8
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Section02;
