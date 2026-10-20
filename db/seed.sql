-- Optional demo data (run after db/setup.sql):
--     mysql -u root -p phonebook_db < db/seed.sql
--
-- Idempotent: safe to run repeatedly. Creates the demo account
-- (demo@phonebook.local / Demo1234! - training app only) and five
-- demo contacts owned by it. For the full 500+ contact dataset run:
--     clj -M:seed        (from backend/)

USE phonebook_db;

INSERT IGNORE INTO users (email, password_hash) VALUES
  ('demo@phonebook.local',
   'bcrypt+sha512$bd4a84b33db7d89a974fdfdc60402c69$12$71e7702610d87dca64365d2ae475378fcf28ff6f05466af9');
   -- ^ bcrypt hash of "Demo1234!" - never store or commit plain-text passwords

SET @demo := (SELECT id FROM users WHERE email = 'demo@phonebook.local');

INSERT INTO contacts (user_id, name, phone_number, email, address) VALUES
  (@demo, 'Ada Lovelace',   '+44 20 7946 0018', 'ada@example.com',    '12 Great College Street, London'),
  (@demo, 'Alan Turing',    '+44 20 7946 0029', 'alan@example.com',   'Bletchley Park, Milton Keynes'),
  (@demo, 'Grace Hopper',   '+1 555 010 2030',  'grace@example.com',  'Arlington, VA'),
  (@demo, 'Barbara Liskov', '+1 555 010 3040',  NULL,                 'Cambridge, MA'),
  (@demo, 'Edsger Dijkstra','+31 20 555 0405',  'edsger@example.com', NULL)
ON DUPLICATE KEY UPDATE name = VALUES(name);
