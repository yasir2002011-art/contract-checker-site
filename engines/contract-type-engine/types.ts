export type ContractAnswers = {
  isSaudi: boolean;

  hasQiwaContract: boolean;

  contractExplicitlyUnlimited: boolean;

  hasStartAndEndDate: boolean;

  hasAutoRenewalClause: boolean;

  renewalCount: number;

  totalContractYears: number;

  continuedAfterExpiry: boolean;
};

export type ContractResultType =
  | "LIMITED"
  | "UNLIMITED"
  | "REVIEW_REQUIRED";

export type ContractResult = {
  type: ContractResultType;

  title: string;

  reason: string;

  legalReference: string;

  recommendation: string;
};