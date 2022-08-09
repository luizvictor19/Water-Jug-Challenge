<h1>Water Jug Challenge Machine</h1>
<a href="https://water-jug-challenge.vercel.app/">Application Link</a>
<h2>Get Start</h2>
<p>If you want to run the application locally you can start cloning it by HTTPS or SSH as you wish</p>
<br/>
<p><strong>"git clone https://github.com/luizvictor19/Water-Jug-Challenge.git"</strong> or <strong>"git clone git@github.com:luizvictor19/Water-Jug-Challenge.git"</strong></p>
<br/>
<p>Enter the folder with <strong>"cd Water-Jug-Challenge/"</strong> and install the dependencies with <strong>"yarn"</strong></p>
<br/>
<p>Run <strong>"yarn dev"</strong> to get the local application link and paste it at the browser</p>
<h2>Used Libraries<h2>
<ul>
  <li>React Router Dom</li>
  <li>Styled Components</li>
</ul>
<h2>Organization</h2>
<p>The main complex logics are located at Utils Folder, besides that the structure is simple, with separations by folders like pages, components, routes, styles, typescript types and others assets.</p>
<h2>Inside the Functions</h2>
<p>Return the greatest common divisor of bucket Y and bucket X</p>

```typescript
const greatestCommonDivisor = (bucketY: number, bucketX: number): number => {
  if (bucketX == 0) {
    return bucketY;
  } else {
    return greatestCommonDivisor(bucketX, bucketY % bucketX);
  }
};
```

<p>Get the steps list when there is a solution</p>

```typescript
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
```

<p>Return the best solution or no solution if there isn't one</p>

```typescript
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
```
