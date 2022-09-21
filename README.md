# ![icon](/app/public/assets/icon.svg)

### [App](https://thirdvault.vercel.app/)
Store all your secret files on your own secured vault, powered by IPFS and thirdweb.

![thirdvault](/app/public/assets/og.png)

### Features

- Store your files secretely on your own vault
- Download files
- Operation on files
- Files are encrypted using the `HMAC-SHA256` algorithm and are safely stored.

### Technologies Used

- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [thirdweb](https://thirdweb.com)
- [web3.storage](https://web3.storage/)

#### Thirdweb

This project uses the `thirdweb-dev/react` sdk to authenticate users using their wallet and to interact with our custom contract.

As for the contract, its deployed using the `thirdweb deploy` command and uses `thirdweb releases` as the registry to publish new versions.

### Contract

The contract for this project is released on the thirdweb registry using the `npx thirdweb release` command.

Contract Link: https://thirdweb.com/0x388e74C9085ba2bf43f9BF45aF13740Ea204cbde/UserVault

### Demo

[Demo Video](https://www.loom.com/share/4897185022804c8db0ddbfac927b8619)

### Author

[Anurag](https://anurag.tech)
- [Twitter](https://twitter.com/imanuraglol)
- [Github](https://github.com/kr-anurag)
