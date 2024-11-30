export const FormWrapper = ({ children, asDiv, onSubmit }) => (
  <>
    {asDiv ? (
      <div className="flex flex-col w-full gap-3 2xl:gap-4">{children}</div>
    ) : (
      <form
        className="flex flex-col w-full gap-3 2xl:gap-4"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    )}
  </>
);
