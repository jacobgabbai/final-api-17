using api_final_17.Dto;
using api_final_17.Reposetory;
using final_api_17;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_16.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerExController : ControllerBase
    {


        public IAnswerExRepo _AnswerExR;

        public AnswerExController(IAnswerExRepo answerExR)
        {
            _AnswerExR = answerExR;
        }


        // GET: api/<AnswerExController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<AnswerExController>/5
        [HttpGet("{id}")]
        public AnswerEx1 Get(int id)
        {
            return _AnswerExR.GetAnswer1(id);
        }

        // POST api/<AnswerExController>
        [HttpPost]
        public void Post(AnswerExDto a)
        {
          //  RepoS o= new RepoS();   
            _AnswerExR.PostAnsEx(a);
        }

        // PUT api/<AnswerExController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AnswerExController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
