exports.homePage = async (req, res) => {
  const decks = ["Whalen's Deck", "Meta Deck"];
  try {
    res.send(req.query);
    return res.send("We're live");
  } catch (error) {}
  console.log(error);
};
