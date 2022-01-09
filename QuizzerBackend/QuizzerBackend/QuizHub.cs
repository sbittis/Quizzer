﻿namespace QuizzerBackend
{
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.SignalR;

    public class QuizHub : Hub
    {
        public async Task MakeGuess(string player, string answer)
        {
            await Clients.All.SendAsync("GuessMade", player, answer);
        }

        public async Task SetPlayerName(string playerName)
        {
            await Clients.All.SendAsync("PlayerNameSet", playerName);
        }
    }
}
