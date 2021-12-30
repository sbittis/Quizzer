namespace QuizzerBackend.Controllers
{
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.SignalR;

    using QuizzerBackend.Repositories;

    [ApiController]
    [Route("[controller]")]
    public class QuizController : ControllerBase
    {
        private readonly IHubContext<QuizHub> hubContext;

        private readonly QuizQuestionRepository repository = new();

        public QuizController(IHubContext<QuizHub> hubContext)
        {
            this.hubContext = hubContext;
        }

        [HttpGet("Next")]
        public async Task NextQuestion()
        {
            var question = await this.repository.GetNextQuestion();
            await hubContext.Clients.All.SendAsync("GoToQuestion", question);
        }

        //[HttpGet("MakeGuess/{player}/{answer}")]
        //public async Task MakeGuess(string player, string answer)
        //{
        //    await hubContext.Clients.All.SendAsync("GuessMade", player, answer);
        //}

        //[HttpGet("SetPlayerName/{playerName}")]
        //public async Task SetPlayerName(string playerName)
        //{
        //    await hubContext.Clients.All.SendAsync("SetPlayerName", playerName);
        //}
    }
}
