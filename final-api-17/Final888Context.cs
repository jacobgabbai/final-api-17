using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace final_api_17;

public partial class Final888Context : DbContext
{
    public Final888Context()
    {
    }

    public Final888Context(DbContextOptions<Final888Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Answer> Answers { get; set; }

    public virtual DbSet<AnswerEx1> AnswerEx1s { get; set; }

    public virtual DbSet<Question> Questions { get; set; }

    public virtual DbSet<QuestionEx> QuestionExes { get; set; }

    public virtual DbSet<Student> Students { get; set; }

    public virtual DbSet<Teacher> Teachers { get; set; }

    public virtual DbSet<Test> Tests { get; set; }

    public virtual DbSet<TestEx1> TestEx1s { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlite("Data Source=C:\\Users\\jacob\\Desktop\\c sharpe\\SOL-LIght 25-6-2023\\final888.db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Answer>(entity =>
        {
            entity.ToTable("Answer");

            entity.HasIndex(e => e.Id, "IX_Answer_Id").IsUnique();

            entity.HasOne(d => d.QuestionIdRefNavigation).WithMany(p => p.Answers).HasForeignKey(d => d.QuestionIdRef);
        });

        modelBuilder.Entity<AnswerEx1>(entity =>
        {
            entity.ToTable("AnswerEx1");

            entity.HasIndex(e => e.Id, "IX_AnswerEx1_Id").IsUnique();

            entity.HasOne(d => d.QuestionEx1IdRefNavigation).WithMany(p => p.AnswerEx1s)
                .HasForeignKey(d => d.QuestionEx1IdRef)
                .OnDelete(DeleteBehavior.SetNull);
        });

        modelBuilder.Entity<Question>(entity =>
        {
            entity.ToTable("Question");

            entity.HasIndex(e => e.Id, "IX_Question_Id").IsUnique();

            entity.Property(e => e.Picture).HasColumnName("picture");

            entity.HasOne(d => d.TestIdRefNavigation).WithMany(p => p.Questions).HasForeignKey(d => d.TestIdRef);
        });

        modelBuilder.Entity<QuestionEx>(entity =>
        {
            entity.ToTable("QuestionEx");

            entity.HasIndex(e => e.Id, "IX_QuestionEx_Id").IsUnique();

            entity.HasOne(d => d.TestEx1IdRefNavigation).WithMany(p => p.QuestionExes)
                .HasForeignKey(d => d.TestEx1IdRef)
                .OnDelete(DeleteBehavior.SetNull);
        });

        modelBuilder.Entity<Student>(entity =>
        {
            entity.ToTable("student");

            entity.HasIndex(e => e.Id, "IX_student_Id").IsUnique();
        });

        modelBuilder.Entity<Teacher>(entity =>
        {
            entity.ToTable("Teacher");

            entity.HasIndex(e => e.Id, "IX_Teacher_Id").IsUnique();
        });

        modelBuilder.Entity<Test>(entity =>
        {
            entity.ToTable("Test");

            entity.HasIndex(e => e.Id, "IX_Test_Id").IsUnique();

            entity.HasOne(d => d.TeacherIdRefNavigation).WithMany(p => p.Tests)
                .HasForeignKey(d => d.TeacherIdRef)
                .OnDelete(DeleteBehavior.SetNull);
        });

        modelBuilder.Entity<TestEx1>(entity =>
        {
            entity.ToTable("TestEx1");

            entity.HasIndex(e => e.Id, "IX_TestEx1_Id").IsUnique();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
