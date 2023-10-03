using api_final_17.Reposetory;
using final_api_17;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_17.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {

        public IQuaestionRepo _QuestRepo;

        public QuestionController(IQuaestionRepo QuestRepo)
        {

            _QuestRepo = QuestRepo;
        }
        // GET: api/<QuestionController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/<QuestionController>/5
        [HttpGet]
        public List<Question> Get()
        {
          //  RepoS o = new RepoS();

            return _QuestRepo.T3();
        }

        [HttpGet("{TestIdRef}") ]
        public List<Question> Get(int TestIdRef)
        {
           // RepoS o = new RepoS();

            return _QuestRepo.T31(TestIdRef);
        }


        //[HttpPut]
        //public IEnumerable<Question> Put(QuestionDto2 p)
        //{
        //    RepoS o = new RepoS();

        //    return o.PutQuestion(p);
        //}

        // POST api/<QuestionController>
        //[HttpPost]
        //public void Post(QuestioDto value)
        //{
        //    RepoS o = new RepoS();

        //    o.TQ1(value);
        //}

        [HttpPost]
        public Question Post(QuestionDto3 value)
        {
            //  RepoS o = new RepoS();
            if (value.Id == 0)
            {
                Question q=new Question();
             q=  _QuestRepo.PostQuestion(value);
                int y = 0;
                return q;
            }
            else
            {
              return  _QuestRepo.TQ1(value);
            }
        }
        [HttpPut]
        public Question Put(QuestionDto3 v)
        {
          //  RepoS o = new RepoS();

            return _QuestRepo.TQ2(v);
        }

        //[HttpPost]
        //public void Post(QuestionDto3 value)
        //{
        //    RepoS o = new RepoS();

        //    o.TQ2(value);
        //}

        // PUT api/<QuestionController>/5
        //[HttpPut]
        //public void Put()
        //{

        //}

        // DELETE api/<QuestionController>/5
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
          return _QuestRepo.QuestionDelete(id);
        }
    }
}
