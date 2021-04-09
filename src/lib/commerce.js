import Commerce from '@chec/commerce.js';

// this is our store
// you can name your enviroment variable it anything you want
// ...but  it has to start with REACT_APP

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);