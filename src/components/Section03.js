import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

//tab메뉴
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
//tab 메뉴

function Section03() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className="section sec3">
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={7}
                sx={{
                  border: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <iframe
                  width="1066"
                  height="600"
                  src="https://www.youtube.com/embed/n6yC3yjeTw8"
                  title="쇼핑몰 제작 프로젝트 .1"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Grid>
              <Grid item xs={12} md={5} sx={{ border: 1 }}>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="프로젝트" {...a11yProps(0)} />
                      <Tab label="상세 설명" {...a11yProps(1)} />
                      <Tab label="아쉬운점..." {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    프로젝트명, 제작기간, 제작인원, 등등
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    어떤 기술 사용했는지, 어떻게 작동하는지, 등등
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    여러 아쉬운점, 관리자 모드, 페이지네이션 인덱스, 상품 추가시
                    변동 가능하게 등등
                  </CustomTabPanel>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Section03;
