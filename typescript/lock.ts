import { signer } from "./common"
const resouceId = '0xc96773182b5e388bd91aa6bbe86dd79bcab19284'
const solutionId = '0x83ee2c65742e32fabdb7a00ddfa536a4a65b779a'

const data1 = [
  2, 14, 13, 6, 17, 0, 19,
  20, 11, 0, 19, 8, 14, 13,
  18, 24, 14, 20, 12, 0,
  13, 0, 6, 4, 3, 19, 14,
  1, 17, 4, 0, 10, 19, 7,
  4, 7, 8, 11, 11, 2, 8,
  15, 7, 4, 17, 7, 0, 2,
  10, 19, 7, 4, 7, 0, 2,
  10, 24, 15, 11, 0, 13, 4, 19
]
const data2 = [25, 11, 6, 10, 13, 25, 12, 19, 2]

const getFlag = async () => {
  const moveCallTxn = await signer.executeMoveCallWithRequestType({
    packageObjectId: solutionId,
    module: 'solution',
    function: 'get_flag',
    typeArguments: [],
    arguments: [data1, data2, resouceId],
    gasBudget: 1000000,
  })
  console.log('moveCallTxn', moveCallTxn)
}

getFlag()
