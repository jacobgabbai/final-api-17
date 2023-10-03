using api_final_17.Dto;
using final_api_17;

namespace api_final_17.Reposetory
{
    public class TeacherRepo:ITeacherRepo
    {
        public List<Teacher> TG()
        {
            Final888Context T = new Final888Context();
            Teacher F = new Teacher();
            List<Teacher> list = new List<Teacher>();
            list = T.Teachers.ToList();
            return list;
        }

        public Teacher T1(string S)
        {
            Final888Context T = new Final888Context();
            Teacher F = new Teacher();
            //  List<Teacher> F1 = new List<Teacher>();
            T.Teachers.ToList();
            foreach (Teacher a in T.Teachers)
                if (a.TeacherName == S)
                {
                    {
                        F.Id = a.Id;
                        F.TeacherName = a.TeacherName;
                        F.Email = a.Email;
                    }
                }
            return F;

        }


        //public Teacher TA1(TeacherDto z)
        //{
        //    Final8Context T = new Final8Context();
        //    List<Teacher>? R = T.Teachers.ToList();
        //    Teacher? tt = new Teacher();
        //    // int f = R.Count() ;
        //    Teacher? rr = new Teacher();
        //    if(R.Count== 0)
        //    {
        //        int i = 1;
        //    }
            
       
        //    Teacher? m = (R.Find(r => r.Email == z.Email));

        //    if (m == null)
        //    {

        //        int i = 1;

        //        if (R != null)
        //        {
        //            foreach (Teacher a in R)
        //            {
        //                if (a.Id >= i)
        //                {
        //                    i += 1;
        //                }

        //            }
        //        }
        //        tt.Id = i;
        //        tt.TeacherName = z;
        //        tt.Email = z1;

        //    }

        //    if (m != null)

        //    {
        //        Teacher? mm = (R.Find(r => r.Email == z1));
        //        if (mm == null)

        //        {
        //            int i = 1;

        //            if (R != null)
        //            {
        //                foreach (Teacher a in R)
        //                {
        //                    if (a.Id >= i)
        //                    {
        //                        i += 1;
        //                    }

        //                }
        //            }
        //            tt.Id = i;
        //            tt.TeacherName = z;
        //            tt.Email = z1;


        //        }




        //    }



        //    if (tt.Email != null)
        //    {
        //        T.Teachers.Add(tt);

        //    }
        //    T.SaveChanges();




        //    Teacher AA = new Teacher();

        //    AA.Id = tt.Id;
        //    AA.TeacherName = tt.TeacherName;
        //    AA.Email = tt.Email;

        //    return AA;



        //}


        public  Teacher PostT (TeacherDto t)
        {
            Final888Context T = new Final888Context();
            List<Teacher>? R = T.Teachers.ToList();
            Teacher? tt = new Teacher();
            // int f = R.Count() ;
            Teacher? rr = new Teacher();
            Teacher? zz = new Teacher();
            if (R.Count == 0)
            {
                int i = 1;
                zz.Id= i;
                zz.TeacherName=t.TeacherName;
               zz.Email = t.Email;
                zz.TeacherId = t.TeacherId;
                zz.PhoneN= t.PhoneN;
            }

            else
            {

                rr=R.Where(r=>r.TeacherId==t.TeacherId).FirstOrDefault();
               
                if(rr==null)
                {
                    long e = R.Max(r => r.Id);
                    long i = 1+e;
                    zz.Id=i;
                   zz.TeacherName = t.TeacherName;
                    zz.Email = t.Email;
                    zz.TeacherId = t.TeacherId;
                    zz.PhoneN = t.PhoneN;
                    T.Teachers.Add(zz);
                    T.SaveChanges();


                }

                else
                {
                    zz.TeacherName = "nono";
                }






            }

            


            return zz;






        }
    }
}




