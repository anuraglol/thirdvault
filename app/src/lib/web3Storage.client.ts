import { Web3Storage } from "web3.storage";

const client = new Web3Storage({ token: process.env[`NEXT_PUBLIC_WEB3_STORAGE_TOKEN`] });

export { client };
