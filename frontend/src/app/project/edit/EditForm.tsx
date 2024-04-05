import { FormRole } from "@/pkgs/base/components/form/FormRole";
import FormWrap, { FormContext, FormWrapHander, TFormContext } from "@/pkgs/base/components/form/FormWrap";
import FormInput from "@/pkgs/base/components/form/item/FormInput";
import FormSubmitButton from "@/pkgs/base/components/form/item/FormSubmitButton";
import FormTextarea from "@/pkgs/base/components/form/item/FormTextarea";
import { useRouterHelper } from "@/pkgs/base/helper/useRouterHelper";
import { api } from "@/pkgs/trpc/react";
import { useContext } from "react";

export default function EditForm({ ...props }: { onSubmitDone?: () => void }) {
  const create = api.project.create.useMutation();
  const update = api.project.update.useMutation();

  const { param, router } = useRouterHelper({
    id: "",
  });
  const formContext: TFormContext = useContext(FormContext);

  let formWrapHander = FormWrapHander(async () => {
    return {
      name: "",
      introduce: "",
    };
  });

  formWrapHander.onSubmit = async (formData) => {
    const data = { ...formData, ...param };
    if (data.id) {
      await update.mutateAsync(data);
    } else {
      await create.mutateAsync(data);
    }
    props.onSubmitDone && props.onSubmitDone();
    router.push("/my/project");
  };

  return (
    <FormWrap formWrapHanderInstance={formWrapHander} className="flex flex-col gap-3">
      <FormInput field="name" label="Name" rules={{ ...FormRole.minLength(2) }} variant="bordered" />
      <FormTextarea field="introduce" label="Introduce" variant="bordered" rules={{}} />
      <div className="flex flex-row justify-start gap-2 py-4">
        <FormSubmitButton color="primary" type="submit">
          OK
        </FormSubmitButton>
      </div>
    </FormWrap>
  );
}
