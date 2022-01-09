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
        private readonly IHubContext<QuizHub> _hubContext;

        private readonly QuizQuestionRepository repository = new();

        public QuizController(IHubContext<QuizHub> hubContext)
        {
            _hubContext = hubContext;
        }

        [HttpGet("Next")]
        public async Task NextQuestion()
        {
            var question = await this.repository.GetNextQuestion();
            await _hubContext.Clients.All.SendAsync("GoToQuestion", question);
        }
    }
}
