namespace QuizzerBackend.Repositories
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using QuizzerBackend.Data;

    public class QuizQuestionRepository
    {
        public async Task<QuizQuestion> GetNextQuestion()
        {
            return await QuestionProvider.GetQuestion();
        }
    }
}
