-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Giu 11, 2015 alle 18:47
-- Versione del server: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bigym`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `award`
--

CREATE TABLE IF NOT EXISTS `award` (
  `id` varchar(5) NOT NULL,
  `thumbnail` varchar(100) NOT NULL DEFAULT '/images/award.jpg',
  `title` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `award`
--

INSERT INTO `award` (`id`, `thumbnail`, `title`) VALUES
('A0001', '/images/award.jpg', 'Health Trainer of the Year 2012'),
('A0002', '/images/award.jpg', 'Combat Zone Trainer of the Year 2013'),
('A0003', '/images/award.jpg', 'Yoga Master  Fitness  of  2014'),
('A0004', '/images/award.jpg', 'Best Fitness Trainer UK 2015');

-- --------------------------------------------------------

--
-- Struttura della tabella `course`
--

CREATE TABLE IF NOT EXISTS `course` (
  `id` varchar(5) NOT NULL,
  `title` varchar(20) NOT NULL,
  `target` varchar(20) NOT NULL,
  `level` enum('everyone','base','intermediate','high') NOT NULL,
  `description` varchar(1000) NOT NULL,
  `heldIn` varchar(5) NOT NULL,
  `coursePic` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `course`
--

INSERT INTO `course` (`id`, `title`, `target`, `level`, `description`, `heldIn`, `coursePic`) VALUES
('C0001', 'BOXE', 'MEN-WOMEN  AGE 16+', 'high', '<p>Boxing is a combat sport in which two people engage in a contest of strength, speed, reflexes, endurance, and will, by throwing punches at each other, usually with gloved hands. Historically, the goals have been to weaken and knock down the opponent.<br>\r\nAt Big GYM you can feel like an Olympian boxing in the ring with our USA Boxing Rocco Rambo coach,  or you can take part in the various amateur and pro competitions in the area and abroad.  Coach Rocco has vas experience in training both beginners and athletes the art of Boxing.  Rocco also knows what it takes to condition for a boxing match.  He uses his vast knowledge of athlete training and brings it to his cardio bag class for all ages and all levels!  You’ll train like a pro and NEVER have to hit by anyone!!</p>', 'R0001', '/images/boxe.jpg'),
('C0002', 'Kick-Boxing', 'Men-Women age 16+', 'intermediate', '<p>One of the fastest growing fighting styles in the UK, Muay Thai is two thousand years of combat history distilled into the ‘science of eight limbs’, in which the fighter employs fists, shins, knees and elbows, plus a form of stand-up grappling known as clinch work. Its power and simplicity mean it’s widely regarded as the world’s most effective martial art and it has exploded globally in recent years, winning fans both as a breath-taking ring sport and a vital component of mixed martial arts.</p>', 'R0001', '/images/kick-boxing.jpg'),
('C0003', 'Zumba', 'everyone', 'everyone', '<p>Are you ready to party yourself into shape?  Forget the workout, just lose yourself in the music and find yourself in shape at the original Zumba dance-fitness party.\r\nZumba classes feature exotic rhythms set to high-energy Latin and international beats, transitioning the workout to target every major muscle group in the body.  Before you know it, you’ll be getting fit and your energy levels will be soaring!</p>', 'R0001', '/images/zumba.jpg'),
('C0004', 'Power Yoga', 'everyone', 'intermediate', '<p>Power yoga is a vigorous, fitness-based approach to yoga. Power yoga doesn’t follow a set series of poses unlike other yoga styles. With its emphasis on strength and flexibility, power yoga is a great introduction to the practice for those who want more of a physical challenge than meditative approach.It will torch your calories, tone, strengthen and rinse your body, clear your mind and leave you with a sense of accomplishment and empowerment. The dynamic mix of sweat and spirit that is cultivated in a Power Yoga class will challenge you to step up to your edge, and unlock your hidden potential for achieving authentic personal power and living an extraordinary life.</p>\r\n\r\n<p>Be prepared to SHINE!</p>\r\n', 'R0001', '/images/poweryoga.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `coursecategory`
--

CREATE TABLE IF NOT EXISTS `coursecategory` (
  `id` varchar(5) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `thumbnail` varchar(100) NOT NULL,
  `Description` varchar(300) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `coursecategory`
--

INSERT INTO `coursecategory` (`id`, `nome`, `thumbnail`, `Description`) VALUES
('CC001', 'Aerobic', '/images/LOGO_AEROBICA.png', '<p>Yoga means "to yoke," or "to conjoin." This holistic practice is deeply rooted in ancient Indian culture that unites the mind, body and spirit through movement, breathing techniques and meditation. </p>'),
('CC002', 'Martial Arts', '/images/logo_MARTIAL ARTS.png', '<p>Here the list of all course of Martial  Arts ,you can choose from boxe to karate,asian oeuropean fight style.\nYou think that it''s impossible that there are so many courses only for Martial Arts?\nDON''T WORRY: each teacher has an official authorization to teach the course and in some case also an'),
('CC003', 'Water Based', '/images/logo_WATER BASED.png', '<p>It''s known that the union of physical exercise with the water is something that it''s for everyone,child will grow up with strongher body,mid-age people can improve their cardio and breathe and also injured people can heal with rehabilitation swim.So let''s start and join our courses.</p>'),
('CC004', 'Yoga', '/images/YOGA.png', '<p>Yoga means "to yoke," or "to conjoin." This holistic practice is deeply rooted in ancient Indian culture that unites the mind, body and spirit through movement, breathing techniques and meditation.Don''t be lazy and start,choose your course.</p>');

-- --------------------------------------------------------

--
-- Struttura della tabella `coursecategory_course`
--

CREATE TABLE IF NOT EXISTS `coursecategory_course` (
  `courseCategory` varchar(5) NOT NULL,
  `course` varchar(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `coursecategory_course`
--

INSERT INTO `coursecategory_course` (`courseCategory`, `course`) VALUES
('CC001', 'C0003'),
('CC002', 'C0001'),
('CC002', 'C0002'),
('CC003', 'C0001'),
('CC004', 'C0004');

-- --------------------------------------------------------

--
-- Struttura della tabella `form_field`
--

CREATE TABLE IF NOT EXISTS `form_field` (
  `form` varchar(5) NOT NULL,
  `field` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `form_field`
--

INSERT INTO `form_field` (`form`, `field`) VALUES
('F0001', 'First Name'),
('F0001', 'Last Name'),
('F0001', 'Email'),
('F0001', 'Telephone'),
('F0001', 'Mobile Telephone'),
('F0001', 'Note');

-- --------------------------------------------------------

--
-- Struttura della tabella `id_image`
--

CREATE TABLE IF NOT EXISTS `id_image` (
  `id` varchar(5) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `id_image`
--

INSERT INTO `id_image` (`id`, `image`) VALUES
('I0001', '/images/mariomacho1.jpg'),
('I0001', '/images/mariomacho2.jpg'),
('I0001', '/images/mariomacho3.jpg'),
('I0003', '/images/valerialift1.jpg'),
('I0002', '/images/roccorambo3.jpg'),
('I0002', '/images/roccorambo2.jpg'),
('I0002', '/images/roccorambo1.jpg'),
('I0003', '/images/valerialift2.jpg'),
('I0003', '/images/valerialift3.jpg'),
('I0004', '/images/lellastrong1.jpg'),
('I0004', '/images/lellastrong2.jpg'),
('I0004', '/images/lellastrong3.jpg'),
('C0001', '/images/boxe1.jpg'),
('C0001', '/images/boxe2.jpg'),
('C0001', '/images/boxe3.jpg'),
('C0001', '/images/boxe4.jpg'),
('C0002', '/images/kickboxing1.jpg'),
('C0002', '/images/kickboxing2.jpg'),
('C0002', '/images/kickboxing3.jpg'),
('C0002', '/images/kickboxing4.jpg'),
('C0003', '/images/zumba1.jpg'),
('C0003', '/images/zumba2.jpg'),
('C0003', '/images/zumba3.jpg'),
('C0003', '/images/zumba4.jpg'),
('C0004', '/images/poweryoga1.jpg'),
('C0004', '/images/poweryoga2.jpg'),
('C0004', '/images/poweryoga3.jpg'),
('C0004', '/images/poweryoga4.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `instructor`
--

CREATE TABLE IF NOT EXISTS `instructor` (
  `id` varchar(5) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `shortBio` varchar(1000) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `professionalQualification` varchar(1000) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `profilePic` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `miniText` varchar(300) NOT NULL,
  `FBid` varchar(20) NOT NULL,
  `TWid` varchar(20) NOT NULL,
  `TWname` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `instructor`
--

INSERT INTO `instructor` (`id`, `name`, `shortBio`, `professionalQualification`, `profilePic`, `miniText`, `FBid`, `TWid`, `TWname`) VALUES
('I0001', 'Mario Macho', '<p>Short Bio</p>\r\n<p>I studied at New Zealand Institute of Sport in Wellington in 2012-2013 and was a member at Les Mills Extreme.  My first thought was "wow it''s colourful - wish I could work here!".  A few of my mates became Gym Instructors and told me how awesome it was, which made me want to do the same.  My strength is people skills, which makes me the instructor I am today.</p>', '<p>Professional Qualifications</p><ul><li>Level 4 Certificate in Weight Management for Individuals with Obesity and Diabete.</li>\r\n<li>Graduate at New Zealand Institute of Sport in Wellington in 2008-2009.</li>\r\n<li>PFS GYM INSTRUCTOR® Diploma.</li></ul>', '/images/mariomachothumb.jpg', 'Master of Combat and Health + Olympic champion', 'MarioMachoMachoke', '', ''),
('I0002', 'Rocco Rambo', '<p>Short Bio</p>\r\n<p>I studied at New Zealand Institute of Sport in Wellington in 2012-2013 and was a member at Les Mills Extreme.  My first thought was "wow it''s colourful - wish I could work here!".  A few of my mates became Gym Instructors and told me how awesome it was, which made me want to do the same.  My strength is people skills, which makes me the instructor I am today.</p>', '\r\n<p>Professional Qualifications</p><ul><li>Level 4 Certificate in Weight Management for Individuals with Obesity and Diabete.</li>', '/images/roccorambothumb.jpg', 'Master of Weightlifting', '', '609022582898196481', 'RoccoRombo'),
('I0003', 'Valeria Lift', '<p>Short Bio</p>\r\n<p>I studied at New Zealand Institute of Sport in Wellington in 2012-2013 and was a member at Les Mills Extreme.  My first thought was "wow it''s colourful - wish I could work here!".  A few of my mates became Gym Instructors and told me how awesome it was, which made me want to do the same.  My strength is people skills, which makes me the instructor I am today.</p>', '<p>Professional Qualifications</p><ul><li>Level 4 Certificate in Weight Management for Individuals with Obesity and Diabete.</li>\r\n<li>Graduate at New Zealand Institute of Sport in Wellington in 2008-2009.</li>\r\n<li>PFS GYM INSTRUCTOR® Diploma.</li></ul>', '/images/valerialiftthumb.jpg', 'Master of  Body Building', '', '', ''),
('I0004', 'Lella Strong', '<p>Short Bio</p>\r\n<p>I studied at New Zealand Institute of Sport in Wellington in 2012-2013 and was a member at Les Mills Extreme.  My first thought was "wow it''s colourful - wish I could work here!".  A few of my mates became Gym Instructors and told me how awesome it was, which made me want to do the same.  My strength is people skills, which makes me the instructor I am today.</p>', '<p>Professional Qualifications</p><ul><li>Level 4 Certificate in Weight Management for Individuals with Obesity and Diabete.</li>\r\n<li>Graduate at New Zealand Institute of Sport in Wellington in 2008-2009.</li>\r\n<li>PFS GYM INSTRUCTOR® Diploma.</li></ul>', '/images/lellastrongthumb.jpg', 'Master of Fitness', '', '', '');

-- --------------------------------------------------------

--
-- Struttura della tabella `instructor_award`
--

CREATE TABLE IF NOT EXISTS `instructor_award` (
  `instructor` varchar(5) NOT NULL,
  `award` varchar(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `instructor_award`
--

INSERT INTO `instructor_award` (`instructor`, `award`) VALUES
('I0001', 'A0001'),
('I0001', 'A0002'),
('I0003', 'A0004'),
('I0004', 'A0004');

-- --------------------------------------------------------

--
-- Struttura della tabella `instructor_course`
--

CREATE TABLE IF NOT EXISTS `instructor_course` (
  `instructor` varchar(5) NOT NULL,
  `course` varchar(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `instructor_course`
--

INSERT INTO `instructor_course` (`instructor`, `course`) VALUES
('I0001', 'C0001'),
('I0001', 'C0002'),
('I0002', 'C0002'),
('I0003', 'C0003'),
('I0004', 'C0004');

-- --------------------------------------------------------

--
-- Struttura della tabella `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `id` varchar(5) NOT NULL,
  `whereweare` varchar(1000) NOT NULL,
  `howtogethere` varchar(1000) NOT NULL,
  `map` varchar(50) NOT NULL,
  `conctactUs` varchar(1000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `location`
--

INSERT INTO `location` (`id`, `whereweare`, `howtogethere`, `map`, `conctactUs`) VALUES
('L0001', '<p>You can find us at the following address:</p></br>\r\n\r\n<p>Big GYM</p></br>\r\n<p>Via Pacini 49</p></br>\r\n<p>20133 -MILAN (MI)</p></br>\r\n', '<p>On foot</p></br>\r\n<p>We are locatiod just few steps away PIOLA MM2 metro station. You can reach us walking few meters by the metro station.<p></br>\r\n<p>By car</p></br>\r\n<p>You can drive the circonvallazione and go to via Pacini from Piola square.</p>\r\n\r\n', '45.4833425,9.2321726', '<p>Contact us</p>\r\n<p>Please, move you weak arms and call us to make them strong</br>\r\nTelephone: +619  333666999</br>\r\nEmail: getbig@biggym.com</br>\r\nSkype: Enlarge.your.shoulders</p>');

-- --------------------------------------------------------

--
-- Struttura della tabella `paragraph`
--

CREATE TABLE IF NOT EXISTS `paragraph` (
  `id` varchar(5) NOT NULL,
  `content` varchar(1000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `paragraph`
--

INSERT INTO `paragraph` (`id`, `content`) VALUES
('P0001', '<p>All instructors</p>\r\n<p>Health and fitness is increasingly in the public eye and many people are becoming keen to take command of their own fitness. Our Gym instructors facilitate this process by providing expert advice on what to expect, how to exercise and monitor diet, and can also provide that crucial element of motivation which people may find difficult on their own.So let''s know them.</p>'),
('P0002', '<p>All Courses by NAME</p>\n<p>Here the list of all our Corses.We offer everything you need .So let''s start and join our classes</p>'),
('P0003', '<p>All Courses by LEVEL</p>\n<p>Here the list of all our Corses.We offer everything you need divided by LEVEL,from Courses for everyone to courses to VERY BIG PEOPLE.So let''s start and join our classes</p>'),
('P0004', '<p>Course Categories</p>\r\n<p>Here you can see a list of our course categories.</p>');

-- --------------------------------------------------------

--
-- Struttura della tabella `schedule`
--

CREATE TABLE IF NOT EXISTS `schedule` (
  `course` varchar(5) NOT NULL,
  `DoW` varchar(10) NOT NULL,
  `init` varchar(5) NOT NULL,
  `end` varchar(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `schedule`
--

INSERT INTO `schedule` (`course`, `DoW`, `init`, `end`) VALUES
('C0001', 'Monday', '11:00', '13:00'),
('C0001', 'Tuesday', '15:00', '17:00'),
('C0001', 'Friday', '12:00', '14:00'),
('C0001', 'Saturday', '9:00', '10:30'),
('C0002', 'Tuesday', '10:00', '12:00'),
('C0002', 'Wednesday', '13:00', '15:00'),
('C0002', 'Saturday', '17:00', '19:00'),
('C0003', 'Tuesday', '12:00', '14:00'),
('C0003', 'Wednesday', '13:00', '17:00'),
('C0003', 'Friday', '19:00', '21:00'),
('C0004', 'Monday', '9:00', '11:00'),
('C0004', 'Thursday', '14:00', '16:00'),
('C0004', 'Friday', '17:00', '19:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coursecategory`
--
ALTER TABLE `coursecategory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coursecategory_course`
--
ALTER TABLE `coursecategory_course`
  ADD PRIMARY KEY (`courseCategory`,`course`);

--
-- Indexes for table `instructor`
--
ALTER TABLE `instructor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `instructor_course`
--
ALTER TABLE `instructor_course`
  ADD PRIMARY KEY (`instructor`,`course`);

--
-- Indexes for table `paragraph`
--
ALTER TABLE `paragraph`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
