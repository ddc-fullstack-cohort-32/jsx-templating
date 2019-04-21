CREATE TABLE post (
	postId INT UNSIGNED AUTO_INCREMENT NOT NULL,
	postContent VARCHAR(2000) NOT NULL,
	postDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	postTitle VARCHAR(64) NOT NULL,
	PRIMARY KEY (postId)
);