var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAWSLambdaHosting(LambdaEventSource.HttpApi);

var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/healthcheck",
    () => new
    {
        status = "Healthy",
        buildNumber = System.Environment.GetEnvironmentVariable("BUILD_NUMBER")
    });

app.Run();