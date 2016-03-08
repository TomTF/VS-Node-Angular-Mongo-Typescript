"use strict";
import configuration = require('../config');
import assert = require('assert');
import mongoclient = require('mongodb');

export class MongoDatabase {
    private static instance: MongoDatabase;
    public db: mongoclient.Db;

    constructor() {
        var client = mongoclient.MongoClient;
        client.connect(configuration.mongoDbUrl, (err, db) => {
            assert.equal(null, err);
            console.log("Connected correctly to server");
            this.db = db;
        });
    }

    public static getInstance(): MongoDatabase {
        if (MongoDatabase.instance == null) {
            MongoDatabase.instance = new MongoDatabase();
        }

        return MongoDatabase.instance;
    }

}