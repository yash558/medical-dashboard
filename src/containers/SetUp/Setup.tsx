

import SetupLayout from "@containers/SetupLayout/SetupLayout";
import setupImage from "@assets/Common/setupdoctor.svg";
import { SetUpForm } from "./setUpForm";

const Setup = () => {


  return (
    <SetupLayout defaultBackgroundClassName="bg-white" className="relative flex justify-center items-center">
      <SetUpForm />
      <img src={setupImage} alt="setup" className="absolute bottom-0 right-[5%] md:flex hidden" />
    </SetupLayout>
  );
};

export default Setup;
