//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract UserVault {
    struct File {
        address owner;
        string name;
        string uid;
        string file_type;
        string size;
        string cid;
    }

    event FileAdded(address owner, string name, string uid, string file_type, string size, string cid);

    mapping(address => File[]) private files;

    function addFile(
        string memory name,
        string memory uid,
        string memory file_type,
        string memory size,
        string memory cid
    ) external payable {
        File memory file = File(msg.sender, name, uid, file_type, size, cid);
        files[msg.sender].push(file);
    }

    function getFiles() public view returns (File[] memory) {
        return files[msg.sender];
    }

    function getFile(string memory uid) public view returns (File memory file) {
        File[] memory userFiles = files[msg.sender];

        if (userFiles.length == 0) {
            return File(address(0), "sadge", "", "", "", "");
        } else {
        for (uint256 i = 0; i < userFiles.length; i++) {
            if (keccak256(abi.encodePacked(userFiles[i].uid)) == keccak256(abi.encodePacked(uid))) {
                return userFiles[i];
            }
        }
        }
    }

    function deleteFile(string memory uid) public {
        File[] storage userFiles = files[msg.sender];
        for (uint256 i = 0; i < userFiles.length; i++) {
            if (keccak256(abi.encodePacked(userFiles[i].uid)) == keccak256(abi.encodePacked(uid))) {
                delete userFiles[i];
            }
        }
    }
}