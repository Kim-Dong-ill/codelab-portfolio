import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Section04() {
  const codelabProject = [
    { img: "이미지1", name: "프로젝트1", period: "1달", member: 4 },
    { img: "이미지2", name: "프로젝트2", period: "2달", member: 2 },
    { img: "이미지3", name: "프로젝트3", period: "3달", member: 3 },
    { img: "이미지4", name: "프로젝트4", period: "4달", member: 5 },
  ];
  return (
    <>
      <Box className="section sec4">
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Codelab Project
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {codelabProject.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <div>{item.img}</div>
                      <div>{item.name}</div>
                      <div>{item.period}</div>
                      <div>{item.member}</div>
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Section04;
