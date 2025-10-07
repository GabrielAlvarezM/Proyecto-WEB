CREATE TYPE skill_level AS ENUM ('principiante', 'intermedio', 'avanzado');

-- Tabla 1: Usuarios
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    height_cm INT,
    weight_kg NUMERIC(5, 2),
    age INT,
    gender VARCHAR(50),
    skill_level skill_level NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla 2: Ejercicios
CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    skill_level skill_level NOT NULL,
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL 
);

-- Tabla 3: Dietas
CREATE TABLE diets (
    id SERIAL PRIMARY KEY,
    skill_level skill_level NOT NULL,
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL 
);

-- Tabla 4: Suplementos
CREATE TABLE supplements (
    id SERIAL PRIMARY KEY,
    skill_level skill_level NOT NULL,
    name VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL 
);