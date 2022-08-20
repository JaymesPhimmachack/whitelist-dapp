export const WHITELIST_CONTRACT_ADDRESS =
    "0x4b0cc09447cd5f646ccd08ec0ce18788aab9bcc1";

export const abi = [
    {
        inputs: [
            {
                internalType: "uint8",
                name: "_maxWhitelistedAddresses",
                type: "uint8",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "addAddressToWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "maxWhitelistAddresses",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "numAddressesWhitelisted",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "whitelistedAddresses",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
