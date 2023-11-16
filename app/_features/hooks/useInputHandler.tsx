import { Dispatch, SetStateAction, useState } from 'react';

/**
 * inputの値を管理するカスタムフック
 *
 * @param initValue 初期値
 * @returns
 * value: 管理する値
 * handler: inputのonChangeに渡す関数
 * onChange: valueを変更する関数
 */
export const useInputHandler = (
  initValue: string
): [
  value: string,
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onChange: Dispatch<SetStateAction<string>>
] => {
  const [value, setValue] = useState<string>(initValue);
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, handler, setValue];
};
