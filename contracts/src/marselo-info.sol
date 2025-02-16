// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "coprocessor-base-contract/CoprocessorAdapter.sol";

contract OnChainDataFetcher is CoprocessorAdapter {
    // Struct to store on-chain data
    struct OnChainInfo {
        uint256 blockTime;    // Timestamp of the current block
        uint256 balance;      // Account balance
        uint256 gasPrice;     // Gas price at the time of the transaction
        uint256 difficulty;   // Mining difficulty for the current block
        uint256 baseFee;      // Base fee of the current block
        uint256 gasLimit;     // Gas limit of the current block
        bytes32 blockHash;    // Block hash of the previous block
        address miner;        // Address of the block miner
        address txOrigin;     // Transaction origin (first account in the transaction chain)
        address msgSender;    // Address of the sender of the current transaction
    }

    // Example of predefined whale addresses
    address[3] public accounts = [
        0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef,
        0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8,
        0x742d35Cc6634C0532925a3b844Bc454e4438f44e
    ];

    // Mapping for handling callbacks and tracking task status
    mapping(bytes32 => address) public callbacks;
    mapping(bytes32 => bool) public computationSent;

    // Example of a function that requests data from the Coprocessor
    function requestOnChainData(address account) external {
        // Encode the data to be processed by the Coprocessor
        bytes memory input = abi.encode(account);
        bytes32 inputHash = keccak256(input);
        computationSent[inputHash] = true;

        // Send the task to the Coprocessor for processing
        taskIssuer.issueTask(machineHash, input, address(this));
    }

    // Function that handles the result (notice) from the Coprocessor
    function handleNotice(bytes32 _payloadHash, bytes memory notice) internal override {
        // Decode the Coprocessor's result (for example, balance and gas price)
        (uint256 balance, uint256 gasPrice) = abi.decode(notice, (uint256, uint256));

        // Check if the task was successfully processed
        if (computationSent[_payloadHash]) {
            address callback = callbacks[_payloadHash];
            if (callback != address(0)) {
                // Example of callback handling (could be an external function using the processed data)
                // Here, you might store or return the result to the user
                // Assume handleResult is an external function
                // Callback: process the result after off-chain computation
                OnChainInfo memory result = OnChainInfo({
                    blockTime: block.timestamp,
                    balance: balance,
                    gasPrice: gasPrice,
                    difficulty: block.prevrandao,
                    baseFee: block.basefee,
                    gasLimit: block.gaslimit,
                    blockHash: blockhash(block.number - 1),
                    miner: block.coinbase,
                    txOrigin: tx.origin,
                    msgSender: msg.sender
                });

                // Example of using the callback (adapt to your implementation)
                // callback.handleResult(result);
            }
            // Clean up state after processing
            delete computationSent[_payloadHash];
            delete callbacks[_payloadHash];
        }
    }

    // Example of a mocked function to set a callback
    function setCallback(bytes32 _payloadHash, address _callback) external {
        callbacks[_payloadHash] = _callback;
    }
}
