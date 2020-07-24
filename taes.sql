/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50728
Source Host           : localhost:3306
Source Database       : taes

Target Server Type    : MYSQL
Target Server Version : 50728
File Encoding         : 65001

Date: 2020-07-23 18:00:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `COURSESID` int(11) NOT NULL AUTO_INCREMENT,
  `COURSESNO` varchar(20) DEFAULT NULL,
  `COURSESNAME` varchar(30) DEFAULT NULL,
  `CREDITS` double(8,0) DEFAULT NULL,
  PRIMARY KEY (`COURSESID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of courses
-- ----------------------------
INSERT INTO `courses` VALUES ('1', '3001', '离散数学', '2');
INSERT INTO `courses` VALUES ('2', '3002', 'Java语言程序设计', '3');
INSERT INTO `courses` VALUES ('3', '3003', '软件工程导论', '2');
INSERT INTO `courses` VALUES ('4', '3004', '编译原理', '3');
INSERT INTO `courses` VALUES ('5', '3005', 'Web程序设计', '2');

-- ----------------------------
-- Table structure for examination
-- ----------------------------
DROP TABLE IF EXISTS `examination`;
CREATE TABLE `examination` (
  `EXID` int(11) NOT NULL AUTO_INCREMENT,
  `EXNO` varchar(20) DEFAULT NULL,
  `EXNAME` varchar(50) DEFAULT NULL,
  `EXTIME` varchar(20) DEFAULT NULL,
  `PROFESSION2` varchar(20) DEFAULT NULL,
  `GRADE` varchar(30) DEFAULT NULL,
  `ADDRESS` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`EXID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of examination
-- ----------------------------
INSERT INTO `examination` VALUES ('6', '20180101', '期中考试', '2018-01-01', '软件工程', '软工1401班', '九思3069');
INSERT INTO `examination` VALUES ('7', '20180501', '期末考试', '2018-05-01', '软件工程', '软工1401班', '临湖轩A2029');

-- ----------------------------
-- Table structure for paper
-- ----------------------------
DROP TABLE IF EXISTS `paper`;
CREATE TABLE `paper` (
  `PAPERID` int(11) NOT NULL AUTO_INCREMENT,
  `PAPERNO` varchar(20) DEFAULT NULL,
  `PAPERNAME` varchar(30) DEFAULT NULL,
  `COURSESID` int(11) DEFAULT NULL,
  `TOTALSCORE` int(11) DEFAULT NULL,
  PRIMARY KEY (`PAPERID`),
  KEY `FKhno3g5va36o6kybx7xj6bugoc` (`COURSESID`),
  CONSTRAINT `FKhno3g5va36o6kybx7xj6bugoc` FOREIGN KEY (`COURSESID`) REFERENCES `courses` (`COURSESID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of paper
-- ----------------------------
INSERT INTO `paper` VALUES ('1', 's1', '离散数学A', '1', '100');
INSERT INTO `paper` VALUES ('2', 's2', 'Java语言程序设计A', '2', '100');
INSERT INTO `paper` VALUES ('3', 's3', '软件工程导论', '3', '100');

-- ----------------------------
-- Table structure for questionbank
-- ----------------------------
DROP TABLE IF EXISTS `questionbank`;
CREATE TABLE `questionbank` (
  `QBANKID` int(11) NOT NULL AUTO_INCREMENT,
  `QBANKNO` varchar(50) DEFAULT NULL,
  `CONTENT` varchar(255) DEFAULT NULL,
  `TYPE` varchar(20) DEFAULT NULL,
  `PAPERID` int(11) DEFAULT NULL,
  `FULLSCORE` int(11) DEFAULT NULL,
  PRIMARY KEY (`QBANKID`),
  KEY `FKc6efpg0881g8htee79ic82c7c` (`PAPERID`),
  CONSTRAINT `FKc6efpg0881g8htee79ic82c7c` FOREIGN KEY (`PAPERID`) REFERENCES `paper` (`PAPERID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of questionbank
-- ----------------------------
INSERT INTO `questionbank` VALUES ('1', 's1t1', '试题1', '客观题', '1', '20');
INSERT INTO `questionbank` VALUES ('2', 's1t2', '试题2', '客观题', '1', '20');
INSERT INTO `questionbank` VALUES ('3', 's1t3', '试题3', '客观题', '1', '20');
INSERT INTO `questionbank` VALUES ('4', 's1t4', '试题4', '客观题', '1', '20');
INSERT INTO `questionbank` VALUES ('5', 's1t5', '试题5', '客观题', '1', '20');
INSERT INTO `questionbank` VALUES ('8', 's2t1', '试题1', '客观题', '2', '20');
INSERT INTO `questionbank` VALUES ('9', 's2t2', '试题2', '客观题', '2', '20');
INSERT INTO `questionbank` VALUES ('10', 's2s3', '试题3', '客观题', '2', '20');
INSERT INTO `questionbank` VALUES ('11', 's2s4', '试题4', '客观题', '2', '20');
INSERT INTO `questionbank` VALUES ('12', 's2s5', '试题5', '客观题', '2', '20');

-- ----------------------------
-- Table structure for score
-- ----------------------------
DROP TABLE IF EXISTS `score`;
CREATE TABLE `score` (
  `SCID` int(11) NOT NULL AUTO_INCREMENT,
  `STUDENTNO` varchar(30) DEFAULT NULL,
  `COURSESNAME` varchar(30) DEFAULT NULL,
  `PAPERNAME` varchar(255) DEFAULT NULL,
  `ASCORE` int(11) DEFAULT NULL,
  `EXTIME` varchar(30) DEFAULT NULL,
  `EXNAME` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`SCID`)
) ENGINE=InnoDB AUTO_INCREMENT=302 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of score
-- ----------------------------
INSERT INTO `score` VALUES ('31', '142302001', '离散数学', '离散数学A', '75', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('32', '142302002', '离散数学', '离散数学A', '80', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('33', '142302003', '离散数学', '离散数学A', '64', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('34', '142302004', '离散数学', '离散数学A', '65', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('35', '142302005', '离散数学', '离散数学A', '66', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('36', '142302006', '离散数学', '离散数学A', '67', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('37', '142302007', '离散数学', '离散数学A', '68', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('38', '142302008', '离散数学', '离散数学A', '69', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('39', '142302009', '离散数学', '离散数学A', '70', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('40', '142302010', '离散数学', '离散数学A', '71', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('60', '142302001', 'Java语言程序设计', 'Java语言程序设计A', '64', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('61', '142302002', 'Java语言程序设计', 'Java语言程序设计A', '78', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('62', '142302003', 'Java语言程序设计', 'Java语言程序设计A', '80', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('63', '142302004', 'Java语言程序设计', 'Java语言程序设计A', '84', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('64', '142302005', 'Java语言程序设计', 'Java语言程序设计A', '84', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('65', '142302006', 'Java语言程序设计', 'Java语言程序设计A', '83', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('66', '142302007', 'Java语言程序设计', 'Java语言程序设计A', '59', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('67', '142302008', 'Java语言程序设计', 'Java语言程序设计A', '78', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('68', '142302009', 'Java语言程序设计', 'Java语言程序设计A', '91', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('69', '142302010', 'Java语言程序设计', 'Java语言程序设计A', '67', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('89', '142302001', '软件工程导论', '软件工程导论A', '71', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('90', '142302002', '软件工程导论', '软件工程导论A', '69', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('91', '142302003', '软件工程导论', '软件工程导论A', '64', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('92', '142302004', '软件工程导论', '软件工程导论A', '78', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('93', '142302005', '软件工程导论', '软件工程导论A', '49', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('94', '142302006', '软件工程导论', '软件工程导论A', '76', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('95', '142302007', '软件工程导论', '软件工程导论A', '64', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('96', '142302008', '软件工程导论', '软件工程导论A', '78', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('97', '142302009', '软件工程导论', '软件工程导论A', '80', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('98', '142302010', '软件工程导论', '软件工程导论A', '71', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('118', '142302001', '编译原理', '编译原理A', '65', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('119', '142302002', '编译原理', '编译原理A', '66', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('120', '142302003', '编译原理', '编译原理A', '67', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('121', '142302004', '编译原理', '编译原理A', '68', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('122', '142302005', '编译原理', '编译原理A', '69', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('123', '142302006', '编译原理', '编译原理A', '70', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('124', '142302007', '编译原理', '编译原理A', '71', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('125', '142302008', '编译原理', '编译原理A', '72', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('126', '142302009', '编译原理', '编译原理A', '73', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('127', '142302010', '编译原理', '编译原理A', '74', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('147', '142302001', 'Web程序设计', 'Web程序设计A', '49', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('148', '142302002', 'Web程序设计', 'Web程序设计A', '76', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('149', '142302003', 'Web程序设计', 'Web程序设计A', '64', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('150', '142302004', 'Web程序设计', 'Web程序设计A', '78', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('151', '142302005', 'Web程序设计', 'Web程序设计A', '75', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('152', '142302006', 'Web程序设计', 'Web程序设计A', '80', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('153', '142302007', 'Web程序设计', 'Web程序设计A', '64', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('154', '142302008', 'Web程序设计', 'Web程序设计A', '65', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('155', '142302009', 'Web程序设计', 'Web程序设计A', '66', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('156', '142302010', 'Web程序设计', 'Web程序设计A', '67', '2018-01-01', '期中测试');
INSERT INTO `score` VALUES ('176', '142302001', '离散数学', '离散数学A', '78', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('177', '142302002', '离散数学', '离散数学A', '79', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('178', '142302003', '离散数学', '离散数学A', '80', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('179', '142302004', '离散数学', '离散数学A', '81', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('180', '142302005', '离散数学', '离散数学A', '53', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('181', '142302006', '离散数学', '离散数学A', '49', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('182', '142302007', '离散数学', '离散数学A', '71', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('183', '142302008', '离散数学', '离散数学A', '90', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('184', '142302009', '离散数学', '离散数学A', '69', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('185', '142302010', '离散数学', '离散数学A', '64', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('205', '142302001', 'Java语言程序设计', 'Java语言程序设计A', '71', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('206', '142302002', 'Java语言程序设计', 'Java语言程序设计A', '21', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('207', '142302003', 'Java语言程序设计', 'Java语言程序设计A', '32', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('208', '142302004', 'Java语言程序设计', 'Java语言程序设计A', '49', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('209', '142302005', 'Java语言程序设计', 'Java语言程序设计A', '76', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('210', '142302006', 'Java语言程序设计', 'Java语言程序设计A', '64', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('211', '142302007', 'Java语言程序设计', 'Java语言程序设计A', '59', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('212', '142302008', 'Java语言程序设计', 'Java语言程序设计A', '78', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('213', '142302009', 'Java语言程序设计', 'Java语言程序设计A', '91', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('214', '142302010', 'Java语言程序设计', 'Java语言程序设计A', '67', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('234', '142302001', '软件工程导论', '软件工程导论A', '66', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('235', '142302002', '软件工程导论', '软件工程导论A', '67', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('236', '142302003', '软件工程导论', '软件工程导论A', '68', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('237', '142302004', '软件工程导论', '软件工程导论A', '69', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('238', '142302005', '软件工程导论', '软件工程导论A', '70', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('239', '142302006', '软件工程导论', '软件工程导论A', '71', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('240', '142302007', '软件工程导论', '软件工程导论A', '72', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('241', '142302008', '软件工程导论', '软件工程导论A', '78', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('242', '142302009', '软件工程导论', '软件工程导论A', '80', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('243', '142302010', '软件工程导论', '软件工程导论A', '71', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('263', '142302001', '编译原理', '编译原理A', '65', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('264', '142302002', '编译原理', '编译原理A', '66', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('265', '142302003', '编译原理', '编译原理A', '67', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('266', '142302004', '编译原理', '编译原理A', '68', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('267', '142302005', '编译原理', '编译原理A', '69', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('268', '142302006', '编译原理', '编译原理A', '70', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('269', '142302007', '编译原理', '编译原理A', '71', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('270', '142302008', '编译原理', '编译原理A', '72', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('271', '142302009', '编译原理', '编译原理A', '73', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('272', '142302010', '编译原理', '编译原理A', '74', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('292', '142302001', 'Web程序设计', 'Web程序设计A', '49', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('293', '142302002', 'Web程序设计', 'Web程序设计A', '76', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('294', '142302003', 'Web程序设计', 'Web程序设计A', '64', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('295', '142302004', 'Web程序设计', 'Web程序设计A', '78', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('296', '142302005', 'Web程序设计', 'Web程序设计A', '75', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('297', '142302006', 'Web程序设计', 'Web程序设计A', '80', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('298', '142302007', 'Web程序设计', 'Web程序设计A', '64', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('299', '142302008', 'Web程序设计', 'Web程序设计A', '65', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('300', '142302009', 'Web程序设计', 'Web程序设计A', '66', '2018-05-01', '期末测试');
INSERT INTO `score` VALUES ('301', '142302010', 'Web程序设计', 'Web程序设计A', '67', '2018-05-01', '期末测试');

-- ----------------------------
-- Table structure for scoredetails
-- ----------------------------
DROP TABLE IF EXISTS `scoredetails`;
CREATE TABLE `scoredetails` (
  `SDID` int(11) NOT NULL AUTO_INCREMENT,
  `SCID` int(11) DEFAULT NULL,
  `QBANKID` int(11) DEFAULT NULL,
  `SDSCORE` int(11) DEFAULT NULL,
  PRIMARY KEY (`SDID`),
  KEY `FKb7f8g5u2r28b6p78epo68sbp9` (`QBANKID`),
  KEY `FKr8gybt52oixtddmcw4iy9h29q` (`SCID`),
  CONSTRAINT `FKb7f8g5u2r28b6p78epo68sbp9` FOREIGN KEY (`QBANKID`) REFERENCES `questionbank` (`QBANKID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKr8gybt52oixtddmcw4iy9h29q` FOREIGN KEY (`SCID`) REFERENCES `score` (`SCID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of scoredetails
-- ----------------------------
INSERT INTO `scoredetails` VALUES ('1', '60', '8', '20');
INSERT INTO `scoredetails` VALUES ('2', '60', '9', '20');
INSERT INTO `scoredetails` VALUES ('3', '60', '10', '20');
INSERT INTO `scoredetails` VALUES ('4', '60', '11', '4');
INSERT INTO `scoredetails` VALUES ('5', '60', '12', '0');
INSERT INTO `scoredetails` VALUES ('6', '31', '1', '20');
INSERT INTO `scoredetails` VALUES ('7', '31', '2', '20');
INSERT INTO `scoredetails` VALUES ('8', '31', '3', '20');
INSERT INTO `scoredetails` VALUES ('9', '31', '4', '10');
INSERT INTO `scoredetails` VALUES ('10', '31', '5', '5');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `STUDENTID` int(11) NOT NULL AUTO_INCREMENT,
  `STUDENTNO` varchar(100) DEFAULT NULL,
  `STUDENTNAME` varchar(20) DEFAULT NULL,
  `PROFESSIONALCLASS` varchar(20) DEFAULT NULL,
  `PROFESSION` varchar(20) DEFAULT NULL,
  `COLLEGE` varchar(20) DEFAULT NULL,
  `PASSWORD` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`STUDENTID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('1', '142302001', '张瑶', '软工1401班', '软件工程', '信息工程学院', '6f2e13b4563f19300c312f40c0f5d257');
INSERT INTO `student` VALUES ('2', '142302002', '朱亮', '软工1401班', '软件工程', '信息工程学院', '5986211e8cfa5336e2b79297b9c8d17e');
INSERT INTO `student` VALUES ('3', '142302003', '吴云瑞', '软工1401班', '软件工程', '信息工程学院', '272e2e547b7f759941b4cc7affb198db');
INSERT INTO `student` VALUES ('4', '142302004', '苏伟', '软工1401班', '软件工程', '信息工程学院', 'bf0e8d9a324d67bc8cb17d2557482406');
INSERT INTO `student` VALUES ('5', '142302005', '周禹', '软工1401班', '软件工程', '信息工程学院', '20acf99520153b275cc56632ec41fde8');
INSERT INTO `student` VALUES ('6', '142302006', '沈显锋', '软工1401班', '软件工程', '信息工程学院', '6163f044382df6d7ad4d8b1e13ee4e95');
INSERT INTO `student` VALUES ('7', '142302007', '周超', '软工1401班', '软件工程', '信息工程学院', '1dcf33d260796d60e0fbab74df293a92');
INSERT INTO `student` VALUES ('8', '142302008', '裴恒意', '软工1401班', '软件工程', '信息工程学院', '0fbf4b078e6cce9c82faae8bd5f95ccc');
INSERT INTO `student` VALUES ('9', '142302009', '张新佳', '软工1401班', '软件工程', '信息工程学院', 'da219af21c7e240784c39e6375fe3fca');
INSERT INTO `student` VALUES ('10', '142302010', '杨明', '软工1401班', '软件工程', '信息工程学院', '0f723e3cb07dbc045ad411ac36bc041c');

-- ----------------------------
-- Table structure for student_nav
-- ----------------------------
DROP TABLE IF EXISTS `student_nav`;
CREATE TABLE `student_nav` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(40) NOT NULL DEFAULT '',
  `url` varchar(100) NOT NULL DEFAULT '',
  `state` varchar(20) NOT NULL DEFAULT '',
  `tid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student_nav
-- ----------------------------
INSERT INTO `student_nav` VALUES ('1', '个人中心', '', 'closed', '0');
INSERT INTO `student_nav` VALUES ('2', '基本信息', 'showInfo', 'open', '1');
INSERT INTO `student_nav` VALUES ('3', '考试分析', '', 'closed', '0');
INSERT INTO `student_nav` VALUES ('4', '考试查询', '', 'closed', '0');
INSERT INTO `student_nav` VALUES ('5', '考试信息', 'showExamination', 'open', '4');
INSERT INTO `student_nav` VALUES ('6', '成绩分析', 'fenxiScore', 'open', '3');
INSERT INTO `student_nav` VALUES ('7', '成绩单', 'reportCard', 'open', '3');

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `TEACHERID` int(11) NOT NULL AUTO_INCREMENT,
  `TEACHERNO` varchar(20) DEFAULT NULL,
  `TEACHERNAME` varchar(20) DEFAULT NULL,
  `PROFESSION3` varchar(20) DEFAULT NULL,
  `COLLEGE3` varchar(20) DEFAULT NULL,
  `PASSWORD` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`TEACHERID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('1', '2001', '艾静', '软件工程', '信息工程学院', 'd0fb963ff976f9c37fc81fe03c21ea7b');
INSERT INTO `teacher` VALUES ('2', '2002', '刘艳梅', '软件工程', '信息工程学院', '2002');
INSERT INTO `teacher` VALUES ('3', '2003', '赵君', '软件工程', '信息工程学院', '2003');
INSERT INTO `teacher` VALUES ('4', '2004', '熊伟', '软件工程', '信息工程学院', 'b8b4b727d6f5d1b61fff7be687f7970f');
INSERT INTO `teacher` VALUES ('5', '2005', '黄菲', '计算机科学与技术', '信息工程学院', 'd47268e9db2e9aa3827bba3afb7ff94a');

-- ----------------------------
-- Table structure for teachercourses
-- ----------------------------
DROP TABLE IF EXISTS `teachercourses`;
CREATE TABLE `teachercourses` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TEACHERID` int(11) DEFAULT NULL,
  `COURSESID` int(11) DEFAULT NULL,
  `SEMESTER` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FKf48ubmjsj616morfy3ddf55vo` (`TEACHERID`),
  KEY `FKmo0rxo5u72grapgkk1m1r2k14` (`COURSESID`),
  CONSTRAINT `FKf48ubmjsj616morfy3ddf55vo` FOREIGN KEY (`TEACHERID`) REFERENCES `teacher` (`TEACHERID`),
  CONSTRAINT `FKmo0rxo5u72grapgkk1m1r2k14` FOREIGN KEY (`COURSESID`) REFERENCES `courses` (`COURSESID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teachercourses
-- ----------------------------
INSERT INTO `teachercourses` VALUES ('1', '4', '1', '2018-05-01');
INSERT INTO `teachercourses` VALUES ('2', '2', '2', '2018-05-01');
INSERT INTO `teachercourses` VALUES ('3', '3', '3', '2018-05-01');
INSERT INTO `teachercourses` VALUES ('4', '1', '4', '2018-05-01');
INSERT INTO `teachercourses` VALUES ('5', '5', '5', '2018-05-01');

-- ----------------------------
-- Table structure for teacher_nav
-- ----------------------------
DROP TABLE IF EXISTS `teacher_nav`;
CREATE TABLE `teacher_nav` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(20) NOT NULL DEFAULT '',
  `url` varchar(40) NOT NULL DEFAULT '',
  `state` varchar(20) NOT NULL DEFAULT '',
  `tid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher_nav
-- ----------------------------
INSERT INTO `teacher_nav` VALUES ('1', '个人中心', '', 'closed', '0');
INSERT INTO `teacher_nav` VALUES ('2', '基本管理', '', 'closed', '0');
INSERT INTO `teacher_nav` VALUES ('3', '成绩处理', '', 'closed', '0');
INSERT INTO `teacher_nav` VALUES ('4', '基本信息', 'showInfo', 'open', '1');
INSERT INTO `teacher_nav` VALUES ('5', '试卷管理', 'showPaper', 'open', '2');
INSERT INTO `teacher_nav` VALUES ('6', '成绩分析', 'fenxiScore', 'open', '3');
INSERT INTO `teacher_nav` VALUES ('7', '课程表', 'tCourses', 'open', '2');
INSERT INTO `teacher_nav` VALUES ('8', '试题管理', 'showQuestionBank', 'open', '2');
INSERT INTO `teacher_nav` VALUES ('9', '导出成绩单', 'reportCard', 'open', '3');

-- ----------------------------
-- Table structure for t_sys_permission
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_permission`;
CREATE TABLE `t_sys_permission` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `permission_name` varchar(50) DEFAULT NULL COMMENT '权限名称',
  `permission_code` varchar(50) DEFAULT NULL,
  `description` text COMMENT '权限描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_sys_permission
-- ----------------------------
INSERT INTO `t_sys_permission` VALUES ('1', '修改', 'root:edit', '管理员修改');

-- ----------------------------
-- Table structure for t_sys_role
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_role`;
CREATE TABLE `t_sys_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) DEFAULT NULL COMMENT '角色名称',
  `description` text COMMENT '角色描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_sys_role
-- ----------------------------
INSERT INTO `t_sys_role` VALUES ('1', 'root', '系统管理员');
INSERT INTO `t_sys_role` VALUES ('2', 'admin', '管理员');
INSERT INTO `t_sys_role` VALUES ('3', 'teacher', '教师');
INSERT INTO `t_sys_role` VALUES ('4', 'student', '学生');

-- ----------------------------
-- Table structure for t_sys_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_role_permission`;
CREATE TABLE `t_sys_role_permission` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `permission_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_sys_role_permission
-- ----------------------------
INSERT INTO `t_sys_role_permission` VALUES ('1', '1', '1');

-- ----------------------------
-- Table structure for t_sys_user
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_user`;
CREATE TABLE `t_sys_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT NULL COMMENT '用户名',
  `password` varchar(50) DEFAULT NULL COMMENT '密码',
  `type` varchar(4) DEFAULT '0' COMMENT '类型 0 系统管理员 1 管理员 2 教师 3 学生',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_sys_user
-- ----------------------------
INSERT INTO `t_sys_user` VALUES ('1', '1001', '123', '0');
INSERT INTO `t_sys_user` VALUES ('2', '1002', '234', '0');
INSERT INTO `t_sys_user` VALUES ('3', '1003', '234', null);
INSERT INTO `t_sys_user` VALUES ('4', '18827636379', '123', null);

-- ----------------------------
-- Table structure for t_sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_user_role`;
CREATE TABLE `t_sys_user_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_sys_user_role
-- ----------------------------
INSERT INTO `t_sys_user_role` VALUES ('1', '1', '1');
INSERT INTO `t_sys_user_role` VALUES ('2', '2', '4');
INSERT INTO `t_sys_user_role` VALUES ('3', '3', '3');
INSERT INTO `t_sys_user_role` VALUES ('4', '4', '2');

-- ----------------------------
-- Table structure for warden
-- ----------------------------
DROP TABLE IF EXISTS `warden`;
CREATE TABLE `warden` (
  `WID` int(11) NOT NULL AUTO_INCREMENT,
  `WNO` varchar(40) DEFAULT NULL,
  `WNAME` varchar(20) DEFAULT NULL,
  `TEL` varchar(50) DEFAULT NULL,
  `WPASSWORD` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`WID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of warden
-- ----------------------------
INSERT INTO `warden` VALUES ('1', '1001', '小妹', '18827636379', '123');
INSERT INTO `warden` VALUES ('2', '1002', '熊伟', '123456', '123');
INSERT INTO `warden` VALUES ('3', '1003', '李四', '18827636377', '123');
INSERT INTO `warden` VALUES ('4', '1004', '123', '123456', '123');

-- ----------------------------
-- Table structure for warden_nav
-- ----------------------------
DROP TABLE IF EXISTS `warden_nav`;
CREATE TABLE `warden_nav` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(40) NOT NULL DEFAULT '',
  `url` varchar(100) NOT NULL DEFAULT '',
  `state` varchar(20) NOT NULL DEFAULT '',
  `tid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of warden_nav
-- ----------------------------
INSERT INTO `warden_nav` VALUES ('1', '用户管理', '', 'closed', '0');
INSERT INTO `warden_nav` VALUES ('2', '数据管理', '', 'closed', '0');
INSERT INTO `warden_nav` VALUES ('3', '管理员管理', '/admin/warden/mwarden', 'open', '1');
INSERT INTO `warden_nav` VALUES ('4', '学生管理', 'mstudent', 'open', '1');
INSERT INTO `warden_nav` VALUES ('5', '教师管理', 'mteacher', 'open', '1');
INSERT INTO `warden_nav` VALUES ('6', '课程管理', 'mcourses', 'open', '2');
INSERT INTO `warden_nav` VALUES ('7', '考试管理', 'mexamination', 'open', '2');
INSERT INTO `warden_nav` VALUES ('8', '成绩导入', 'mScore', 'open', '2');
INSERT INTO `warden_nav` VALUES ('9', '详细分数', 'mscoreDetails', 'open', '2');
INSERT INTO `warden_nav` VALUES ('10', '系统用户管理', '/admin/user/list', 'open', '11');
INSERT INTO `warden_nav` VALUES ('11', '系统管理', '', 'closed', '0');
