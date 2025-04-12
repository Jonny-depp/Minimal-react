import { ReactNode } from "react";
import { FormProvider as Form, UseFormReturn } from "react-hook-form";
interface FormPorviderProps {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
export default function FormPorvider({
  children,
  onSubmit,
  methods,
}: FormPorviderProps) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
