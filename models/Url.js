const knex = require("../database/connection");

exports.all = () => {
  return knex.select("*").from("urls");
};

exports.create = (url) => {
  return knex("urls").insert({ original: url.original, hash: url.hash });
};

exports.update = (id, url) => {
  return knex("urls")
    .update(url)
    .update("updated_at", knex.fn.now())
    .where("id", id);
};

exports.find = (id) => {
  return knex.select("*").from("urls").where("id", id).first();
};

exports.findHash = (hash) => {
  return knex.select("*").from("urls").where("hash", hash).first();
};
