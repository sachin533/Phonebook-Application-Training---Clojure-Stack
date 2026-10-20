-- ---------------------------------------------------------------------------
-- Phonebook database setup - FRESH installs (run as the MySQL root user):
--
--     mysql -u root -p < db/setup.sql
--
-- Replace CHANGE_ME below with a strong password and use the same value
-- for DB_PASSWORD in the project .env file.
--
-- Upgrading an older install? Use db/migrations/001_auth.sql instead.
-- The backend also creates missing tables/columns automatically on boot.
-- ---------------------------------------------------------------------------

CREATE DATABASE IF NOT EXISTS phonebook_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- Least-privilege application user (used by the Clojure backend).
CREATE USER IF NOT EXISTS 'phonebook_app'@'localhost' IDENTIFIED BY 'CHANGE_ME';
GRANT ALL PRIVILEGES ON phonebook_db.* TO 'phonebook_app'@'localhost';
FLUSH PRIVILEGES;

USE phonebook_db;

-- Registered accounts. Passwords are bcrypt hashes (buddy-hashers) -
-- plain-text passwords are never stored.
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Opaque bearer sessions. Only the SHA-256 digest of the token that was
-- handed to the client is stored, so database dumps cannot be replayed.
CREATE TABLE IF NOT EXISTS sessions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  token_hash CHAR(64) NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_sessions_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_sessions_expires (expires_at)
);

-- Every contact belongs to exactly one user.
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE,
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_contacts_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_contacts_user_id (user_id)
);
