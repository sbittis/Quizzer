namespace QuizzerBackend.Data
{
    using System.Collections.Generic;

    public class Response
    {
        public int ResponseCode { get; set; }

        public IEnumerable<QuizQuestion> Results { get; set; }
    }
}
