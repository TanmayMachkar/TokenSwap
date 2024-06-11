const ethers = require('ethers');
const {
	factoryAddress,
	routerAddress,
	fromAddress,
	toAddress
} = require('./AddressList');
const { erc20ABI, factoryABI, pairABI, routerABI } = require('./AbiInfo');

const provider = new ethers.providers.JsonRpcProvider(
	'https://bsc-dataseed.binance.org'
);

const factoryInstance = new ethers.Contract(
	factoryAddress, factoryABI, provider
)

console.log(factoryInstance);