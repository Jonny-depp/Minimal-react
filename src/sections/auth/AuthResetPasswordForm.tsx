import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router";
import FormProvider, { RHFTextField } from "../../components/hook-form";
import { PATH_AUTH } from "../../routes/paths";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const AuthResetPasswordForm = () => {
  const navigate = useNavigate();
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
  });

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { email: "demo@minimals.cc" },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: { email: string }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      sessionStorage.setItem("email-recovery", data.email);
      navigate(PATH_AUTH.newPassword);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField name="email" label="Email address" />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 3 }}
      >
        Send Request
      </LoadingButton>
    </FormProvider>
  );
};

export default AuthResetPasswordForm;
