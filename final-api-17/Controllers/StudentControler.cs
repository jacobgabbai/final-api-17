using api_final_17.Reposetory;
using final_api_17;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_17.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentControler : ControllerBase
    {

        public IStudentRepo _StudentRepo;

        public StudentControler(IStudentRepo S) { 
        
        _StudentRepo= S;
        
        }
        // GET: api/<StudentControler>
        [HttpGet]
        //public Student Get([FromBody]StudentDtocs v)
        //{
        //   RepoS o = new RepoS();

        //    return o.GetStu(v);
        //}

        // GET api/<StudentControler>/5
        [HttpGet("{Email}")]
        public  Student Get(string Email)
        {
          //  RepoS o = new RepoS();
            return _StudentRepo.GetStuName(Email);
        }

        // POST api/<StudentControler>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<StudentControler>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<StudentControler>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
