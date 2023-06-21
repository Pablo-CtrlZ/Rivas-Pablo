CREATE TABLE Alumno
(
  cod_matrícula INT NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  DNI INT NOT NULL,
  fecha_nac INT NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (cod_matrícula),
  UNIQUE (DNI),
  UNIQUE (email)
);

CREATE TABLE Profesor
(
  nombre VARCHAR(50) NOT NULL,
  profesor_id INT NOT NULL,
  especialidad VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (profesor_id),
  UNIQUE (email)
);

CREATE TABLE Curso
(
  cod_curso INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  PRIMARY KEY (cod_curso)
);

CREATE TABLE Cursa
(
  cod_matrícula INT NOT NULL,
  cod_curso INT NOT NULL,
  PRIMARY KEY (cod_matrícula, cod_curso),
  FOREIGN KEY (cod_matrícula) REFERENCES Alumno(cod_matrícula),
  FOREIGN KEY (cod_curso) REFERENCES Curso(cod_curso)
);

CREATE TABLE Enseña_califica
(
  cod_matrícula INT NOT NULL,
  profesor_id INT NOT NULL,
  PRIMARY KEY (cod_matrícula, profesor_id),
  FOREIGN KEY (cod_matrícula) REFERENCES Alumno(cod_matrícula),
  FOREIGN KEY (profesor_id) REFERENCES Profesor(profesor_id)
);

CREATE TABLE Dictado
(
  cod_curso INT NOT NULL,
  profesor_id INT NOT NULL,
  PRIMARY KEY (cod_curso, profesor_id),
  FOREIGN KEY (cod_curso) REFERENCES Curso(cod_curso),
  FOREIGN KEY (profesor_id) REFERENCES Profesor(profesor_id)
);