import axios from 'axios';
require('dotenv').config();

const pinataApiKey = process.env.PINATA_API_KEY;
const pinataApiSecret = process.env.PINATA_API_SECRET;

const pinataApiUrl = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

const pinataHeaders = {
  headers: {
    'Content-Type': 'multipart/form-data',
    pinata_api_key: pinataApiKey,
    pinata_secret_api_key: pinataApiSecret,
  },
};

export async function uploadToIPFS(file) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(pinataApiUrl, formData, pinataHeaders);
    const ipfsHash = response.data.IpfsHash;
    return `https://ipfs.pinata.cloud/ipfs/${ipfsHash}`;
  } catch (error) {
    console.error('Error uploading file to Pinata:', error);
    throw error;
  }
}
