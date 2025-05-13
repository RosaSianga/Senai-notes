CREATE DATABASE SENAI_NOTES
GO

USE SENAI_NOTES
GO


CREATE TABLE Usuario (
    Id_Usuario INT PRIMARY KEY IDENTITY(1,1),
    Email VARCHAR(50) NOT NULL UNIQUE,
    Senha VARCHAR(50) NOT NULL,
    Data_Criacao DATETIME DEFAULT GETDATE()
);

CREATE TABLE Configuracao_Usuario (
    Id_Config INT PRIMARY KEY IDENTITY(1,1),
    Id_Usuario INT FOREIGN KEY REFERENCES Usuario(Id_Usuario),
    Fonte VARCHAR(50),
    Tema BIT  -- 0: Claro | 1: Escuro
);

CREATE TABLE Notas (
    Id_Notas INT PRIMARY KEY IDENTITY(1,1),
    Id_Usuario INT FOREIGN KEY REFERENCES Usuario(Id_Usuario),
    Titulo VARCHAR(50),
    Conteudo TEXT,
    Data_Criacao DATETIME DEFAULT GETDATE(),
    Data_Edicao DATETIME,
    Arquivada BIT DEFAULT 0
);

CREATE TABLE Tag (
    Id_Tag INT PRIMARY KEY IDENTITY(1,1),
    Id_Usuario INT FOREIGN KEY REFERENCES Usuario(Id_Usuario),
    Nome VARCHAR(50) NOT NULL
);

CREATE TABLE Notas_Tag (
    Id_Notas_Tag INT PRIMARY KEY IDENTITY(1,1),
    Id_Notas INT FOREIGN KEY REFERENCES Notas(Id_Notas),
    Id_Tag INT FOREIGN KEY REFERENCES Tag(Id_Tag)
)