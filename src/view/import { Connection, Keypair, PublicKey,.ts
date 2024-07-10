import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

// Function to send SPL tokens
async function sendSPLToken(
  senderSecretKey: Uint8Array,
  recipientPublicKeyString: string,
  mintAddressString: string,
  amount: number
): Promise<void> {
  // Connect to the Solana cluster (devnet for testing purposes)
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  // Create the sender's Keypair from the secret key
  const senderKeypair = Keypair.fromSecretKey(senderSecretKey);
  const senderPublicKey = senderKeypair.publicKey;

  // Convert recipient public key and mint address to PublicKey objects
  const recipientPublicKey = new PublicKey(recipientPublicKeyString);
  const mintPublicKey = new PublicKey(mintAddressString);

  // Fetch or create the sender's token account for the mint
  const senderTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    senderKeypair,
    mintPublicKey,
    senderPublicKey
  );

  // Fetch or create the recipient's token account for the mint
  const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    senderKeypair,
    mintPublicKey,
    recipientPublicKey
  );

  // Transfer the tokens
  const signature = await transfer(
    connection,
    senderKeypair,
    senderTokenAccount.address,
    recipientTokenAccount.address,
    senderPublicKey,
    amount,
    []
  );

  console.log(`Transaction signature: ${signature}`);
}

// Example usage
const senderSecretKey = Uint8Array.from([
  106, 152, 233, 98, 2, 218, 232, 190, 192, 70, 180, 114, 0, 212, 137, 119, 181,
  151, 232, 156, 185, 245, 254, 9, 151, 211, 180, 28, 119, 40, 57, 169, 33, 112,
  140, 129, 106,
]);
// const senderSecretKey = Uint8Array.from([/* Array of numbers for sender's secret key */]);
const recipientPublicKey = "RecipientPublicKeyHere";
const mintAddress = "TokenMintAddressHere";
const amount = 100; // Amount of tokens to send

sendSPLToken(senderSecretKey, recipientPublicKey, mintAddress, amount)
  .then(() => console.log("Token transfer successful!"))
  .catch((err) => console.error("Token transfer failed:", err));
