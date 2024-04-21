import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Section01() {
  return (
    <>
      <Box className="section sec1">
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box className="bd">그림</Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="bd">글</Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Section01;
