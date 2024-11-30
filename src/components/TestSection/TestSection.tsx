
import { Box, Typography, Grid, Link } from "@mui/material";
import TestCard from "@components/TestCard/TestCard";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const TestSection = () => {
  const testCards = [
    { id: 1, title: "Test Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, title: "Test Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, title: "Test Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 4, title: "Test Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  return (
    <Box>
      {/* Header Section */}
      <Box mb={4}>
        <Typography variant="body2" color="primary">
          <Link href="/tests" underline="hover" color="primary">
            <ArrowBackIosNewIcon sx={{ fontSize: 12, color: "#000000" }} className="mr-2"/>
          </Link>
          <Link href="/tests" underline="hover" color="primary">
            Test &gt; Orthoptics Test
          </Link>
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Orthoptics Test
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>

      {/* Grid of Cards */}
      <Grid container spacing={2}>
        {testCards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.id}>
            <TestCard title={card.title} description={card.description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestSection;
