// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OnChainDataFetcher {
    struct OnChainInfo {
        uint256 blockTime;
        uint256 balance;
        uint256 gasPrice;
        uint256 difficulty;
        uint256 baseFee;
        uint256 gasLimit;
        bytes32 blockHash;
        address miner;
        address txOrigin;
        address msgSender;
    }

    address[3] public accounts = [
        0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef,
        0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8,
        0x742d35Cc6634C0532925a3b844Bc454e4438f44e
    ];

    function getBlockTimestamp() public view returns (uint256) {
        return block.timestamp;
    }

    function getBalance(address[] memory _accounts) public view returns (uint256[] memory) {
        uint256[] memory balances = new uint256[](_accounts.length);
        for (uint256 i = 0; i < _accounts.length; i++) {
            balances[i] = address(_accounts[i]).balance;
        }
        return balances;
    }

    function getGasPrice() public view returns (uint256) {
        return tx.gasprice;
    }

    function getBlockDifficulty() public view returns (uint256) {
        return block.prevrandao;
    }

    function getBaseFee() public view returns (uint256) {
        return block.basefee;
    }

    function getBlockGasLimit() public view returns (uint256) {
        return block.gaslimit;
    }

    function getBlockHash(uint256 blockNumber) public view returns (bytes32) {
        require(blockNumber < block.number, "Block not yet mined");
        return blockhash(blockNumber);
    }

    function getBlockMiner() public view returns (address) {
        return block.coinbase;
    }

    function getTxOrigin() public view returns (address) {
        return tx.origin;
    }

    function getMsgSender() public view returns (address) {
        return msg.sender;
    }

    function getCodeSize(address contractAddress) public view returns (uint256) {
        uint256 size;
        assembly {
            size := extcodesize(contractAddress)
        }
        return size;
    }

    function getAllData(address account) public view returns (OnChainInfo memory) {
        return OnChainInfo({
            blockTime: getBlockTimestamp(),
            balance: address(account).balance,
            gasPrice: getGasPrice(),
            difficulty: getBlockDifficulty(),
            baseFee: getBaseFee(),
            gasLimit: getBlockGasLimit(),
            blockHash: getBlockHash(block.number - 1),
            miner: getBlockMiner(),
            txOrigin: getTxOrigin(),
            msgSender: getMsgSender()
        });
    }

    // Função mockada que retorna os saldos dos endereços
    function getAllAccountsBalance() public view returns (uint256[] memory) {
        // Converte o array de tamanho fixo (address[3]) para um array dinâmico (address[])
        address[] memory dynamicAccounts = new address[](accounts.length);
        for (uint256 i = 0; i < accounts.length; i++) {
            dynamicAccounts[i] = accounts[i];
        }
        return getBalance(dynamicAccounts);
    }
}
