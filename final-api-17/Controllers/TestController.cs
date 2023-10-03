using api_final_17.Reposetory;
using final_api_17;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_17
    .Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {

        public ITestRepo _TestRepo;

        public TestController(ITestRepo T) { 
        
        
        _TestRepo = T;

        }

        //// GET: api/<TESTController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //GET api/<TESTController>/5

        [HttpGet]
        public List<Test> Get()
        {
       //     RepoS o = new RepoS();

            return _TestRepo.T2();
        }

        [HttpGet("{Name},{tid}")]
        public  Test Get(int tid,string Name)
        {
        //    RepoS o = new RepoS();
            if (tid!= 0)
            {
                return _TestRepo.T21(tid, Name);
            }
            else { return _TestRepo.T22(Name); }
        }
        [HttpGet("id")]
        public Test Get(int id)
        {
            return _TestRepo.T33(id);
        }
        //[HttpPost]

        //public Test Post(string s, string s1, string s2, int i, int i1, int i2)
        //{


        //    RepoS o = new RepoS();
        //  return  o.TB(s, s1, s2, i, i1, i2);
        //}
        [HttpPost]

        public void Post1(Test1 value)
        {
        //    RepoS o = new RepoS();
            _TestRepo.TB1(value);


        }

        [HttpPut]

        public Test put(Test2Dto value)
        { //RepoS o = new RepoS();
        
          return _TestRepo.PutTest1(value);
        
        
        }

        // POST api/<TESTController>


        //// PUT api/<TESTController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //DELETE api/<TESTController>/5
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            return _TestRepo.TestDelete(id);
        }
    }
}
