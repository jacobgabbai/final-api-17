using api_final_17.Dto;
using api_final_17.Reposetory;
using final_api_17;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_17.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestExControler : ControllerBase
    {

        public ITestExRepo _TestExRepo;

        public TestExControler(ITestExRepo testExRepo)
        {

            _TestExRepo = testExRepo;
        }
        // GET: api/<TestEx>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/<TestEx>/5
        [HttpGet]
        public int Get(string sname,string tname)
        {
            return _TestExRepo.GetIdName(sname,tname);
        }
        [HttpGet("{Name}")]
        public List<TestEx1> Get(string Name, int i)
        {
            List<TestEx1> t = new List<TestEx1>();
            if (i == 0)
            {
                return _TestExRepo.GetTestExes(Name);
            }
            else if (i == 1)
            {
                return _TestExRepo.GetByName1(Name);

            }
            else { return t; }
        }
        // POST api/<TestEx>
        [HttpPost]
        public TestEx1 Post(TestExDto y)
        {
           // RepoS o = new RepoS();
           return _TestExRepo.PostTestEx(y);
        }

        // PUT api/<TestEx>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TestEx>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
