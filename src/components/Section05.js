import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";

function Section05() {
  const Education = [
    {
      title: "대학교",
      startDate: "2016",
      endDate: "2022",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequuntur commodi, placeat ullam veniam delectus maxime illo vitae corporis nisi.",
    },
    {
      title: "대학교2",
      startDate: "2018",
      endDate: "2022",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequuntur commodi, placeat ullam veniam delectus maxime illo vitae corporis nisi.",
    },
    {
      title: "대학교3",
      startDate: "2017",
      endDate: "2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequuntur commodi, placeat ullam veniam delectus maxime illo vitae corporis nisi.",
    },
  ];

  return (
    <>
      <Box className="section sec5">
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  border: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Resume
              </Grid>
              <Grid item xs={12} sx={{ border: 1 }}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 1,
                    }}
                  >
                    <Paper elevation={3} sx={{ padding: 2 }}>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                            fontSize: 30,
                            marginBottom: 5,
                          }}
                        >
                          <MenuBookRoundedIcon sx={{ fontSize: 50 }} />
                          Education
                        </Box>
                        <Box>
                          {/*  */}
                          {Education.map((item, idx) => {
                            return (
                              <>
                                <Box sx={{ display: "flex", gap: 1 }} key={idx}>
                                  <AdjustRoundedIcon />
                                  <Box
                                    sx={{
                                      marginBottom: 3,
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: 1,
                                    }}
                                  >
                                    <Box>{item.title}</Box>
                                    <Box>
                                      {item.startDate} ~ {item.endDate}
                                    </Box>
                                    <Box>{item.content}</Box>
                                  </Box>
                                </Box>
                              </>
                            );
                          })}
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 1,
                    }}
                  >
                    <Paper elevation={3} sx={{ padding: 2 }}>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                            fontSize: 30,
                            marginBottom: 5,
                          }}
                        >
                          <EmojiObjectsOutlinedIcon sx={{ fontSize: 50 }} />
                          Experience
                        </Box>
                        <Box>
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <AdjustRoundedIcon />
                            <Box
                              sx={{
                                marginBottom: 3,
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                              }}
                            >
                              <Box>경험</Box>
                              <Box>2016 ~ 2022</Box>
                              <Box>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corrupti consequuntur commodi,
                                placeat ullam veniam delectus maxime illo vitae
                                corporis nisi.
                              </Box>
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <AdjustRoundedIcon />
                            <Box
                              sx={{
                                marginBottom: 3,
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                              }}
                            >
                              <Box>경험</Box>
                              <Box>2016 ~ 2022</Box>
                              <Box>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corrupti consequuntur commodi,
                                placeat ullam veniam delectus maxime illo vitae
                                corporis nisi.
                              </Box>
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <AdjustRoundedIcon />
                            <Box
                              sx={{
                                marginBottom: 3,
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                              }}
                            >
                              <Box>경험</Box>
                              <Box>2016 ~ 2022</Box>
                              <Box>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corrupti consequuntur commodi,
                                placeat ullam veniam delectus maxime illo vitae
                                corporis nisi.
                              </Box>
                            </Box>
                          </Box>
                          {/*  */}
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Section05;
