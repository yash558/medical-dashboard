import React from "react";
import AssistanceCard from "../AssitantCard/AssistantCard";
import { Box } from "@mui/material";
import PersonSittingIcon from "../../assets/icons/personSittingIcon";
import PlusOtherAppIcon from "../../assets/icons/plusOtherApp";




const AssistanceSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: { xs: "column", md: "column" },
        gap: 3,
        justifyContent: "center",
     
       
      }}
    >
      {/* Card 1 */}
      <AssistanceCard
        title="For any assistance"
        description="Orbsway is ready to help you. Contact us with your concerns anytime."
        illustration={<PlusOtherAppIcon style={{width: "50%", height: "auto"}} />}
        backgroundColor="#E9F2FF"
      />

      {/* Card 2 */}
      <AssistanceCard
        title="For more apps"
        description="Contact Orbsway support with your suggestions and requirements for charts."
        illustration={<PersonSittingIcon style={{ width: "80%", height: "auto" }} />}
       backgroundColor="#E9F2FF"
      />
    </Box>
  );
};

export default AssistanceSection;
