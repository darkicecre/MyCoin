'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')
// const EC = require('elliptic').ec;
// const ec = new EC('secp256k1');
let WalletModel = require('../../src/models/wallet');


module.exports = {
    get: (req, res) => {
        // let sql = 'SELECT * FROM products'
        // db.query(sql, (err, response) => {
        //     if (err) throw err
        //     res.json(response)
        // })
        // var keyPair = ec.genKeyPair();
        // var address = keyPair.getPublic('hex');
        // var privateKey = keyPair.getPrivate('hex');
        const wallet = new WalletModel.Wallet();
        res.json({
          publicKey: wallet.publicKey,
          privateKey: wallet.privateKey,
        })
        // console.log('get')
    },
    detail: (req, res) => {
        // let sql = 'SELECT * FROM products WHERE id = ?'
        // db.query(sql, [req.params.productId], (err, response) => {
        //     if (err) throw err
        //     res.json(response[0])
        // })
    },
    update: (req, res) => {
        // let data = req.body;
        // let productId = req.params.productId;
        // let sql = 'UPDATE products SET ? WHERE id = ?'
        // db.query(sql, [data, productId], (err, response) => {
        //     if (err) throw err
        //     res.json({message: 'Update success!'})
        // })
    },
    store: (req, res) => {
        // let data = req.body;
        // let sql = 'INSERT INTO products SET ?'
        // db.query(sql, [data], (err, response) => {
        //     if (err) throw err
        //     res.json({message: 'Insert success!'})
        // })
    },
    delete: (req, res) => {
        // let sql = 'DELETE FROM products WHERE id = ?'
        // db.query(sql, [req.params.productId], (err, response) => {
        //     if (err) throw err
        //     res.json({message: 'Delete success!'})
        // })
    }
}
