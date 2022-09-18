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
    ) external payable {
        File memory file = File(msg.sender, name, uid, file_type, size, cid);
        files.push(file);
    }

    function deleteFile(string memory uid) external {
        for (uint256 i = 0; i < files.length; i++) {
            if (keccak256(abi.encodePacked(files[i].uid)) == keccak256(abi.encodePacked(uid))) {
                 require(files[i].owner == msg.sender, "You are not the owner of this file");     

                delete files[i];
            }
        }
    }

    function getFiles() public view returns (File[] memory) {
        return files;
    }
}