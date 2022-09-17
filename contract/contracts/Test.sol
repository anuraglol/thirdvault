// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract TestContract {
    constructor() {}

    struct File {
        address owner;
        string name;
        string cid;
        string file_type;
        string size;
        string uid;
    }

    struct Image {
        address owner;
        string name;
        string cid;
        string file_type;
        string size;
        string uid;
    }

    mapping(address => File[]) private files;
    mapping(address => Image[]) private images;

    function getFiles() public view returns (File[] memory) {
        return files[msg.sender];
    }

    function createFile(
        string memory uid,
        string memory name,
        string memory file_type,
        string memory cid,
        string memory size
    ) external payable {
        File memory file;
        file.owner = msg.sender;
        file.name = name;
        file.file_type = file_type;
        file.cid = cid;
        file.size = size;
        file.uid = uid;

        files[msg.sender].push(file);
    }

    function getFile(string memory uid) public view returns (File memory) {
        File[] memory userFiles = files[msg.sender];
        for (uint256 i = 0; i < userFiles.length; i++) {
            if (keccak256(abi.encodePacked(userFiles[i].uid)) == keccak256(abi.encodePacked(uid))) {
                return userFiles[i];
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

    function getAllFilesLength() public view returns (uint256) {
        return files[msg.sender].length;
    }

    function createImage(
        string memory uid,
        string memory name,
        string memory file_type,
        string memory cid,
        string memory size
    ) external payable {
        Image memory image;
        image.owner = msg.sender;
        image.name = name;
        image.file_type = file_type;
        image.cid = cid;
        image.size = size;
        image.uid = uid;

        images[msg.sender].push(image);
    }

    function getImage(string memory uid) public view returns (Image memory) {
        Image[] memory userImages = images[msg.sender];
        for (uint256 i = 0; i < userImages.length; i++) {
            if (keccak256(abi.encodePacked(userImages[i].uid)) == keccak256(abi.encodePacked(uid))) {
                return userImages[i];
            }
        }
    }

    function deleteImage(string memory uid) public {
        Image[] storage userImages = images[msg.sender];
        for (uint256 i = 0; i < userImages.length; i++) {
            if (keccak256(abi.encodePacked(userImages[i].uid)) == keccak256(abi.encodePacked(uid))) {
                delete userImages[i];
            }
        }
    }

    function getAllImagesLength() public view returns (uint256) {
        return images[msg.sender].length;
    }

    function getImages() public view returns (Image[] memory) {
        return images[msg.sender];
    }
}