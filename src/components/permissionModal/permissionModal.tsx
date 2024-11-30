import React from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  useMediaQuery,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import UnlockIcon from "@assets/icons/unlock";
import { useDispatch, useSelector } from "react-redux";
import { setClose } from "@redux/slices/authenticationSlice";
import ArrowLeftIcon from "../../assets/icons/arrowleftModal";

const ModalPopup: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleClose = () => dispatch(setClose());

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "600px", // Adjust width for mobile
    bgcolor: "white",
    borderRadius: "16px",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    textAlign: "left",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F9FC",
    margin: isMobile ? "8px 0" : "", 
    padding: "10px",
    borderRadius: "8px",
    flex: "1 1 auto",
  };

  const bodyStyle = {
    padding: isMobile ? "16px" : "24px", // Reduce padding for mobile
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // Stack content on mobile
    alignItems: "center",
    justifyContent: isMobile ? "center" : "space-between",
    gap: isMobile ? "16px" : "0",
  };

  const footerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // Stack buttons on mobile
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ECF6FF",
    padding: "16px 24px",
    gap: isMobile ? "16px" : "0", // Add spacing between buttons on mobile
  };

  return (
    <Modal
      open={authState.open}
      onClose={authState.open ? handleClose : undefined}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={authState.open}>
        <Box sx={modalStyle}>

          <Box sx={bodyStyle}>
            
            <Box>
            <Box sx={{ display: "flex", gap: "10px", paddingY: "16px", alignItems: "start", justifyContent: "start", width: "100%" }}>
            <Box sx={headerStyle}>
              <InfoOutlinedIcon sx={{ fontSize: 20, color: "#1D4ED8" }} />
              
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#005BB2",
                  fontWeight: "bold",
                  fontSize: isMobile ? "12px" : "10px",
                  textTransform: "uppercase",
                }}
              >
                 Plan Payment Method
              </Typography>
            </Box>
            <Box sx={headerStyle}>
              <InfoOutlinedIcon sx={{ fontSize: 20, color: "#1D4ED8" }} />
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#005BB2",
                  fontWeight: "bold",
                  fontSize: isMobile ? "12px" : "10px",
                  textTransform: "uppercase",
                }}
              >
                2FA Pending
              </Typography>
            </Box>
          </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "normal",
                  color: "#475467",
                  marginBottom: "16px",
                }}
              >
                Unlock Your Charts
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#005BB2",
                  marginBottom: "8px",
                }}
              >
                To access the charts, please complete the following steps.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#475467",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                1. Set up two-factor authentication
                <br />
                2. Make required payment
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Both steps are required to view charts.
              </Typography>
            </Box>
            <UnlockIcon
              style={{
                width: isMobile ? "60px" : "300px",
                height: isMobile ? "60px" : "300px",
              }}
            />
          </Box>

          {/* Footer */}
          <Box sx={footerStyle}>
            <Button
              variant="outlined"
              sx={{
                color: "#1D4ED8",
                borderColor: "#BCBEC0",
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 16px",
                borderRadius: "8px",
                width: isMobile ? "100%" : "auto", // Full width for mobile
              }}
              onClick={handleClose}
            >
              <ArrowLeftIcon />
              <Typography variant="body1" sx={{ fontWeight: "bold", marginLeft: "8px" }}>
                Back
              </Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1D4ED8",
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 36px",
                borderRadius: "8px",
                width: isMobile ? "100%" : "auto", // Full width for mobile
                "&:hover": {
                  backgroundColor: "#005BB2",
                },
              }}
              onClick={() => alert("2FA setup clicked")}
            >
              Buy Plan & Set Up 2FA
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalPopup;
