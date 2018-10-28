export default (userId, name, questions, submitted = false) => ({
  id: userId,
  name: name,
  questions: questions,
  submitted: submitted
})