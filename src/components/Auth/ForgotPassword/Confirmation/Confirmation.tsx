// components
import { Button } from "@components/Button";
import { FormWrapper } from "@components/Form";

interface ConfirmationProps {
  handleOnSubmit: () => void;
}

export const Confirmation: React.FC<ConfirmationProps> = ({
  handleOnSubmit,
}) => (
  <FormWrapper asDiv>
    <Button
      variant="primary"
      type="button"
      size="md"
      onClick={handleOnSubmit}
      className="w-full"
    >
      Back To Login
    </Button>
  </FormWrapper>
);
