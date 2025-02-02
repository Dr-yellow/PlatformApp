const aaveABI = [
    {
        inputs: [
            {
                internalType: 'contract IPoolAddressesProvider',
                name: 'provider',
                type: 'address',
            },
            { internalType: 'address', name: 'user', type: 'address' },
        ],
        name: 'getUserReservesData',
        outputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'underlyingAsset',
                        type: 'address',
                    },
                    {
                        internalType: 'uint256',
                        name: 'scaledATokenBalance',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bool',
                        name: 'usageAsCollateralEnabledOnUser',
                        type: 'bool',
                    },
                    {
                        internalType: 'uint256',
                        name: 'stableBorrowRate',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'scaledVariableDebt',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'principalStableDebt',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'stableBorrowLastUpdateTimestamp',
                        type: 'uint256',
                    },
                ],
                internalType: 'struct IUiPoolDataProviderV3.UserReserveData[]',
                name: '',
                type: 'tuple[]',
            },
            { internalType: 'uint8', name: '', type: 'uint8' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'contract IPoolAddressesProvider',
                name: 'provider',
                type: 'address',
            },
        ],
        name: 'getReservesData',
        outputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'underlyingAsset',
                        type: 'address',
                    },
                    { internalType: 'string', name: 'name', type: 'string' },
                    { internalType: 'string', name: 'symbol', type: 'string' },
                    { internalType: 'uint256', name: 'decimals', type: 'uint256' },
                    {
                        internalType: 'uint256',
                        name: 'baseLTVasCollateral',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'reserveLiquidationThreshold',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'reserveLiquidationBonus',
                        type: 'uint256',
                    },
                    { internalType: 'uint256', name: 'reserveFactor', type: 'uint256' },
                    {
                        internalType: 'bool',
                        name: 'usageAsCollateralEnabled',
                        type: 'bool',
                    },
                    { internalType: 'bool', name: 'borrowingEnabled', type: 'bool' },
                    {
                        internalType: 'bool',
                        name: 'stableBorrowRateEnabled',
                        type: 'bool',
                    },
                    { internalType: 'bool', name: 'isActive', type: 'bool' },
                    { internalType: 'bool', name: 'isFrozen', type: 'bool' },
                    {
                        internalType: 'uint128',
                        name: 'liquidityIndex',
                        type: 'uint128',
                    },
                    {
                        internalType: 'uint128',
                        name: 'variableBorrowIndex',
                        type: 'uint128',
                    },
                    { internalType: 'uint128', name: 'liquidityRate', type: 'uint128' },
                    {
                        internalType: 'uint128',
                        name: 'variableBorrowRate',
                        type: 'uint128',
                    },
                    {
                        internalType: 'uint128',
                        name: 'stableBorrowRate',
                        type: 'uint128',
                    },
                    {
                        internalType: 'uint40',
                        name: 'lastUpdateTimestamp',
                        type: 'uint40',
                    },
                    { internalType: 'address', name: 'aTokenAddress', type: 'address' },
                    {
                        internalType: 'address',
                        name: 'stableDebtTokenAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'address',
                        name: 'variableDebtTokenAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'address',
                        name: 'interestRateStrategyAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'uint256',
                        name: 'availableLiquidity',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'totalPrincipalStableDebt',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'averageStableRate',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'stableDebtLastUpdateTimestamp',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'totalScaledVariableDebt',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'priceInMarketReferenceCurrency',
                        type: 'uint256',
                    },
                    { internalType: 'address', name: 'priceOracle', type: 'address' },
                    {
                        internalType: 'uint256',
                        name: 'variableRateSlope1',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'variableRateSlope2',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'stableRateSlope1',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'stableRateSlope2',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'baseStableBorrowRate',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'baseVariableBorrowRate',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'optimalUsageRatio',
                        type: 'uint256',
                    },
                    { internalType: 'bool', name: 'isPaused', type: 'bool' },
                    { internalType: 'bool', name: 'isSiloedBorrowing', type: 'bool' },
                    {
                        internalType: 'uint128',
                        name: 'accruedToTreasury',
                        type: 'uint128',
                    },
                    { internalType: 'uint128', name: 'unbacked', type: 'uint128' },
                    {
                        internalType: 'uint128',
                        name: 'isolationModeTotalDebt',
                        type: 'uint128',
                    },
                    { internalType: 'bool', name: 'flashLoanEnabled', type: 'bool' },
                    { internalType: 'uint256', name: 'debtCeiling', type: 'uint256' },
                    {
                        internalType: 'uint256',
                        name: 'debtCeilingDecimals',
                        type: 'uint256',
                    },
                    { internalType: 'uint8', name: 'eModeCategoryId', type: 'uint8' },
                    { internalType: 'uint256', name: 'borrowCap', type: 'uint256' },
                    { internalType: 'uint256', name: 'supplyCap', type: 'uint256' },
                    { internalType: 'uint16', name: 'eModeLtv', type: 'uint16' },
                    {
                        internalType: 'uint16',
                        name: 'eModeLiquidationThreshold',
                        type: 'uint16',
                    },
                    {
                        internalType: 'uint16',
                        name: 'eModeLiquidationBonus',
                        type: 'uint16',
                    },
                    {
                        internalType: 'address',
                        name: 'eModePriceSource',
                        type: 'address',
                    },
                    { internalType: 'string', name: 'eModeLabel', type: 'string' },
                    {
                        internalType: 'bool',
                        name: 'borrowableInIsolation',
                        type: 'bool',
                    },
                ],
                internalType: 'struct IUiPoolDataProviderV3.AggregatedReserveData[]',
                name: '',
                type: 'tuple[]',
            },
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'marketReferenceCurrencyUnit',
                        type: 'uint256',
                    },
                    {
                        internalType: 'int256',
                        name: 'marketReferenceCurrencyPriceInUsd',
                        type: 'int256',
                    },
                    {
                        internalType: 'int256',
                        name: 'networkBaseTokenPriceInUsd',
                        type: 'int256',
                    },
                    {
                        internalType: 'uint8',
                        name: 'networkBaseTokenPriceDecimals',
                        type: 'uint8',
                    },
                ],
                internalType: 'struct IUiPoolDataProviderV3.BaseCurrencyInfo',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
],
    ETH_DEPOSIT_ABI = [
        {
            inputs: [
                { internalType: 'address', name: 'asset', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
                { internalType: 'address', name: 'onBehalfOf', type: 'address' },
                { internalType: 'uint16', name: 'referralCode', type: 'uint16' },
            ],
            name: 'supply',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
    ETH_WITHDRAW_ABI = [
        {
            inputs: [
                { internalType: 'address', name: 'asset', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
                { internalType: 'address', name: 'to', type: 'address' },
            ],
            name: 'withdraw',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ]

export { aaveABI, ETH_DEPOSIT_ABI, ETH_WITHDRAW_ABI }
