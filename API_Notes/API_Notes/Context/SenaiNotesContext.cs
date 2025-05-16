using System;
using System.Collections.Generic;
using API_Notes.Models;
using Microsoft.EntityFrameworkCore;

namespace API_Notes.Context;

public partial class SenaiNotesContext : DbContext
{
    public SenaiNotesContext()
    {
    }

    public SenaiNotesContext(DbContextOptions<SenaiNotesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<ConfiguracaoUsuario> ConfiguracaoUsuarios { get; set; }

    public virtual DbSet<Nota> Notas { get; set; }

    public virtual DbSet<NotasTag> NotasTags { get; set; }

    public virtual DbSet<Tag> Tags { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => 
        optionsBuilder.UseSqlServer("Data Source=DESKTOP-A2J49GH\\SQLEXPRESS;Initial Catalog=SENAI_NOTES;User Id=sa;Password=Senai@134;TrustServerCertificate=true;");
        //optionsBuilder.UseSqlServer("Data Source=localhost, 1433;Initial Catalog=SENAI_NOTES;User Id=sa;Password=Senai@134;TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ConfiguracaoUsuario>(entity =>
        {
            entity.HasKey(e => e.IdConfig).HasName("PK__Configur__65F43AFD5976DD45");

            entity.ToTable("Configuracao_Usuario");

            entity.Property(e => e.IdConfig).HasColumnName("Id_Config");
            entity.Property(e => e.Fonte)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.IdUsuario).HasColumnName("Id_Usuario");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.ConfiguracaoUsuarios)
                .HasForeignKey(d => d.IdUsuario)
                .HasConstraintName("FK__Configura__Id_Us__4D94879B");
        });

        modelBuilder.Entity<Nota>(entity =>
        {
            entity.HasKey(e => e.IdNotas).HasName("PK__Notas__C799B3C39F886FB5");

            entity.Property(e => e.IdNotas).HasColumnName("Id_Notas");
            entity.Property(e => e.Arquivada).HasDefaultValue(false);
            entity.Property(e => e.Conteudo).HasColumnType("text");
            entity.Property(e => e.DataCriacao)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("Data_Criacao");
            entity.Property(e => e.DataEdicao)
                .HasColumnType("datetime")
                .HasColumnName("Data_Edicao");
            entity.Property(e => e.IdUsuario).HasColumnName("Id_Usuario");
            entity.Property(e => e.Titulo)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Nota)
                .HasForeignKey(d => d.IdUsuario)
                .HasConstraintName("FK__Notas__Id_Usuari__5070F446");
        });

        modelBuilder.Entity<NotasTag>(entity =>
        {
            entity.HasKey(e => e.IdNotasTag).HasName("PK__Notas_Ta__85E115E596A151B4");

            entity.ToTable("Notas_Tag");

            entity.Property(e => e.IdNotasTag).HasColumnName("Id_Notas_Tag");
            entity.Property(e => e.IdNotas).HasColumnName("Id_Notas");
            entity.Property(e => e.IdTag).HasColumnName("Id_Tag");

            entity.HasOne(d => d.IdNotasNavigation).WithMany(p => p.NotasTags)
                .HasForeignKey(d => d.IdNotas)
                .HasConstraintName("FK__Notas_Tag__Id_No__5812160E");

            entity.HasOne(d => d.IdTagNavigation).WithMany(p => p.NotasTags)
                .HasForeignKey(d => d.IdTag)
                .HasConstraintName("FK__Notas_Tag__Id_Ta__59063A47");
        });

        modelBuilder.Entity<Tag>(entity =>
        {
            entity.HasKey(e => e.IdTag).HasName("PK__Tag__5513B4C1572C8E63");

            entity.ToTable("Tag");

            entity.Property(e => e.IdTag).HasColumnName("Id_Tag");
            entity.Property(e => e.IdUsuario).HasColumnName("Id_Usuario");
            entity.Property(e => e.Nome)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Tags)
                .HasForeignKey(d => d.IdUsuario)
                .HasConstraintName("FK__Tag__Id_Usuario__5535A963");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__Usuario__63C76BE2E340CD08");

            entity.ToTable("Usuario");

            entity.HasIndex(e => e.Email, "UQ__Usuario__A9D105348D5DEEEF").IsUnique();

            entity.Property(e => e.IdUsuario).HasColumnName("Id_Usuario");
            entity.Property(e => e.DataCriacao)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("Data_Criacao");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Senha)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
