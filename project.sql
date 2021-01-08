-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 08, 2021 at 11:16 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `consultations`
--

CREATE TABLE `consultations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rdv` int(11) NOT NULL,
  `remarque` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `consultations`
--

INSERT INTO `consultations` (`id`, `rdv`, `remarque`, `created_at`, `updated_at`) VALUES
(1, 1, 'hevyf weifvuwev weiovbewv weivnwevnweov', '2021-01-08 16:05:22', '2021-01-08 16:05:22'),
(2, 6, 'ce patient a la maladie x', '2021-01-08 21:56:36', '2021-01-08 21:56:36');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sender` int(11) NOT NULL,
  `receiver` int(11) NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `name`, `file`, `sender`, `receiver`, `content`, `created_at`, `updated_at`, `type`) VALUES
(1, 'hamdaoui', NULL, 1, 1, 'sdklcnnksdnicsdcoispdc', '2021-01-08 15:20:42', '2021-01-08 15:20:42', 'pat-pres'),
(2, 'ojwocfqaw', NULL, 1, 1, 'qwpojfopqwjof', '2021-01-08 15:25:18', '2021-01-08 15:25:18', 'pres-pat'),
(3, 'test', NULL, 1, 1, 'cette message envoyer par la patient Wassim', '2021-01-08 20:09:58', '2021-01-08 20:09:58', 'pat-pres'),
(4, 'test', NULL, 5, 1, 'hello wassim', '2021-01-08 21:10:40', '2021-01-08 21:10:40', 'prestataire'),
(5, 'wass', NULL, 5, 1, 'hello wass', '2021-01-08 21:21:07', '2021-01-08 21:21:07', 'pres-pat'),
(6, 'test', NULL, 5, 5, 'awfdoniawbwnfias', '2021-01-08 21:22:08', '2021-01-08 21:22:08', 'pres-pres'),
(7, 'wass', NULL, 5, 1, 'sdvsdvsdvsdvsdv', '2021-01-08 21:27:32', '2021-01-08 21:27:32', 'pres-pat'),
(8, 'wefwef', NULL, 1, 3, 'wefewfwf', '2021-01-08 21:27:58', '2021-01-08 21:27:58', 'pat-pres'),
(9, 'RDV', NULL, 4, 8, 'Je veut un RDV chez vous', '2021-01-08 21:53:49', '2021-01-08 21:53:49', 'pat-pres'),
(10, 'RDV', NULL, 8, 4, 'ok mariem', '2021-01-08 22:04:12', '2021-01-08 22:04:12', 'pres-pat'),
(11, 'cc', NULL, 8, 3, 'cc', '2021-01-08 22:05:37', '2021-01-08 22:05:37', 'pres-pres');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(3, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(4, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(5, '2016_06_01_000004_create_oauth_clients_table', 1),
(6, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(7, '2019_08_19_000000_create_failed_jobs_table', 1),
(8, '2020_12_28_093917_create_r_d_v_s_table', 1),
(9, '2020_12_28_094504_create_messages_table', 1),
(10, '2020_12_28_094637_create_consultations_table', 1),
(11, '2020_12_28_095122_create_admins_table', 1),
(12, '2020_12_28_095234_create_prestataires_table', 1),
(13, '2020_12_28_095306_create_patients_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('09cbcdb7480a7617c29880ae87a982830b9e4fc189a71552070dc4b5ea2fca4a76130a0c52c7bd2a', 10, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:12:28', '2021-01-08 19:12:28', '2022-01-08 20:12:28'),
('0ca6f0626411de029f453455d6783dce0e37f393d668ce5f083990d6cf941d4a1ff937adb7cdcd99', 5, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 16:02:04', '2021-01-08 16:02:04', '2022-01-08 17:02:04'),
('1035de395de0f96cc36c4768451eba93dd10cfba82fcf5250fb07d392cd34de3a2d6a2c6c029d10b', 15, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:56:14', '2021-01-08 21:56:14', '2022-01-08 22:56:14'),
('1a1c713bcdfd9aa99bbd0830727a5ed78f24820593a642da57098372af024b6eedae7ebc2a0dbb05', 13, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:32:54', '2021-01-08 19:32:54', '2022-01-08 20:32:54'),
('1e338e6f9d936b9994855a40e7336a0c7cef24de950f3b4fc50c91bc9601b22f5be9bf62a82ae641', 4, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 15:56:14', '2021-01-08 15:56:14', '2022-01-08 16:56:14'),
('20625c1bc811159f9ed48c2c33d31ce70506f5c77e059ab7ecc36d19f1c4a24b1b197efb82f43043', 4, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:33:18', '2021-01-08 19:33:18', '2022-01-08 20:33:18'),
('21b92f2a275ea85af297510e925e8f6614043193408b8681b9819bfc8aa18b0ba27617502b4ccf1f', 4, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 15:11:29', '2021-01-08 15:11:29', '2022-01-08 16:11:29'),
('26e699e2e871548a695ca2e1dac803c7142a43825c5626eb22f7679b7a7431c35e9b43dab4fbb2e3', 14, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:47:48', '2021-01-08 21:47:48', '2022-01-08 22:47:48'),
('2cc9e69e0fe3ff7e67be136db05abb60f1754f71964b567903c83d1c48139fdaf99b80058755e195', 4, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 16:03:43', '2021-01-08 16:03:43', '2022-01-08 17:03:43'),
('3a1da151d67354af648cff83c3d9cbfa5e611d4b81461012c7b09798735354763a37d910ae80da66', 11, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:21:54', '2021-01-08 21:21:54', '2022-01-08 22:21:54'),
('3a71500badc4692931d5569b0a323d6066a5ac0848c07b8ad0629ca2a4fd55e05f0268ccc8fd9a6a', 15, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:51:44', '2021-01-08 21:51:44', '2022-01-08 22:51:44'),
('3f64caf8f7cc61b366bd1b6d1256b8a03b497103f0e9dcacca7b97e6c6d8eaed421efb4ecf48587e', 8, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:01:05', '2021-01-08 19:01:05', '2022-01-08 20:01:05'),
('40c89d63e424491535d6d0658025aa2fd9def4f3413cf0b81c770b931c97a97f48989fee14fdd2c0', 4, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:26:19', '2021-01-08 19:26:19', '2022-01-08 20:26:19'),
('47c6572516c643133a60e3fdb8a7e4bd6265b6200b4aa082f94b6b46ed332c4126cbd0dfed775338', 9, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 18:59:12', '2021-01-08 18:59:12', '2022-01-08 19:59:12'),
('47ff6881b63260eede86fdbb082fa187152698900ded2ba21b17e4e2c9a50b81846fd6c08efdbad8', 4, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:19:15', '2021-01-08 19:19:15', '2022-01-08 20:19:15'),
('502a804e4fd35b4d3206ef84951516b7f7437b703920dd30038832a9153b4c56c7e2c3dfd327ee72', 15, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 22:03:34', '2021-01-08 22:03:34', '2022-01-08 23:03:34'),
('57379fc58724976786c76899b74e0c69dabb3cb1faa63d14f7b728b2bd97f68011b7d58c56a79e4c', 11, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 20:47:44', '2021-01-08 20:47:44', '2022-01-08 21:47:44'),
('57f3504265106a82a6ddb4fdd612320d11ef487d889dd66e794561a72ecceeb287f5a3add55f68fe', 9, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:03:30', '2021-01-08 19:03:30', '2022-01-08 20:03:30'),
('5e77e2ede77f13f0e26deefa04d8a64f87181aa462d0836a03e8ca667968add4c2752f1e53fbd7bb', 3, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:07:17', '2021-01-08 19:07:17', '2022-01-08 20:07:17'),
('6c82eb0c2828314ef2b4f1e7abfab2e6498bccf842c621db8ce315b1f1c035168ccc873aee19982e', 3, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 16:04:35', '2021-01-08 16:04:35', '2022-01-08 17:04:35'),
('7243460c9ca72adc42872a7e2116551d88309816d41de6edcad629d47fb2279458629705cb9ff841', 14, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:52:56', '2021-01-08 21:52:56', '2022-01-08 22:52:56'),
('7b90725a7d5471237670b4184312c442f428a32490d8faeb9f78af750b38ad253c1785c8bb92ed46', 14, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 22:04:21', '2021-01-08 22:04:21', '2022-01-08 23:04:21'),
('9818a857f3e79a72c802851b7028a0d4eb2f6c952b8d20ed96a452d7905bbc9d98b2c26f6551038c', 8, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:08:05', '2021-01-08 19:08:05', '2022-01-08 20:08:05'),
('982836ed8542710f7b39ef453b71143ba0fb58fd95a13c17cb066c44c14838f33dd74b6a635f43c6', 5, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 22:07:06', '2021-01-08 22:07:06', '2022-01-08 23:07:06'),
('9d56fbfc012d14357950240f62e96c590bf17485337a63f4c29b12bc205397148722d7cd698a8e13', 11, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:17:57', '2021-01-08 19:17:57', '2022-01-08 20:17:57'),
('9e465dd057eb12398f2b41d49860bb8eae45d4729e596a91d866297b3a6af07f36bf665aa31159af', 9, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 22:06:02', '2021-01-08 22:06:02', '2022-01-08 23:06:02'),
('a250bd373ac4d9b1ed30f603d59f04182167c8a578a4fb8fc406631238f003a199575c15b0206b2d', 5, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:29:41', '2021-01-08 21:29:41', '2022-01-08 22:29:41'),
('a5996bb65165ab388ad98840535440ba516343cfbc9baf995e50b669cc524a0faac591f97881b85c', 4, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:27:44', '2021-01-08 21:27:44', '2022-01-08 22:27:44'),
('ae0a6791bd268003f9fc99a714b27d9bac32c8efb921857ab931055c274f5e25733b3461e4d07777', 15, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:54:15', '2021-01-08 21:54:15', '2022-01-08 22:54:15'),
('af1ee8f7f1105813cfd8d7648da8a430cd3b719055ac49be272f402b763341c0eda7c9b216ca70cb', 11, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:20:50', '2021-01-08 21:20:50', '2022-01-08 22:20:50'),
('b2b7fb565150867b13732d616dd00265e442c122d7039709549fcb6a45631fcb1abb5bcfe3f4df79', 15, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:58:29', '2021-01-08 21:58:29', '2022-01-08 22:58:29'),
('b4965c4d0c2cea780e8123971e5f86b8011f9ca784868936ad569eaf7789b5ee0a20ae75d69d5f49', 4, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:16:31', '2021-01-08 19:16:31', '2022-01-08 20:16:31'),
('bd7af5844e7184d1ec0f60b9c955728b8c203436b6e32dd98671adce8d204c05c0da253928691074', 4, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 15:44:36', '2021-01-08 15:44:36', '2022-01-08 16:44:36'),
('c1d6f96103bbf754c84c119c44aba3da713ca1bd3dfa85e47bab452da8ad0bce714030e379d87aac', 4, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:30:01', '2021-01-08 19:30:01', '2022-01-08 20:30:01'),
('c60d5cf210c4ce0684d677bce6a61b9452817a7af06e89f70158b33ea1400b51498256059e2a1d87', 4, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:10:56', '2021-01-08 21:10:56', '2022-01-08 22:10:56'),
('c77c6c5ee9c4ff5bde40139bfc7af36e7b5c7a59f9acc742abfa37014c1eba7c2d88c7c6830878a8', 4, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:21:32', '2021-01-08 21:21:32', '2022-01-08 22:21:32'),
('cc49f54c6d011e88c816aff0f2b1e1f97d453757d7a7fb06f9ea3a5003b50b2ee507afe3aa8a8ee7', 12, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 19:28:29', '2021-01-08 19:28:29', '2022-01-08 20:28:29'),
('d3ef27e4a65f8026fb24daf9601ae64074592d0a20d4f1272eafda13d90bdb80859f0cffb3184138', 3, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 14:46:51', '2021-01-08 14:46:51', '2022-01-08 15:46:51'),
('d46ad26755f38b23b50d3392df8f10f482964741fd296c2e24d3e7e056895452f119caaff67b4947', 5, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 15:51:55', '2021-01-08 15:51:55', '2022-01-08 16:51:55'),
('e015fb223a2026b707660312be03bdd53340fa325887d45d04dc3ee8d7c73b618de7d5bd25f11a55', 14, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 21:55:37', '2021-01-08 21:55:37', '2022-01-08 22:55:37'),
('edd1377f1cead1178836b7645f722fe931399653c5253801c7e842a6bf62380867885e37474e2cd6', 15, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 22:04:49', '2021-01-08 22:04:49', '2022-01-08 23:04:49'),
('fe59632fa3e738eda0336dcd9c1d1bbedf2b6ba63167cae05b0cf8f4640222028a86c3712c020219', 8, '92708bba-4841-4416-9165-938e3dd09026', 'Personal Acces Token', '[]', 0, '2021-01-08 18:57:37', '2021-01-08 18:57:37', '2022-01-08 19:57:37');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
('92708bba-4841-4416-9165-938e3dd09026', NULL, 'Laravel Personal Access Client', 'YThRecUw06C53p6YlC5PNHZXGFIkBHJCrDXtDoPL', NULL, 'http://localhost', 1, 0, 0, '2021-01-08 14:46:22', '2021-01-08 14:46:22'),
('92708bba-ce1a-45e3-adec-d2a5efb02784', NULL, 'Laravel Password Grant Client', 'ACcmY5cAGUld232Y4HjLGedv8HLRViToCDjnWFdM', 'users', 'http://localhost', 0, 1, 0, '2021-01-08 14:46:22', '2021-01-08 14:46:22');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, '92708bba-4841-4416-9165-938e3dd09026', '2021-01-08 14:46:22', '2021-01-08 14:46:22');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `patient` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `nom`, `prenom`, `telephone`, `patient`, `image`, `created_at`, `updated_at`) VALUES
(1, 'wassim', 'hamdaoui', '112233', 4, '5ff8bf8535394.png', '2021-01-08 15:11:21', '2021-01-08 19:25:16'),
(2, 'Ahmed', 'Ghali', '98234567', 6, NULL, '2021-01-08 18:28:33', '2021-01-08 18:28:33'),
(3, 'Oussama', 'ben ali', '94231089', 7, NULL, '2021-01-08 18:29:17', '2021-01-08 18:29:17'),
(4, 'Mariem', 'ben khaled', '90445673', 14, '5ff8e16c88a00.png', '2021-01-08 21:47:29', '2021-01-08 21:49:16');

-- --------------------------------------------------------

--
-- Table structure for table `prestataires`
--

CREATE TABLE `prestataires` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nomcomplet` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gouvernourat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lang` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prestataire` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `adresse` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prestataires`
--

INSERT INTO `prestataires` (`id`, `nomcomplet`, `description`, `telephone`, `gouvernourat`, `type`, `image`, `lang`, `lat`, `prestataire`, `created_at`, `updated_at`, `adresse`) VALUES
(1, 'Elaafak', 'description medecin 1', '73012356', 'monastir', 'hopital', '5ff8bb9193285.png', NULL, NULL, 3, '2021-01-08 14:44:15', '2021-01-08 19:07:45', 'Elomrane'),
(2, 'Pharmacie Elomrane', 'description pharmacie elomrane', '74109456', 'monastir', 'pharmacie', '5ff8bbb53b807.png', NULL, NULL, 8, '2021-01-08 18:47:05', '2021-01-08 19:08:21', 'Elomrane'),
(3, 'Elmanahel 2', 'description elmanahel', '70897652', 'mahdia', 'hopital', '5ff8b99d67078.jpg', NULL, NULL, 9, '2021-01-08 18:49:49', '2021-01-08 22:06:45', 'Monastir centre ville'),
(4, 'Pharmacie Stah Jaber', 'Pharmacie Stah Jaber', '71009332', 'monastir', 'pharmacie', '5ff8bcb803fea.jpg', NULL, NULL, 10, '2021-01-08 19:10:37', '2021-01-08 19:12:40', 'Stah Jaber'),
(5, 'Pharmacie Akouda', 'Pharmacie Akouda', '70987623', 'sousse', 'pharmacie', '5ff8be33a7d9f.jpg', NULL, NULL, 11, '2021-01-08 19:16:17', '2021-01-08 19:18:59', 'Akouda'),
(6, 'Slimen Abyeth', 'Slimen Abyeth', '45342099', 'mahdia', 'ophtalmologue', '5ff8c0adee370.png', NULL, NULL, 12, '2021-01-08 19:28:22', '2021-01-08 19:29:33', 'Bou mardess'),
(7, 'Amira Ben salem', 'Amira Ben salem', '23009237', 'sfax', 'gynecologue', '5ff8c17fe2a91.jpg', NULL, NULL, 13, '2021-01-08 19:32:43', '2021-01-08 19:33:03', 'Gremda'),
(8, 'Hopital ABC', 'Hopital RAJ', '36555122', 'sfax', 'hopital', '5ff8e21c52a6f.png', NULL, NULL, 15, '2021-01-08 21:51:25', '2021-01-08 21:52:12', 'Gremda');

-- --------------------------------------------------------

--
-- Table structure for table `rdvs`
--

CREATE TABLE `rdvs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `patient` int(11) NOT NULL,
  `prestataire` int(11) NOT NULL,
  `etat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `debut` time DEFAULT NULL,
  `fin` time DEFAULT NULL,
  `date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rdvs`
--

INSERT INTO `rdvs` (`id`, `patient`, `prestataire`, `etat`, `debut`, `fin`, `date`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Traiter', '18:04:00', '19:05:00', '2021-01-08', '2021-01-08 15:40:18', '2021-01-08 16:05:22'),
(6, 4, 8, 'Traiter', '10:54:00', '12:54:00', '2021-01-09', '2021-01-08 21:53:15', '2021-01-08 21:56:36');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(3, '', 'medecin1@gmail.com', NULL, '$2y$10$2cGEyZGgipqt06Aayhudzue30ZkeK2kQYn2TKJKX24eHHneBbaNEC', 'prestataire', NULL, '2021-01-08 14:44:14', '2021-01-08 14:44:14'),
(4, '', 'hamdaouiwassim@gmail.com', NULL, '$2y$10$.r17gU7z4ezZhL3ktKsl0e7aNAgBT.Y5GbtzROse/BoYhCxDZn4Xe', 'patient', NULL, '2021-01-08 15:11:21', '2021-01-08 15:11:21'),
(5, 'admin', 'admin@gmail.com', NULL, '$2y$10$.r17gU7z4ezZhL3ktKsl0e7aNAgBT.Y5GbtzROse/BoYhCxDZn4Xe', 'admin', NULL, NULL, NULL),
(6, '', 'ahmedghali@gmail.com', NULL, '$2y$10$rDOR0Mt8utQEIhl9ZyxwLus6BqAhlXt5dMkY4/Kw7WkX.TMqRWJzG', 'patient', NULL, '2021-01-08 18:28:33', '2021-01-08 18:28:33'),
(7, '', 'oussamabenali@gmail.com', NULL, '$2y$10$SPcKi1yoLshr7K1J7a/sWu51z3gFd.JqvIfaG.sthwJjA3ylPitOW', 'patient', NULL, '2021-01-08 18:29:17', '2021-01-08 18:29:17'),
(8, '', 'pharmacieelomrane@gmail.com', NULL, '$2y$10$I15TH8VaRAsiJzJ9yVd5WudCczVdSkX1XNYZtV0IGpdHlxC4C7Z4i', 'prestataire', NULL, '2021-01-08 18:47:05', '2021-01-08 18:47:05'),
(9, '', 'Elmanahel@gmail.com', NULL, '$2y$12$/rVj59UshSZL6Qins/S6MOHbk6x4CKlfVvjF9b/.Bf/eQhx7j0oFe', 'prestataire', NULL, '2021-01-08 18:49:49', '2021-01-08 18:49:49'),
(10, '', 'pharmaciestahjaber@gmail.com', NULL, '$2y$10$ajOoPjOrjKneco3JROR0N.HKo7eK1ERl3hNZI0Fid5DvPDu7MN0jy', 'prestataire', NULL, '2021-01-08 19:10:37', '2021-01-08 19:10:37'),
(11, '', 'pharmacieakouda@gmail.com', NULL, '$2y$10$nYbKYIUi54CdLN6Z9RUyfuTxUAnJ6vJ6HYGJPysIBCCXySkVun6sG', 'prestataire', NULL, '2021-01-08 19:16:17', '2021-01-08 19:16:17'),
(12, '', 'slimenabyeth@gmail.com', NULL, '$2y$10$NjzqMZPAl1HUotST/Vh5guDI6p2J8w.djeRV6leG8DLHFPEpSUeMi', 'prestataire', NULL, '2021-01-08 19:28:22', '2021-01-08 19:28:22'),
(13, '', 'amirabensalem@gmail.com', NULL, '$2y$10$slbDaa9w0XpdYaaPmjUt6uJNlMRmtuJMJ3828GLapCYM1yIN4vmNe', 'prestataire', NULL, '2021-01-08 19:32:43', '2021-01-08 19:32:43'),
(14, '', 'mariemben@gmail.com', NULL, '$2y$10$G9E9f/IM.wgs0kOcoHBlUeFIJevMIFOCVtfv0IqaJfNO22NNs/lYa', 'patient', NULL, '2021-01-08 21:47:29', '2021-01-08 21:47:29'),
(15, '', 'raj@gmail.com', NULL, '$2y$10$QKU.uZrhzK7n.jLR.WHQYuaztRVLDL1N8lBGrlpad7HJujodCrsS6', 'prestataire', NULL, '2021-01-08 21:51:25', '2021-01-08 21:51:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `consultations`
--
ALTER TABLE `consultations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prestataires`
--
ALTER TABLE `prestataires`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rdvs`
--
ALTER TABLE `rdvs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `consultations`
--
ALTER TABLE `consultations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `prestataires`
--
ALTER TABLE `prestataires`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `rdvs`
--
ALTER TABLE `rdvs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
