import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import ArrowInCircleIcon from "@assets/icons/arrowInCircle"; 
import { Link } from "react-router-dom";

interface AssistanceCardProps {
  title: string;
  description: string;
  illustration: React.ReactNode;
  backgroundColor?: string; 
}

const AssistanceCard: React.FC<AssistanceCardProps> = ({
  title,
  description,
  illustration,
  backgroundColor = "#E9F2FF", 
}) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: backgroundColor,
        width: "100%",
        maxWidth: 400,
        position: "relative",
        overflow: "hidden",
      }}
    >


<div className="flex items-start justify-between gap-2">

<CardContent sx={{ paddingBottom: "1px !important" }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#1E3A8A",
            marginBottom: 1.5,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            marginBottom: 2,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </CardContent>

      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        <Link to="/support">
          <ArrowInCircleIcon style={{ color: "#2563EB", fontSize: 28 }} />
        </Link>
      </Box>

      </div>

      {/* Illustration */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "auto",
          width: "100%",

        }}
      >
        {illustration}
      </Box>
    </Card>
  );
};

export default AssistanceCard;
