import { moveCall } from '../typescript/move_call'

(async () => {
  const answerPkgId = '0xb73cffbdf38bd66effd033ae1046856914ffb9af';
  const counterId = '0x8bf7dfe0283b8121ffdd979661e0ae4f4e5ea96a'
  const moduleName = 'answer';
  const funcName = 'answer';
  const typeArgs: string[] = [];
  const args: any[] = [counterId];
  const res = await moveCall(answerPkgId, moduleName, funcName, typeArgs, args);
  console.log(res)
})();
