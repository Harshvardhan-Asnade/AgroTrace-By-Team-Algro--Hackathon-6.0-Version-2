// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract AgriTrace {
    struct Produce {
        uint id;
        string name;
        string origin;
        string currentOwner;
        uint timestamp;
    }

    uint public produceCount = 0;
    mapping(uint => Produce) public produces;

    event ProduceAdded(uint id, string name, string origin, string owner, uint timestamp);
    event OwnershipTransferred(uint id, string newOwner, uint timestamp);

    // Add new produce (Farmer uploads details)
    function addProduce(string memory _name, string memory _origin, string memory _owner) public {
        produceCount++;
        produces[produceCount] = Produce(produceCount, _name, _origin, _owner, block.timestamp);
        emit ProduceAdded(produceCount, _name, _origin, _owner, block.timestamp);
    }

    // Transfer ownership (Farmer -> Distributor -> Retailer -> Customer)
    function transferOwnership(uint _id, string memory _newOwner) public {
        Produce storage produce = produces[_id];
        produce.currentOwner = _newOwner;
        produce.timestamp = block.timestamp;
        emit OwnershipTransferred(_id, _newOwner, block.timestamp);
    }
    function registerProduce(
    uint _id,
    string memory _name,
    string memory _origin,
    string memory _owner
) public {
    produces[_id] = Produce(_id, _name, _origin, _owner, block.timestamp);
    emit OwnershipTransferred(_id, _owner, block.timestamp);
}
}