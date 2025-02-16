
import { createPublicClient, createWalletClient, http, parseAbi } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { useState, useEffect } from 'react';

const rpcUrl = 'http://localhost:8545';
const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
const contractAddress = '0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e';
const abi = parseAbi([
  'function setNumber(uint256 newNumber) public',
  'function increment() public',
  'function number() public view returns (uint256)',
]);

const publicClient = createPublicClient({ transport: http(rpcUrl) });
const account = privateKeyToAccount(privateKey);
const walletClient = createWalletClient({ account, transport: http(rpcUrl) });

export default function CounterContract() {
  const [newNumber, setNewNumber] = useState('');
  const [currentNumber, setCurrentNumber] = useState(null);

  async function callSetNumber() {
    try {
      const txHash = await walletClient.writeContract({
        address: contractAddress,
        abi,
        functionName: 'setNumber',
        args: [BigInt(newNumber)],
      });

      await publicClient.waitForTransactionReceipt({ hash: txHash });

      alert('Number set successfully!');
      fetchCurrentNumber();
    } catch (error) {
      console.error('Error setting number:', error);
      alert('Error: ' + error.message);
    }
  }

  async function callIncrement() {
    try {
      const txHash = await walletClient.writeContract({
        address: contractAddress,
        abi,
        functionName: 'increment',
      });

      await publicClient.waitForTransactionReceipt({ hash: txHash });

      alert('Number incremented successfully!');
      fetchCurrentNumber();
    } catch (error) {
      console.error('Error incrementing number:', error);
      alert('Error: ' + error.message);
    }
  }

  async function fetchCurrentNumber() {
    try {
      const result = await publicClient.readContract({
        address: contractAddress,
        abi,
        functionName: 'number',
      });

      setCurrentNumber(result.toString());
    } catch (error) {
      console.error('Error fetching current number:', error);
    }
  }

  // Chamar automaticamente ao montar o componente
  useEffect(() => {
    fetchCurrentNumber();
  }, [currentNumber]);

  return (
    <div>
      <h3>Current Number: {currentNumber !== null ? currentNumber : 'Loading...'}</h3>

      <input
        type="number"
        placeholder="New number"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
      />
      <button onClick={callSetNumber}>Set Number</button>

      <button onClick={callIncrement}>Increment</button>

      <button onClick={fetchCurrentNumber}>Refresh Number</button>
    </div>
  );
}

