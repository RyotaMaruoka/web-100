import { ChainEnum } from '../const/ChainEnum';

export type UsersCollectionType = {
  // metamaskのaccountID
  accountId: string;
  // 接続しているchain
  chainId: ChainEnum;
  // mailAddress
  mail: string;
  // 名前
  name: string;
};
