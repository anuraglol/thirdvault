interface IProfileForm {
  name: string;
  username: string;
  bio?: string;
  address: string;
  avatar?: ArrayBuffer | string;
}

export type { IProfileForm };
