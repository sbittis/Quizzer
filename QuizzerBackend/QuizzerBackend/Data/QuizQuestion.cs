namespace QuizzerBackend.Data
{
    using System.Collections.Generic;

    using Newtonsoft.Json;

    using QuizzerBackend.Extensions;

    public class QuizQuestion
    {
        public string Category { get; set; }

        public string Question { get; set; }

        [JsonProperty(PropertyName = "correct_answer")]
        public string CorrectAnswer { get; set; }

        [JsonProperty(PropertyName = "incorrect_answers")]
        public List<string> IncorrectAnswers { get; set; }

        public List<string> PossibleAnswers => this.IncorrectAnswers.AddItem(this.CorrectAnswer).Shuffle();
    }
}
