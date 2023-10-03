using api_final_17.Dto;
using api_final_17.Reposetory;
using final_api_17;
using Microsoft.AspNetCore.Mvc;
//using System.Xml.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api_final_17.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherControler : ControllerBase
    {
        public ITeacherRepo _TeacherR=null;

        public TeacherControler(ITeacherRepo TeacherR)
        {
            _TeacherR= TeacherR;
        }

        // GET: api/<TeacherControler>

      //  RepoS R = new RepoS();

        [HttpGet]
        public List<Teacher> Get()
        {
           // List<Teacher> o = new List<Teacher>();
          return  _TeacherR.TG();
            //o = R.TG();
            //return o;
        }

        [HttpGet("{Name}")]

        public Teacher Get(string Name)
        {
            return _TeacherR.T1(Name);
                //Teacher o = new Teacher();
                //o = R.T1(Name);
                //return o;
        }
        //[HttpPost]
        //public List<Test> Post([FromBody] TestClass v)
        //{
        //    RepoS o = new RepoS();
        //    return o.TB(v);
        //}
        //[HttpPost]
        //public List<Test> Post(string s, string s1, string s2, int i, int i1, int i2)
        //{
        //    RepoS o = new RepoS();
        //    return o.TB(s, s1, s2, i, i1, i2);
        //}

        // GET api/<TeacherControler>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<TeacherControler>
        //[HttpPost("{id}")]
        //public List<Teacher> Post([FromBody]Teacher l)
        //{
        //    List<Teacher> o = new List<Teacher>();

        //    o = R.TA(l);
        //    return o;

        //  }
        //[HttpPost]
        //public Teacher Post(TeacherDto t)
        //{
        //    Teacher o = new Teacher();

        //    o = R.TA1(t);
        //    return o;

        //}

        //// PUT api/<TeacherControler>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<TeacherControler>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}

        [HttpPost]
        public Teacher Post(TeacherDto t)
        {

            return _TeacherR.PostT(t);


        }


    }
}

