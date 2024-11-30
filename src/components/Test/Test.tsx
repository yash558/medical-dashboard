import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import testBg from "@assets/Common/testbg.svg";
import testImage from "@assets/Common/test.svg";
import { useNavigate } from "react-router-dom";

const TestSection = () => {
  const navigate = useNavigate();
  const testCards = [
    {
      id: 1,
      title: "Vergence Test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Vergence Test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        padding: { xs: "16px", sm: "32px" }, // Responsive padding
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "start", pb: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Tests
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: "600px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>

      {/* Test Cards */}
      <Grid container spacing={3}>
        {testCards.map((test) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={test.id}>
            <Card
              sx={{
                borderRadius: "8px",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "start",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                {/* Image Placeholder */}
                <Box
                  sx={{
                    width: "100%",
                    height: "150px",
                    mb: 2,
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={testImage}
                    alt="Test"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Card Content */}
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="#0052CC"
                  sx={{ mb: 1 }}
                >
                  {test.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, flexGrow: 1 }}
                >
                  {test.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    textTransform: "none",
                    borderRadius: "8px",
                    px: 3,
                    bgcolor: "#005BB2",
                    fontSize: "0.875rem",
                    "&:hover": { bgcolor: "#003E99" },
                  }}
                  onClick={() => {
                    navigate("/other-tests");
                  }}
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Illustration */}
      <Box
        sx={{
          mt: 6,
          position: "absolute",
          bottom: { xs: "-50px", md: "-100px" },
          right: { xs: "0", md: "16px" },
          width: { xs: "250px", md: "400px" },
          height: "auto",
          textAlign: "center",
        }}
        className="hidden md:flex"
      >
        <img
          src={testBg}
          alt="Illustration"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default TestSection;
