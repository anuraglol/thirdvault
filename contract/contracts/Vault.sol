//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract UserVault {
    constructor () {
        console.log("Hello, world!");
    }

    struct File {
        address owner;
        string name;
        string uid;
        string file_type;
        string size;
        string cid;
    }

    File[] public files;

    function addFile(
        string memory name,
        string memory uid,
        string memory file_type,
        string memory size,
        string memory cid
    ) public {
        File memory file = File(msg.sender, name, uid, file_type, size, cid);
        // files.push(file);

        return file;
    }

    function getFiles() public view returns (File[] memory) {
        return files;
    }
}