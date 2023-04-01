'use strict';
module.exports = function(app) {
  let productsCtrl = require('./controllers/ProductsController');
  let walletCtrl = require('./controllers/WalletController');

  // todoList Routes
  // app.route('/products')
  // .get(productsCtrl.get)
  // .post(productsCtrl.store);

  app.route('/wallet')
    .get(walletCtrl.get)
    .post(walletCtrl.store);

  // app.route('/products/:productId')
  //   .get(productsCtrl.detail)
  //   .put(productsCtrl.update)
  //   .delete(productsCtrl.delete);
};
