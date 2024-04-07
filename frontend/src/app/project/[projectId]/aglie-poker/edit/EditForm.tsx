import { FormRole } from "@/pkgs/base/components/form/FormRole";
import FormWrap, { FormContext, FormWrapHander, TFormContext } from "@/pkgs/base/components/form/FormWrap";
import FormInput from "@/pkgs/base/components/form/item/FormInput";
import FormSubmitButton from "@/pkgs/base/components/form/item/FormSubmitButton";
import FormTextarea from "@/pkgs/base/components/form/item/FormTextarea";
import { useRouterHelper } from "@/pkgs/base/helper/useRouterHelper";
import { api } from "@/pkgs/trpc/react";
import { useParams } from "next/navigation";
import { useContext } from "react";

export default function EditForm({ ...props }: { onSubmitDone?: () => void }) {
  const create = api.agilePoker.create.useMutation();

  const params = useParams<{ projectId: string }>();
  const routerHelper = useRouterHelper({});
  const formContext: TFormContext = useContext(FormContext);

  let formWrapHander = FormWrapHander(async () => {
    return {
      name: "",
      meetingLink: "",
      task: "",
    };
  });

  formWrapHander.onSubmit = async (formData) => {
    const data = { ...formData, projectId: params.projectId };
    const res = await create.mutateAsync(data);
    props.onSubmitDone && props.onSubmitDone();
    routerHelper.router.push("/project" + params.projectId + "/aglie-poker/detail/" + res.id);
  };

  return (
    <FormWrap formWrapHanderInstance={formWrapHander} className="flex flex-col gap-3">
      <FormInput field="name" label="Name" rules={{ ...FormRole.minLength(2) }} variant="bordered" />
      <FormInput field="meetingLink" label="MeetingLink" rules={{ ...FormRole.minLength(2) }} variant="bordered" />
      <FormTextarea field="task" label="Task" variant="bordered" rules={{}} />
      <div className="flex flex-row justify-start gap-2 py-4">
        <FormSubmitButton color="primary" type="submit">
          OK
        </FormSubmitButton>
      </div>
    </FormWrap>
  );
}
