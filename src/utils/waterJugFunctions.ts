import { IStepsList } from "../types";

const greatestCommonDivisor = (bucketY: number, bucketX: number): number => {
  if (bucketX == 0) {
    return bucketY;
  } else {
    return greatestCommonDivisor(bucketX, bucketY % bucketX);
  }
};

const getStepsList = (
  fromBucket: number,
  toBucket: number,
  finalAmount: number,
  invertResponse: boolean
): Array<IStepsList> => {
  let steps = [];
  let from = fromBucket;
  let to = 0;

  !invertResponse
    ? steps.push({
        explanation: `Fill Jug X with ${from} litters`,
        bucketXAmount: `${from}`,
        bucketYAmount: `${to}`,
      })
    : steps.push({
        explanation: `Fill Jug Y with ${from} litters`,
        bucketXAmount: `${to}`,
        bucketYAmount: `${from}`,
      });

  while (from != finalAmount && to != finalAmount) {
    let maximumAmountCapacity = Math.min(from, toBucket - to);

    to += maximumAmountCapacity;
    from -= maximumAmountCapacity;

    !invertResponse
      ? steps.push({
          explanation: `Transfer ${maximumAmountCapacity} litters from bucketX to bucketY`,
          bucketXAmount: `${from}`,
          bucketYAmount: `${to}`,
        })
      : steps.push({
          explanation: `Transfer ${maximumAmountCapacity} litters from bucketY to bucketX`,
          bucketXAmount: `${to}`,
          bucketYAmount: `${from}`,
        });

    if (from == finalAmount || to == finalAmount) break;

    if (from == 0) {
      from = fromBucket;
      !invertResponse
        ? steps.push({
            explanation: `Fill Jug X with ${from} litters`,
            bucketXAmount: `${from}`,
            bucketYAmount: `${to}`,
          })
        : steps.push({
            explanation: `Fill Jug Y with ${from} litters`,
            bucketXAmount: `${to}`,
            bucketYAmount: `${from}`,
          });
    }

    if (to == toBucket) {
      to = 0;
      !invertResponse
        ? steps.push({
            explanation: `Empty Jug Y`,
            bucketYAmount: `${to}`,
            bucketXAmount: `${from}`,
          })
        : steps.push({
            explanation: `Empty Jug X`,
            bucketYAmount: `${from}`,
            bucketXAmount: `${to}`,
          });
    }
  }
  return steps as Array<IStepsList>;
};

export const WaterJugChalangeBestSolution = (
  bucketX: number,
  bucketY: number,
  amountWanted: number
): Array<IStepsList> | string => {
  let invertStepString = false;

  if (bucketX > bucketY) {
    let oldBucketX = bucketX;
    bucketX = bucketY;
    bucketY = oldBucketX;
    invertStepString = true;
  }

  if (
    amountWanted > bucketY ||
    amountWanted % greatestCommonDivisor(bucketY, bucketX) != 0 ||
    bucketX < 0 ||
    !Number.isInteger(bucketX) ||
    bucketY < 0 ||
    !Number.isInteger(bucketY) ||
    amountWanted <= 0
  )
    return "No solution";

  if (
    getStepsList(bucketY, bucketX, amountWanted, invertStepString).length <
    getStepsList(bucketX, bucketY, amountWanted, invertStepString).length
  ) {
    return getStepsList(bucketY, bucketX, amountWanted, !invertStepString);
  } else {
    return getStepsList(bucketX, bucketY, amountWanted, invertStepString);
  }
};
