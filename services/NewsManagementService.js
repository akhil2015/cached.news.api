const axios = require("axios");
const API_KEY = "525900c10c874fa26bdb20b235d06eed";
const fetchNews = async (req, res) => {
  console.log("fetching news");
  try {
    const articleCount = req.query.articleCount;
    const url =
    `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=${articleCount}&apikey=` + API_KEY;
    const response = await axios.get(url);
    console.log(response.data);
    res.send(response.data.articles);
  } catch (err) {
    console.log(err);
    //send 500 error
    res.status(500).send("Internal Server Error");
  }
};
const searchByKeyword = async (req, res) => {
  try{
    const {keyword,articleCount} = req.query;
    const url =
      "https://gnews.io/api/v4/search?q=" +
      keyword +
      `&lang=en&country=us&max=${articleCount}&apikey=` +
      API_KEY;
    const response = await axios.get(url);
    console.log(response.data);
    res.send(response.data);
  }catch (err) {
    console.log(err);
    //send 500 error
    res.status(500).send("Internal Server Error");
  }
}
const searchByTitle = async (req, res) => {
  try{
    const {keyword,articleCount} = req.query;
    const url =
      "https://gnews.io/api/v4/search?in=title&q=" +
      keyword +
      `&lang=en&country=us&max=${articleCount}&apikey=` +
      API_KEY;
    const response = await axios.get(url);
    console.log(response.data);
    res.send(response.data);
  }catch (err) {
    console.log(err);
    //send 500 error
    res.status(500).send("Internal Server Error");
  }
}


module.exports = {
  fetchNews,
  searchByKeyword,
  searchByTitle
};
