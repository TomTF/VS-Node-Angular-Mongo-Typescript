"use strict";
import mongoDatabase = require('./MongoDatabase');
import mongodb = require('mongodb');

export class Manager {
    private databaseInstance: mongoDatabase.MongoDatabase;

    constructor() {
        this.databaseInstance = mongoDatabase.MongoDatabase.getInstance();
    }

    public get db() {
        return this.databaseInstance.db;
    }
}