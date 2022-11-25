import {ABI} from '@apis/ABI'

const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider("http://52.141.42.92:8545"));

const ENIMAL_CA = '0xDc2935c9dbbECCFdDAfe54098DeA09d2f92bc48A'
const {ENIMAL_ABI} = ABI.CONTRACT_ABI
const enimalContract = new web3.eth.Contract(ENIMAL_ABI, ENIMAL_CA)

const adminAddress = "0x01E04dfC7240B86D115Ed2C232953B0E71333290"
const ERC20_CA = '0x0c54E456CE9E4501D2c43C38796ce3F06846C966'
const {ERC20_ABI} = ABI.CONTRACT_ABI
const ssafyToken = new web3.eth.Contract(ERC20_ABI, ERC20_CA)


async function sendTx(from, to, data, privateKey) {
  let nonce
  web3.eth.getTransactionCount(from, 'pending')
    .then(res => {
      nonce = res
    })
  const txObject = {
    nonce,
    gas: web3.utils.toHex(web3.utils.toWei('1', 'gwei')),
    from,
    to,
    data,
  }
  let result
  await web3.eth.accounts.signTransaction(txObject, privateKey)
    .then(async res => {
      const raw = res.rawTransaction
      await web3.eth.sendSignedTransaction(raw)
        .once('receipt', async (receipt) => {
          result = await parseInt(receipt.logs[0]?.topics[3], 16)
        })
        .on('error', console.error)
    })
  return result
}

export async function create(userAddress, tokenURI) {
  const data = enimalContract.methods.create(userAddress, tokenURI)
  const encodedData = data.encodeABI()
  const privateKey = '0x5d45d001c03e63a1af780053a19de13630f4c960132f9d3952ceed2f95c7b2c6'
  let tokenId
  await sendTx(userAddress, ENIMAL_CA, encodedData, privateKey)
    .then(async (res) => {
      tokenId = res
    })
  return tokenId
}

export async function charge(userAddress, amount, privateKey) {
  const data = ssafyToken.methods.transfer(adminAddress, amount).encodeABI()
  const result = await sendTx(userAddress, ERC20_CA, data, privateKey)
  return result
}

export async function revertCharge(userAddress, amount) {
  const privateKey = '0x9633ab4de4f165c90a031af88a8d5608dcadd2ab99599834c94fab3d77db87cf'
  const data = ssafyToken.methods.transfer(userAddress, amount).encodeABI()
  const result = await sendTx(adminAddress, ERC20_CA, data, privateKey)
  return result
}