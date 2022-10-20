PRAGMA journal_mode = MEMORY;
PRAGMA synchronous = OFF;
PRAGMA foreign_keys = OFF;
PRAGMA ignore_check_constraints = OFF;
PRAGMA auto_vacuum = NONE;
PRAGMA secure_delete = OFF;
BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS `user` (
  `email` TEXT NOT NULL,
  `firstName` TEXT NOT NULL,
  `lastName` TEXT NOT NULL,
  `age` INTEGER NOT NULL,
  `password` TEXT NOT NULL,
  `addressId` INTEGER
);

CREATE TABLE IF NOT EXISTS `match` (
  `authorId` INTEGER NOT NULL,
  `boardgameName` TEXT NOT NULL,
  `date` STRING,
  `duration` INTEGER,
  `notes` TEXT
);

CREATE TABLE IF NOT EXISTS `matchParticipant` (
  `matchId` INTEGER NOT NULL,
  `fullName` TEXT NOT NULL,
  `score` INTEGER
);

ALTER TABLE `match` ADD FOREIGN KEY (`authorId`) REFERENCES `user` (`id`);

ALTER TABLE `matchParticipant` ADD FOREIGN KEY (`matchId`) REFERENCES `match` (`id`);

COMMIT;
PRAGMA ignore_check_constraints = ON;
PRAGMA foreign_keys = ON;
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
