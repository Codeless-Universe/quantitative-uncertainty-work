export type TAccount = {
  id: string;
  displayName: string;
  email: string;
  password: string;
  avatar?: string;
  role: string;
  createdAccountId?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TProject = {
  id?: string;
  name: string;
  introduce?: string;
  createdAccountId: string;
  createdAt: Date;
};

export type TProjectMember = {
  id?: string;
  accountId: string;
  displayName?: string;
  createdAccountId: string;
  createdAt: Date;
};

export type TProjectTaskStatus = "ToBeEvaluated" | "Evaluated" | "Void" | "split"; //待评估，已评估，拆分，作废

export type TProjectTask = {
  id?: string;
  projectId: string;
  parentTaskId?: string;
  createdAccountId: string;
  createdAt: Date;
  title: string;
  description: string;
  status: TProjectTaskStatus;
};

export type TProjectTaskLog = {
  id?: string;
  taskId?: string;
  createdAccountId: string;
  createdAt: Date;
  status: TProjectTaskStatus;
};
