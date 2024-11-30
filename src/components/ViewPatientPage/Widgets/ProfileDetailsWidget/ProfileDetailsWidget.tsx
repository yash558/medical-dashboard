import {
  ProfileDetailsWidgetDesktop,
  ProfileDetailsWidgetMobile,
} from "./index";

interface ProfileDetails {
  local: {
    email: string;
    contact: string;
    province: string;
    country: string;
    eye: string;
    address: string;
    firstName: string;
    lastName: string;
  };
  referenceNumber: string;
  created_at?: string;
}

interface ProfileDetailsWidgetProps {
  isMobile?: boolean;
  data?: ProfileDetails | null;
}

export const ProfileDetailsWidget: React.FC<ProfileDetailsWidgetProps> = ({
  isMobile = false,
  data,
}) => {
  const profileDetails = data;

  const getCreatedAt = () => {
    if (profileDetails?.created_at) {
      return new Date(profileDetails.created_at).toLocaleDateString();
    }
    return "";
  };

  const widgetData = profileDetails
    ? {
        email: profileDetails.local.email || "",
        contact: profileDetails.local.contact || "",
        location: `${profileDetails.local.province || ""}, ${
          profileDetails.local.country || ""
        }`,
        eye: profileDetails.local.eye || "",
        "Reference Number": profileDetails.referenceNumber || "",
        createdAt: getCreatedAt(),
        address: profileDetails.local.address || "",
      }
    : {
        email: "",
        contact: "",
        location: "",
        eye: "",
        "Reference Number": "",
        address: "",
        createdAt: "",
      };

  const fullName = profileDetails
    ? `${profileDetails.local.firstName || ""} ${
        profileDetails.local.lastName || ""
      }`
    : "Dawn Lee";

  return (
    <>
      {isMobile ? (
        <ProfileDetailsWidgetMobile
          widgetData={widgetData}
          fullName={fullName}
        />
      ) : (
        <ProfileDetailsWidgetDesktop
          widgetData={widgetData}
          fullName={fullName}
        />
      )}
    </>
  );
};
