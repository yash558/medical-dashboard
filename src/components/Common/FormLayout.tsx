export const FormLayout = ({ formContent, layoutClassName, children }) => {
  return (
    <div
      className={`flex justify-center xl:justify-between gap-8 h-full w-full flex-grow ${layoutClassName}`}
    >
      <div className="flex items-center justify-center p-4 min-w-full sm:min-w-[420px] border border-[var(--border-secondary)] rounded-2xl">
        {formContent}
      </div>
      {children}
    </div>
  );
};
