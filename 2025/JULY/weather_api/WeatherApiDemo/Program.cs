using System.Net.Http;             // (usually included by default)
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Use Swagger only in Development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Weather endpoint
app.MapGet("/weather", async () =>
{
    try
    {
        var httpClient = new HttpClient();
        string city = "Mumbai";
        string apiKey = "47278ff9dfd3428ebd675751250307"; // Replace this with a real key!
        string url = $"https://api.weatherapi.com/v1/current.json?key={apiKey}&q={city}";

        var response = await httpClient.GetAsync(url);

        if (response.IsSuccessStatusCode)
        {
            var result = await response.Content.ReadAsStringAsync();
            return Results.Content(result, "application/json");
        }

        return Results.Problem("Could not fetch weather data.");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"🔥 ERROR: {ex.Message}");
        return Results.Problem("Internal Server Error: " + ex.Message);
    }
})
.WithOpenApi();

app.Run();
