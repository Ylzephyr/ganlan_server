create table if not exists `inventory`(
    `ID` INT UNSIGNED AUTO_INCREMENT, 
    `part_number` VARCHAR(50) NOT NULL,
    `manufactory` VARCHAR(20) NOT NULL,
    `produce_date` VARCHAR(20) NOT NULL,
    `quantity` VARCHAR(10) NOT NULL,
    `package` VARCHAR(10) not NULL,
    `Updated` DATE NOT NULL,
    PRIMARY KEY (`ID`)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;
