-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2026 at 07:24 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vighnaharta_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_project`
--

CREATE TABLE `about_project` (
  `id` int(11) NOT NULL DEFAULT 1,
  `title` varchar(255) DEFAULT 'About Project',
  `description` longtext DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_project`
--

INSERT INTO `about_project` (`id`, `title`, `description`, `updated_at`) VALUES
(1, 'About Project', 'At Vighnaharta Enclave, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, the architecture places people at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, protection, and belonging.\n\n\"The moment I entered the house, it felt welcomed\" — this feeling defines the privilege Vighnaharta Enclave offers. Thoughtfully designed with crafted amenities and timeless choices, the space resonates with the warmth and authenticity that you and your family truly deserve. It\'s the place your soul has long been searching for.', '2026-02-26 04:42:29');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `amenities`
--

CREATE TABLE `amenities` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `display_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `amenities`
--

INSERT INTO `amenities` (`id`, `title`, `display_order`) VALUES
(1, 'Gymnasium', 1),
(2, 'Kids Play Area', 2),
(3, 'Jogging Track', 3),
(4, 'Yoga Deck', 4),
(5, 'Zumba', 5),
(6, 'Dance', 6);

-- --------------------------------------------------------

--
-- Table structure for table `construction_updates`
--

CREATE TABLE `construction_updates` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `status` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `display_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `construction_updates`
--

INSERT INTO `construction_updates` (`id`, `title`, `status`, `description`, `display_order`) VALUES
(1, 'Tower A - Structure Completed', 'Completed', 'Ready for finishing', 1);

-- --------------------------------------------------------

--
-- Table structure for table `developer_info`
--

CREATE TABLE `developer_info` (
  `id` int(11) NOT NULL DEFAULT 1,
  `title` varchar(255) DEFAULT 'About Developer',
  `description` longtext DEFAULT NULL,
  `projects` varchar(50) DEFAULT '6',
  `built_area` varchar(50) DEFAULT '1.32 LAC',
  `ongoing` varchar(50) DEFAULT '4.69+',
  `upcoming` varchar(50) DEFAULT '3.77LAC',
  `total` varchar(50) DEFAULT '2.71LAC',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `developer_info`
--

INSERT INTO `developer_info` (`id`, `title`, `description`, `projects`, `built_area`, `ongoing`, `upcoming`, `total`, `updated_at`) VALUES
(1, 'About Developer', NULL, '6', '1.32 LAC', '4.69+', '3.77LAC', '2.71LAC', '2026-02-25 12:54:03');

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `display_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `question`, `answer`, `display_order`) VALUES
(1, 'What makes Vighnaharta Infinity a trusted developer?', 'Over 6 successful projects and 1.32 Lac sq.ft built area.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `floor_plans`
--

CREATE TABLE `floor_plans` (
  `id` int(11) NOT NULL,
  `plan_type` varchar(50) NOT NULL,
  `area` varchar(100) DEFAULT NULL,
  `price_info` varchar(100) DEFAULT NULL,
  `display_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `floor_plans`
--

INSERT INTO `floor_plans` (`id`, `plan_type`, `area`, `price_info`, `display_order`) VALUES
(1, '1 BHK', '380-411 RCA Sq ft', 'Click for price', 1),
(2, '2 BHK', '580-620 Sq ft', 'Click for price', 2),
(3, '3 BHK', '450-800', '45 CR', 1);

-- --------------------------------------------------------

--
-- Table structure for table `hero_content`
--

CREATE TABLE `hero_content` (
  `id` int(11) NOT NULL DEFAULT 1,
  `project_name` varchar(255) DEFAULT 'VIGHNAHARTA INFINITY',
  `main_heading` varchar(500) DEFAULT 'THINKING OF A FANTASTIC VICINITY?',
  `tagline` varchar(500) DEFAULT '20+ PREMIUM LUXURIOUS AMENITIES SPACIOUS BALCONY HOMES',
  `one_bhk_title` varchar(100) DEFAULT 'SMART 1 BHK',
  `one_bhk_price` varchar(100) DEFAULT '₹ 74.99 Lacs*',
  `two_bhk_title` varchar(100) DEFAULT 'PREMIUM 2 BHK',
  `two_bhk_price` varchar(100) DEFAULT '₹ 96.99 Lacs*',
  `location` varchar(300) DEFAULT 'R.S. NO. 223/214 CIRCLE KANNAMWAR NAGAR U, VIRBHOL (EAST)',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hero_content`
--

INSERT INTO `hero_content` (`id`, `project_name`, `main_heading`, `tagline`, `one_bhk_title`, `one_bhk_price`, `two_bhk_title`, `two_bhk_price`, `location`, `updated_at`) VALUES
(1, 'VIGHNAHARTA INFINITY', 'THINKING OF A FANTASTIC VICINITY?', '20+ PODIUM LUXURIOUS AMENITIES | SPACIOUS BALCONY HOMES', 'SMART 1 BHK', '96.99laks', 'PREMIUM 2 BHK', '12 CR', 'BLDG NO. 223/224, CIRCLE - KANNAMWAR NAGAR I, VIKHROLI (EAST)', '2026-02-26 05:49:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_project`
--
ALTER TABLE `about_project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `amenities`
--
ALTER TABLE `amenities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `construction_updates`
--
ALTER TABLE `construction_updates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `developer_info`
--
ALTER TABLE `developer_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `floor_plans`
--
ALTER TABLE `floor_plans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hero_content`
--
ALTER TABLE `hero_content`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `amenities`
--
ALTER TABLE `amenities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `construction_updates`
--
ALTER TABLE `construction_updates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `floor_plans`
--
ALTER TABLE `floor_plans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
