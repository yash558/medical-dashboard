
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import testImage from "@assets/Common/test.svg";

const TestCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "300px",
      }}
    >
      <img src={testImage} alt="Test" style={{ width: "100%", height: "auto" }} />
      <CardContent>
        <Typography variant="h6" color="primary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 2 }}>
        <Button variant="contained" className="text-[#005BB2] bg-[#E7ECF3]"  fullWidth>
          VIEW TEST
        </Button>
      </CardActions>
    </Card>
  );
};

export default TestCard;
