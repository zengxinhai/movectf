import { provider } from "./common";

const getObject = async (objectId: string) => {
  return provider.getObject(objectId);
}

(async () => {
  const objectId = '0x9dce034b912167b4bff7cfa28766504e470fa38b';
  console.log(await getObject(objectId));
})();
