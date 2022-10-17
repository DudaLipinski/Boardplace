-- import to SQLite by running: sqlite3.exe db.sqlite3 -init sqlite.sql

PRAGMA journal_mode = MEMORY;
PRAGMA synchronous = OFF;
PRAGMA foreign_keys = OFF;
PRAGMA ignore_check_constraints = OFF;
PRAGMA auto_vacuum = NONE;
PRAGMA secure_delete = OFF;
BEGIN TRANSACTION;


CREATE TABLE IF NOT EXISTS `user` (
`id` INTEGER PRIMARY KEY AUTO_INCREMENT,
`email` TEXT NOT NULL,
`firstName` TEXT NOT NULL,
`lastName` TEXT NOT NULL,
`age` INTEGER NOT NULL,
`password` TEXT NOT NULL,
`addressId` INTEGER
);

CREATE TABLE IF NOT EXISTS `address` (
`id` INTEGER PRIMARY KEY AUTO_INCREMENT,
`country` TEXT NOT NULL,
`state` TEXT NOT NULL,
`city` TEXT NOT NULL,
`address` TEXT NOT NULL,
`postalCode` TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS `favoriteBG` (
`userId` INTEGER NOT NULL,
`boardgameId` TEXT NOT NULL,
PRIMARY KEY (`boardgameId`, `userId`)
);

CREATE TABLE IF NOT EXISTS `wishedBG` (
`userId` INTEGER NOT NULL,
`boardgameId` TEXT NOT NULL,
PRIMARY KEY (`boardgameId`, `userId`)
);

CREATE TABLE IF NOT EXISTS `toTradeBG` (
`userId` INTEGER NOT NULL,
`boardgameId` TEXT NOT NULL,
PRIMARY KEY (`boardgameId`, `userId`)
);

CREATE TABLE IF NOT EXISTS `match` (
`id` INTEGER PRIMARY KEY AUTO_INCREMENT,
`authorId` INTEGER NOT NULL,
`boardgameId` TEXT,
`boardgameName` TEXT NOT NULL,
`date` STRING,
`duration` INTEGER ,
`notes` TEXT
);

CREATE TABLE IF NOT EXISTS `matchParticipant` (
`matchId` INTEGER NOT NULL,
`userId` INTEGER NOT NULL,
`name` TEXT,
`score` INTEGER,
`notes` TEXT,
PRIMARY KEY (`matchId`, `userId`)
);
CREATE INDEX `favoriteBG_index_0` ON `favoriteBG` (`userId`);
CREATE INDEX `wishedBG_index_1` ON `wishedBG` (`userId`);
CREATE INDEX `toTradeBG_index_2` ON `toTradeBG` (`userId`);
ALTER TABLE `user` ADD FOREIGN KEY (`addressId`) REFERENCES `address` (`id`);
ALTER TABLE `favoriteBG` ADD FOREIGN KEY (`userId`) REFERENCES `user` (`id`);
ALTER TABLE `wishedBG` ADD FOREIGN KEY (`userId`) REFERENCES `user` (`id`);
ALTER TABLE `toTradeBG` ADD FOREIGN KEY (`userId`) REFERENCES `user` (`id`);
ALTER TABLE `match` ADD FOREIGN KEY (`authorId`) REFERENCES `user` (`id`);
ALTER TABLE `matchParticipant` ADD FOREIGN KEY (`matchId`) REFERENCES `match` (`id`);
ALTER TABLE `matchParticipant` ADD FOREIGN KEY (`userId`) REFERENCES `user` (`id`);





COMMIT;
PRAGMA ignore_check_constraints = ON;
PRAGMA foreign_keys = ON;
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
