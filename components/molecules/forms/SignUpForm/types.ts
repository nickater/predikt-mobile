import { SignUpUserInput } from "@/components/organisms/SignUp/types";

export type SignUpFormUserInput = {
  confirmPassword: string;
} & SignUpUserInput;
