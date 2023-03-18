import { moveCall } from '../typescript/move_call'

(async () => {
  const answerPkgId = '';
  const moduleName = 'answer';
  const funcName = 'answer';
  const typeArgs: string[] = [];
  const args: any[] = [];
  const res = await moveCall(answerPkgId, moduleName, funcName, typeArgs, args);
  console.log(res)
})();
