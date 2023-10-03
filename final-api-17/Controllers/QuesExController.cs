using api_final_17.Dto;
using api_final_17.Reposetory;
using final_api_17;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_17.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuesExController : ControllerBase
    {

        public IQuestionExRepo _QuesExRepo;

        public QuesExController(IQuestionExRepo quesExRepo)
        {
            _QuesExRepo = quesExRepo;
        }


        // GET: api/<QuesExController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<QuesExController>/5
        [HttpGet("{id}")]
        public List<QuestionEx> Get(int id)
        {
            return _QuesExRepo.GetQuestion3(id);
        }

        // POST api/<QuesExController>
        [HttpPost]
        public QuestionEx Post(QuestionExDto q)
        {
           // RepoS o= new RepoS();
            return _QuesExRepo.PostQueEx(q);

        }

        // PUT api/<QuesExController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<QuesExController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
