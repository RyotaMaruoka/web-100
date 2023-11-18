import { atom } from 'recoil';
import { AuthUsersCollectionType } from '../../DB/UsersCollectionType';

const initialUserCollection: AuthUsersCollectionType = {
  isLogin: false,
  accountId: '',
  chainId: null,
  mail: '',
  name: '',
  isHavingNFT: false,
};

/**
 * ログイン中のユーザの情報を保持するState
 */
export const userCollectionState = atom<AuthUsersCollectionType>({
  key: 'userCollectionState',
  default: initialUserCollection,
});
