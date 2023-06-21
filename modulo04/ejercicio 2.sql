CREATE TABLE PAIS
(
  pais_id INT NOT NULL AUTO_INCREMENT,
  nombre_pais VARCHAR(60) NOT NULL,
  PRIMARY KEY (pais_id),
  UNIQUE (nombre_pais)
);

CREATE TABLE PROVINCIA
(
  nombre_provincia VARCHAR(60) NOT NULL,
  provincia_id INT NOT NULL AUTO_INCREMENT,
  pais_id INT NOT NULL,
  PRIMARY KEY (provincia_id),
  FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id)
);

CREATE TABLE LOCALIDAD
(
  codigo_postal INT NOT NULL,
  codigo_localidad INT NOT NULL,
  nombre VARCHAR(60) NOT NULL,
  provincia_id INT,
  PRIMARY KEY (codigo_postal),
  FOREIGN KEY (provincia_id) REFERENCES PROVINCIA(provincia_id),
  UNIQUE (codigo_localidad)
);

CREATE TABLE EMPLEADO
(
  fecha_alta INT NOT NULL,
  telefono INT NOT NULL,
  nombre VARCHAR(60) NOT NULL,
  empleado_id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(60) NOT NULL,
  DNI INT NOT NULL,
  codigo_postal INT NOT NULL,
  PRIMARY KEY (empleado_id),
  FOREIGN KEY (codigo_postal) REFERENCES LOCALIDAD(codigo_postal),
  UNIQUE (DNI)
);