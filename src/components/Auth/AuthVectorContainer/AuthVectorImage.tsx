// asset
import Vector from "@assets/AuthPage/vector.svg";

export const AuthVectorImage = () => (
  <div className="xl:absolute top-16 right-0 flex items-start justify-end flex-grow  h-5/6   w-full xl:w-2/3 max-w-[550px] ">
    <span
      style={{
        backgroundImage: `url(${Vector})`,
      }}
      className="flex-grow bg-no-repeat  h-full w-full  bg-contain "
    />
  </div>
);
