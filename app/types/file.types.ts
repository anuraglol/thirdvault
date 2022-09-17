interface IFile {
  name: string;
  hash: string | ArrayBuffer;
  size: number;
  type: string;
  owner: string;
}

export type { IFile };
