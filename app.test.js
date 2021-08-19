require('dotenv').config()
const request = require("supertest");
const app = require("./app");
const {MongoClient} = require('mongodb');


describe("GET ROUTES ", () => {
  describe("Get /  => Check if home route works", () => {
    it("Should return status code 200", async () => {
      return await request(app)
        .get("/")
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual("Hello");
        });
    });
  });
});




////--Testing DB ---

// describe('Insert item', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(process.env.__MONGO_URI__, {
//       useNewUrlParser: true,
//     });

//     db = await connection.db(process.env.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     await connection.close();
//     // await db.close();
//   });

//   it('should insert a item into collection', async () => {
//     const items = db.collection('items');
//     const ID= Math.random() * 100000;
//     const mockItem = {_id: ID,name: 'Test', price: '50'};
//     await items.insertOne(mockItem);

//     const insertedItem = await items.findOne({_id: ID});
//     expect(insertedItem).toEqual(mockItem);
//   });
// });

// describe("POST ROUTES", () => {
//   describe("POST /items", () => {
//     it("Post Item =>", async () => {
//       return await request(app)
//         .post("/items")
//         .send({ name: "Test", price: "50" })
//         .expect(200);
//         // .expect(200).then((response) => {
//         //     expect.objectContaining({ name:'Test',price:'50' })
//         // });
//     });
//   });
// });
