-- ---------------------------------------------------------------------------
-- Migration 001: multi-user authentication.
--
-- For installs created BEFORE the auth upgrade (contacts without
-- user_id). The backend applies these changes automatically on startup;
-- this file is the SQL reference for DBAs and can be run once:
--
--     mysql -u root -p phonebook_db < db/migrations/001_auth.sql
--
-- Existing contact rows keep their data; rows with user_id NULL are
-- orphans that `clj -M:seed` adopts for the demo user.
-- ---------------------------------------------------------------------------

USE phonebook_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

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

-- MySQL has no ADD COLUMN IF NOT EXISTS: skip these two statements if
-- the column/index already exist.
ALTER TABLE contacts ADD COLUMN user_id INT NULL AFTER id;
ALTER TABLE contacts ADD INDEX idx_contacts_user_id (user_id);

ALTER TABLE contacts
  ADD CONSTRAINT fk_contacts_user FOREIGN KEY (user_id)
  REFERENCES users(id) ON DELETE CASCADE;
