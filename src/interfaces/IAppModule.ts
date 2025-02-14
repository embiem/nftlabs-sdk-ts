import { CollectionModule } from "../modules/collection";
import { DatastoreModule } from "../modules/datastore";
import { DropModule } from "../modules/drop";
import { BundleDropModule } from "../modules/bundleDrop";
import { MarketModule } from "../modules/market";
import { NFTModule } from "../modules/nft";
import { PackModule } from "../modules/pack";
import { SplitsModule } from "../modules/royalty";
import { CurrencyModule, TokenModule } from "../modules/token";
import { VoteModule } from "../modules/vote";
import BundleModuleMetadata from "../types/module-deployments/BundleModuleMetadata";
import CurrencyModuleMetadata from "../types/module-deployments/CurrencyModuleMetadata";
import DatastoreModuleMetadata from "../types/module-deployments/DatastoreModuleMetadata";
import DropModuleMetadata from "../types/module-deployments/DropModuleMetadata";
import BundleDropModuleMetadata from "../types/module-deployments/BundleDropModuleMetadata";
import MarketModuleMetadata from "../types/module-deployments/MarketModuleMetadata";
import NftModuleMetadata from "../types/module-deployments/NftModuleMetadata";
import PackModuleMetadata from "../types/module-deployments/PackModuleMetadata";
import SplitsModuleMetadata from "../types/module-deployments/SplitsModuleMetadata";
import VoteModuleMetadata from "../types/module-deployments/VoteModuleMetadata";
import TokenModuleMetadata from "../types/module-deployments/TokenModuleMetadata";

/* eslint-disable semi */
export default interface IAppModule {
  deployBundleModule(metadata: BundleModuleMetadata): Promise<CollectionModule>;

  deploySplitsModule(metadata: SplitsModuleMetadata): Promise<SplitsModule>;

  deployNftModule(metadata: NftModuleMetadata): Promise<NFTModule>;

  deployCurrencyModule(
    metadata: CurrencyModuleMetadata,
  ): Promise<CurrencyModule>;

  deployTokenModule(metadata: TokenModuleMetadata): Promise<TokenModule>;

  deployMarketModule(metadata: MarketModuleMetadata): Promise<MarketModule>;

  deployPackModule(metadata: PackModuleMetadata): Promise<PackModule>;

  deployDropModule(metadata: DropModuleMetadata): Promise<DropModule>;

  deployBundleDropModule(
    metadata: BundleDropModuleMetadata,
  ): Promise<BundleDropModule>;

  deployDatastoreModule(
    metadata: DatastoreModuleMetadata,
  ): Promise<DatastoreModule>;

  deployVoteModule(metadata: VoteModuleMetadata): Promise<VoteModule>;
}
