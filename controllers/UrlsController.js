const Url = require("../models/Url");
const { nanoid } = require("nanoid");

exports.store = (req, res) => {
  let url = {
    original: req.body.original,
    hash: nanoid(5)
  };
  Url.create(url).then((id) => {
    if (req.xhr || req.headers.accept.indexOf("json") > -1) {
      Url.find(id).then((url) => res.json(url));
    } else {
      res.redirect("/");
    }
  });
};

exports.getSpecific = (req, res) => {
  let hash = req.params.hash;
  Url.findHash(hash).then((url) => {
    if (url == null) {
      res.status(404).send("Not found");
      return;
    }
    res.json(url)
  });
};

exports.updateSpecific = (req, res) => {
  let hash = req.body.hash;

  Url.findHash(hash).then((url) => {
    if (url == null) {
      res.status(404).send("Not found");
      return;
    }
    let updateUrl = {
      count: url.count + 1,
    };
    
    Url.update(url.id, updateUrl).then(() => {
      Url.find(url.id).then((url) => res.json(url));
    });
  });
};
