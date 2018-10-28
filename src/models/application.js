export default (userId, name, questions, submitted = true) => ({
  id: userId,
  name: name,
  questions: questions,
  submitted: submitted
})
