import React, { useState } from "react";
import { connectWallet } from "./connectWallet";
import { uploadToIPFS } from "./ipfsUploader";

function MintNFT() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");

  const mint = async () => {
    setStatus("Uploading to IPFS...");
    const imageURI = await uploadToIPFS(image);

    setStatus("Minting NFT...");
    const { signer, contract } = await connectWallet();
    const tokenURI = `data:application/json;base64,${btoa(
      JSON.stringify({
        name,
        description,
        image: imageURI,
      })
    )}`;

    const transaction = await contract.mintNFT(signer.getAddress(), tokenURI);
    await transaction.wait();

    setStatus("NFT minted!");
  };

  return (
    <div>
      <h2>Mint a New NFT</h2>
      <input
        type="text"
        placeholder="NFT Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="NFT Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={mint}>Mint NFT</button>
      <p>{status}</p>
    </div>
  );
}

export default MintNFT;
