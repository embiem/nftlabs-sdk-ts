import { BigNumber, BigNumberish } from "ethers";
import {
  AuctionListing,
  DirectListing,
  NewAuctionListing,
  NewDirectListing,
  Offer,
} from "../../types/marketplace";

export interface IMarketplace {
  /**
   * Creates a new direct listing on a marketplace.
   *
   * @param listing - The new direct listing to create.
   * @returns - The ID of the newly created listing.
   */
  createDirectListing(listing: NewDirectListing): Promise<BigNumber>;

  /**
   * Creates a new auction listing on a marketplace.
   *
   * @param listing - The new auction listing to create.
   * @returns - The ID of the newly created listing.
   */
  createAuctionListing(listing: NewAuctionListing): Promise<BigNumber>;

  /**
   * Creates a new direct listing on a marketplace.
   */
  updateDirectListing(listing: AuctionListing): Promise<DirectListing>;

  /**
   * Creates a new auction listing on a marketplace.
   */
  updateAuctionListing(listing: AuctionListing): Promise<AuctionListing>;

  /**
   * Make an offer on a direct listing.
   *
   * @param listingId - The listing id.
   * @param quantityDesired - The quantity of tokens desired.
   * @param currencyContractAddress - The address of the currency contract.
   * @param tokenAmount - The amount of tokens to be offered.
   * @returns - The ID of the newly created offer.
   */
  makeOffer(offer: {
    listingId: BigNumberish;
    quantityDesired: BigNumberish;
    currencyContractAddress: string;
    pricePerToken: BigNumberish;
  }): Promise<BigNumber>;

  /**
   * Make an offer on an auction. The offer must be at least `current bid * (1 + bid buffer)` in order to be accepted.
   *
   * Bid buffer is configured on the Marketplace contract.
   *
   * Note: If you make a bid above the buyout price, you will automatically be awarded the
   * the listing and the sale will be executed.
   *
   * @param listingId - The listing id.
   * @param quantityDesired - The quantity of tokens desired.
   * @param currencyContractAddress - The address of the currency contract.
   * @param tokenAmount - The amount of tokens to be offered.
   */
  makeBid(bid: {
    listingId: BigNumberish;
    quantityDesired: BigNumberish;
    currencyContractAddress: string;
    tokenAmount: BigNumberish;
  }): Promise<void>;

  /**
   * Remove the listing.
   *
   * @param listingId - Id of the listing to remove.
   */
  removeListing(listingId: BigNumberish): Promise<void>;

  /**
   * Buyout the listing based on the buyout price.
   *
   * The offer must be higher as high as the buyout price in order
   * for this buyout to succeed. If the buyout is too low, the
   * method will throw an error.
   *
   * @param listingId - Id of the listing to buyout.
   */
  buyoutAuction(buyout: {
    listingId: BigNumberish;
    quantityDesired: BigNumberish;
    currencyContractAddress: string;
    tokenAmount: BigNumberish;
  }): Promise<void>;

  /**
   * Buyout the listing based on the buyout price.
   *
   * The offer must be higher as high as the buyout price in order
   * for this buyout to succeed. If the buyout is too low, the
   * method will throw an error.
   *
   * @param listingId - Id of the listing to buyout.
   */
  buyDirectListing(buyout: {
    listingId: BigNumberish;
    quantityDesired: BigNumberish;
    currencyContractAddress: string;
    tokenAmount: BigNumberish;
  }): Promise<void>;

  /**
   * Return all active bids for an auction.
   *
   * @param listingId - Id of the listing to get bids for.
   */
  getActiveBids(listingId: BigNumberish): Promise<Offer[]>;

  /**
   * Return all active offers for a direct listing.
   *
   * @param listingId - Id of the listing to get offers for.
   */
  getActiveOffers(listingId: BigNumberish): Promise<Offer[]>;

  /**
   * Accepts the winning bid for an auction and closes the listing,
   * resulting in the sale of the tokens to the buyer.
   *
   * @param listingId - The listing id.
   * @param buyerAddress - The address of the buyer who's bid will be accepted.
   */
  acceptWinningBid(listingId: BigNumberish): Promise<void>;

  /**
   * Accepts the offer of the specified wallet in `addressofOfferor`.
   *
   * @param listingId - The listing Id to accept the offer for.
   * @param addressofOfferor - The address of the offeror.
   */
  acceptDirectListingOffer(
    listingId: BigNumberish,
    addressOfOfferor: string,
  ): Promise<void>;

  /**
   * Fetch a direct listing by Id.
   *
   * @param listingId - Id of the listing to fetch.
   */
  getDirectListing(listingId: BigNumberish): Promise<DirectListing>;

  /**
   * Fetch an auction listing by Id.
   *
   * @param listingId - Id of the listing to fetch.
   */
  getAuctionListing(listingId: BigNumberish): Promise<AuctionListing>;
}
