
-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) NOT NULL auto_increment,
  `name` varchar(20) default NULL,
  `age` smallint(2) default NULL,
  `phone` varchar(11) NOT NULL,
  `profession` char(10) default NULL,
  `recommend` varchar(50) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


