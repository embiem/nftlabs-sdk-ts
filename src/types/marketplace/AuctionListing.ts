import { CurrencyValue } from "../../common/currency";
import { BigNumberish } from "ethers";

/**
 * Represents a new marketplace auction listing.
 */
export interface AuctionListing {
  /**
   * The id of the listing
   */
  id: string;

  /**
   * The address of the asset being listed.
   */
  assetContractAddress: string;

  /**
   * The ID of the token to list.
   */
  tokenId: BigNumberish;

  /**
   * The asset being listed.
   * // TODO: This should be a more strict type.
   */
  asset: any;

  /**
   * The start time of the listing.
   */
  startTimeInSeconds: BigNumberish;

  /**
   * Number of seconds until the auction expires.
   */
  secondsUntilEnd: BigNumberish;

  /**
   * The quantity of tokens to include in the listing.
   *
   * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
   */
  quantity: BigNumberish;

  /**
   * The address of the currency to accept for the listing.
   */
  currencyContractAddress: string;

  /**
   * The reserve price is the minimum price that a bid must be in order to be accepted.
   */
  reservePrice: BigNumberish;

  /**
   * The buyout price of the listing.
   */
  buyoutPrice: BigNumberish;

  /**
   * The `CurrencyValue` of the buyout price listing.
   * Useful for displaying the price information.
   */
  buyoutCurrencyValuePerToken: CurrencyValue;

  /**
   * The `CurrencyValue` of the reserve price.
   * Useful for displaying the price information.
   */
  reservePriceCurrencyValuePerToken: CurrencyValue;
}
