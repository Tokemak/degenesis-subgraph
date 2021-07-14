module.exports = {
  getYAML: function (defiAddress, coreAddress, block) {
    return `specVersion: 0.0.2
    description: Tokemak Subgraph
    repository: https://github.com/Tokemak/tokemak-subgraph
    schema:
      file: ./schema.graphql
    dataSources:
      # ---------------------------------- DefiRound ----------------------------------
      - kind: ethereum/contract
        name: DefiRound
        network: mainnet
        source:
          address: "${defiAddress}"
          abi: DefiRound
          startBlock: ${block}
        mapping:
          kind: ethereum/events
          apiVersion: 0.0.4
          language: wasm/assemblyscript
          entities:
            - Contract
            - Token
            - Oracle
            - Gensis
            - User
            - Balance
            - WhiteList
            - SupportedTokens
            - FinalizedAsset
          abis:
            - name: DefiRound
              file: ./build/DefiRound/abis/DefiRound.json
          eventHandlers:
            - event: Deposited(address,(address,uint256))
              handler: handleDeposit
            - event: Withdrawn(address,(address,uint256),bool)
              handler: handleWithdraw
            - event: SupportedTokensAdded((address,address,address,uint256)[])
              handler: handleSupportedTokens
            - event: GenesisTransfer(address,uint256)
              handler: handleGenesisTransfer
            - event: AssetsFinalized(address,address,uint256)
              handler: handleFinalizedAsset
            - event: WhitelistConfigured((bool,bytes32))
              handler: handleWhitelist
            - event: TreasuryTransfer((address,uint256)[]) 
              handler: handleTreasuryTransfer
          file: ./src/defiMapping.ts
      # ---------------------------------- CoreEvent ----------------------------------
      - kind: ethereum/contract
        name: CoreEvent
        network: mainnet
        source:
          address: "${coreAddress}"
          abi: CoreEvent
          startBlock: ${block}
        mapping:
          kind: ethereum/events
          apiVersion: 0.0.4
          language: wasm/assemblyscript
          entities: # May change to specialize for Core
            - Contract
            - Token
            - Oracle
            - Genesis
            - User
            - Balance
            - WhiteList
            - SupportedTokens
            - FinalizedAssets
          abis: 
            - name: CoreEvent
              file: ./build/CoreEvent/abis/CoreEvent.json
          eventHandlers:
            - event: SupportedTokensAdded((address,uint256,bool)[])
              handler: HANDLER HERE
            - event: TreasurySet(address)
              handler: HANDLER HERE
            - event: DurationSet((uint256,uint256))
              handler: HANDLER HERE
            - event:  Deposited(address,(address,uint256)[])
              handler: HANDLER HERE
            - event: Withdrawn(address,(address,uint256)[])
              handler: HANDLE HERE
            - event:  RatesPublished((address,uint256,uint256,uint256,uint256,address)[])
              handler: HANDLER HERE
            - event: AssetsFinalized(address,(address,uint256,uint256)[])
              handler: HANDLER HERE
            - event: TreasuryTransfer((address,uint256)[])
              handler: HANDLER HERE
            - event: WhitelistConfigured((bool,bytes32))
              handler: HANDLER HERE
          callHandlers: # Will likley not use many of these
            - function: configureWhitelist((bool,bytes32))
              handler: HANDLER HERE
            - function: setDuration(uint256)
              handler: HANDLER HERE
            - function: addSupportedTokens((address,uint256,bool)[])
              handler: HANDLER HERE
            - function: deposit((address,uint256)[],bytes32[])
              handler: HANDLER HERE
            - function: withdraw((address,uint256)[])
              handler: HANDLER HERE
            - function: setRates((address,uint256,uint256,uint256,uint256,address)[])
              handler: HANDLER HERE
            - function: finalize((address,bool)[])
              handler: HANDLER HERE
          file: ./src/coreMapping.ts
      # ---------------------------------- ERC20 ----------------------------------
      - kind: ethereum/contract
        name: ERC20
        network: mainnet
        source:
          abi: ERC20
        mapping:
          kind: ethereum/events
          apiVersion: 0.0.4
          language: wasm/assemblyscript
          entities: []
          abis:
            - name: ERC20
              file: ./build/ERC20/abis/ERC20.json'
          eventHandlers:
            - event: Transfer(indexed address,indexed address,uint256)
              handler: HANDLER HERE
          file: ./src/ercMapping.ts
        `;
  }
}