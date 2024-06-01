function fruit(fr, gr, pr){
    console.log(`I need \$${((gr / 1000) * pr).toFixed(2)} to buy ${(gr / 1000).toFixed(2)} kilograms ${fr}.`);
}