const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../app");

const expect = chai.expect;
const should = chai.should;

chai.use(chaiHttp);

describe("test all routes", () => {
  describe("test get all incidences", (done) => {
    it("it should be succesful and should be an array", () => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          res.should.have.statusCode(200 || 201);
          res.should.be.a("array");
          done();
        });
    });
  });
});

describe("create incidence", (done) => {
  let param = {
    client_id: 687,
    city: "lagos",
    incident_desc: "lorem ipsum",
    country: "Ghana",
    date: "2023-07-11",
  };

  it("should take create incidence", (done) => {
    chai
      .request(app)
      .post("/create")
      .send(param)
      .end((err, res) => {
        res.should.have.status(200 || 201);
      });
  });
});
