import { ChainEnum } from '../const/ChainEnum';

export type UsersCollectionType = {
  // metamaskのaccountID
  accountId: string;
  // 接続しているchain
  chainId: ChainEnum | null;
  // mailAddress
  mail: string;
  // 名前
  name: string;
  // NFTを所有しているか
  isHavingNFT: boolean;
};

export type AuthUsersCollectionType = { isLogin: boolean } & UsersCollectionType;
