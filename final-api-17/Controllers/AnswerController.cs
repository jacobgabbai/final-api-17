using api_final_17;
using api_final_17
    .Reposetory;
using final_api_17;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_16.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {

        public IAnswerRepo _AnswerRepo;
        public AnswerController(IAnswerRepo answerRepo)
        {
            _AnswerRepo = answerRepo;
        }
        // GET: api/<AnswerController>
        [HttpGet]
        public IEnumerable<Answer> Get()
        {
          // RepoS o= new RepoS();
            return _AnswerRepo.GetAnswer();
        }

        // GET api/<AnswerController>/5
        [HttpGet("{id}")]
        public List<Answer> Get(int id)
        {
          //  RepoS o = new RepoS();
            return _AnswerRepo.GetAnswer1(id);
        }

        // POST api/<AnswerController>
        [HttpPost]
        public void Post( AnswerDto1 value)
        {
          //  RepoS o = new RepoS();
            _AnswerRepo.TAnswer(value);
        }

        // PUT api/<AnswerController>/5
        [HttpPut]
        public void Put(AnswerDto1 v)
        {
         //   RepoS o = new RepoS();
            _AnswerRepo.AnswerPut(v);
        }

        // DELETE api/<AnswerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
