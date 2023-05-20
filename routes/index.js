"use strict"
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

router.get("/catalogo", (req, res) => {
  res.sendFile(__dirname + "/views/catologo.html");
});


router.get("/produto", (req, res) => {
    res.sendFile(__dirname + "/views/produto.html");
  });


router.get("/contato", (req, res) => {
    res.sendFile(__dirname + "/views/contato.html");
});
 
  router.get("/404", (req, res) => {
    res.sendFile(__dirname + "/views/404.html");
});

router.get("/arquivopdf", (req, res) => {
    res.sendFile(__dirname + "/recursos/arquivo.pdf")
})

router.get("/arquivomp4", (req, res) => {
    res.sendFile(__dirname + "/recursos/arquivo.mp4")
})

router.get("/arquivomp3", (req, res) => {
    res.sendFile(__dirname + "/recursos/arquivo.mp3")
})

router.get("/arquivomd", (req, res) => {
    res.sendFile(__dirname + "/recursos/arquivo.md")
})

router.get("/arquivojson", (req, res) => {
    res.sendFile(__dirname + "/recursos/arquivo.json")
})

router.get("/arquivojpeg", (req, res) => {
    res.sendFile(__dirname + "/recursos/arquivo.jpeg")
})

router.get("/arquivodocx", (req, res) => {
    res.sendFile(__dirname + "/recursos/arquivo.docx")
})

module.exports = router;

