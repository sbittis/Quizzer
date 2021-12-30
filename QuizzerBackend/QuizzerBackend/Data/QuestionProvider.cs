namespace QuizzerBackend.Data
{
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Net.Http;
    using System.Threading.Tasks;

    using Newtonsoft.Json;

    public static class QuestionProvider
    {
        private const string apiUrl = "https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple";

        public static async Task<QuizQuestion> GetQuestion()
        {
            return (await QueryQuestions()).Single();
        }

        private static async Task<IEnumerable<QuizQuestion>> QueryQuestions()
        {
            using var httpClient = new HttpClient();
            var responseString = await httpClient.GetStringAsync(apiUrl);

            var response = JsonConvert.DeserializeObject<Response>(responseString);

            if (response.ResponseCode == 0)
            {
                return response.Results;
            }

            throw new DataException("Questions could not be queried from API");
        }
    }
}
