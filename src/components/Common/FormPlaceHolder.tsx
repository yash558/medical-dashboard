export const FormPlaceHolder = () => {
  return (
    <div
      className="flex items-center justify-center p-4 font-bold text-base md:text-4xl h-full min-h-[618px] xl:min-h-full w-full text-center  whitespace-pre-line rounded-2xl"
      style={{
        background: `repeating-linear-gradient(45deg,white,white 50px,#3b82f6 50px,#3b82f6 100px)`,
      }}
    >
      {`The form will be added here \n (provider to be decided).`}
    </div>
  );
};
