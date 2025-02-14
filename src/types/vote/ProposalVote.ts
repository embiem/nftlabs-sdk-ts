import { BigNumber } from "ethers";
import { VoteType } from "../../enums/vote";

export interface ProposalVote {
  type: VoteType;
  label: string;
  count: BigNumber;
}
