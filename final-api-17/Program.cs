using api_final_17.Reposetory;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<ITeacherRepo, TeacherRepo>();
builder.Services.AddSingleton<ITestRepo, TestRepo>();
builder.Services.AddSingleton<IQuaestionRepo, QuaestionRepo>();
builder.Services.AddSingleton<IAnswerRepo, AnswerRepo>();
builder.Services.AddSingleton<IStudentRepo, StudentRepo>();
builder.Services.AddSingleton<ITestExRepo, TestExRepo>();
builder.Services.AddSingleton<IQuestionExRepo, QuestionExRepo>();
builder.Services.AddSingleton<IAnswerExRepo, AnswerExRepo>();

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseStaticFiles();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
