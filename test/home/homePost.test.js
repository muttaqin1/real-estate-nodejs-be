const mockingoose = require('mockingoose');
const Homes = require('../../models/Homes');
const request = require('supertest');
const app = require('../../app');

describe('Positive POST /home', () => {
    beforeEach(() => {
        mockingoose.resetAll();
        mockingoose(Homes).toReturn(
            {
                _id: '652beab54298559b57ff172f',
                title: 'Nice house',
                city: 'Dobrich',
                neighborhood: 'Drujba',
                address: 'Blok 42 A 2 8',
                price: '10000',
                size: '150',
                year: '1960',
                description: 'Really nice house, have 2 rooms',
                longitude: '30',
                latitude: '50',
                owner_id: '632beab54298559b57ff172f',
                homeViews: '200',
            },
            'save'
        );
    });

    it('should create a new Home and return it', async () => {
        const res = await request(app).post('/home').send({
            title: 'Nice house',
            city: 'Dobrich',
            neighborhood: 'Drujba',
            address: 'Blok 42 A 2 8',
            price: '10000',
            size: '150',
            year: '1960',
            description: 'Really nice house, have 2 rooms',
            longitude: '30',
            latitude: '50',
            owner_id: '632beab54298559b57ff172f',
        });
        expect(res.status).toEqual(201);
        expect(res.body.title).toEqual('Nice house');
        expect(res.body.city).toEqual('Dobrich');
        expect(res.body.neighborhood).toEqual('Drujba');
        expect(res.body.address).toEqual('Blok 42 A 2 8');
        expect(res.body.price).toEqual('10000');
        expect(res.body.size).toEqual('150');
        expect(res.body.year).toEqual('1960');
        expect(res.body.description).toEqual('Really nice house, have 2 rooms');
        expect(res.body.longitude).toEqual('30');
        expect(res.body.latitude).toEqual('50');
    });
});
