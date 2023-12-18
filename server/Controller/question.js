const db = require("../DataBase/index");
const Question = db.questions

module.exports = {
    createQuestion: async (req, res) => {
        try {
          const { question } = req.body;
          const newQuestion = await Question.create({ question });
          res.status(201).json(newQuestion);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      },
      getQuestion: async (req, res) => {
        try {
          const questions = await Question.findAll();
          res.status(200).json(questions);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      },
    
}