CREATE TABLE Admin(
    admin_id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    home_address VARCHAR(255) NOT NULL,
    gender char(1) NOT NULL
); 

CREATE TABLE Module (
    module_name VARCHAR(10) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT
);


CREATE TABLE Progress(
    user_id INT,
    module_name VARCHAR(10),
    PRIMARY KEY (user_id, module_name),
    score INT NOT NULL,
    completed BOOLEAN NOT NULL,
    lastUpdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (module_name) REFERENCES Module(module_name) ON DELETE CASCADE
);


CREATE TABLE Rewards (
    user_id INT,
    reward_id INT PRIMARY KEY,
    reward_name VARCHAR(100) NOT NULL,
    badge_image VARCHAR(255),
    points INT NOT NULL,
    date_awarded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

CREATE TABLE Business (
    user_id INT,
    business_id INT PRIMARY KEY,
    business_name VARCHAR(100) NOT NULL,
    business_description TEXT,
    business_number VARCHAR(20) NOT NULL UNIQUE,
    business_certificate BYTEA,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE SET NULL
);


CREATE TABLE Resources (
    module_name VARCHAR(10),
    resource_id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    resource_description TEXT,
    file_path TEXT, -- The file path is for efficiency so we will have to show the path of each file or video or image.
    file_type VARCHAR(50) NOT NULL, -- This can be 'image', 'video', 'document', etc.
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (module_name) REFERENCES Module(module_name) ON DELETE CASCADE
);





   
  