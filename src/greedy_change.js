// greedyChange(884363, [50000,10000,5000,1000,500,100,50,10,1])

function greedyChange(amount, coins = [50000,10000,5000,1000,500,100,50,10,1]) {
  const coincount = [];

  let reminder = amount;
  let coin;

  let i = 0;
  while( i < coins.length ) {
    coincount[i] = 0;

    while ( coins[i] <= reminder ) {
      reminder = reminder - coins[i];
      coin = coincount[i];
      coin += 1;
      coincount[i] = coin;
    }

    i++;
  }

  return coincount;
}

export default greedyChange;