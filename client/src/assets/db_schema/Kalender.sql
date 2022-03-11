-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: sv09.net-housting.de
-- Erstellungszeit: 22. Feb 2022 um 23:10
-- Server-Version: 5.7.37-0ubuntu0.18.04.1
-- PHP-Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `Kalender`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `event`
--

CREATE TABLE `event` (
  `id` bigint(20) NOT NULL,
  `title` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `category` enum('Abteilungsversammlung','Arbeitsdienst','Training','Turnier','Veranstaltung') COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(1024) COLLATE utf8_unicode_ci DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `start_time` timestamp NULL DEFAULT NULL,
  `end_time` timestamp NULL DEFAULT NULL,
  `is_full_day_event` tinyint(1) NOT NULL,
  `is_recurring` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Eventbeschreibung';

--
-- Daten für Tabelle `event`
--

INSERT INTO `event` (`id`, `title`, `description`, `category`, `url`, `start_date`, `end_date`, `start_time`, `end_time`, `is_full_day_event`, `is_recurring`) VALUES
(1, 'Training, Dienstags (Winter 21/22)', 'Training am Dienstag in der Halle (Winter 21/22)', 'Training', NULL, '2021-10-05', '2021-10-05', '2021-10-05 16:00:00', '2021-10-05 18:00:00', 0, 1),
(2, 'Training, Donnerstags (Winter 21/22)', 'Training am Donnerstag in der Halle (Winter 21/22)', 'Training', NULL, '2021-10-07', '2021-10-07', '2021-10-07 16:00:00', '2021-10-07 18:00:00', 0, 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `event_instance_exception`
--

CREATE TABLE `event_instance_exception` (
  `id` bigint(20) NOT NULL,
  `event_id` bigint(20) NOT NULL,
  `is_rescheduled` tinyint(1) NOT NULL,
  `is_cancelled` tinyint(1) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `start_time` timestamp NULL DEFAULT NULL,
  `end_time` timestamp NULL DEFAULT NULL,
  `is_full_day_event` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `event_recurrence`
--

CREATE TABLE `event_recurrence` (
  `event_id` bigint(20) NOT NULL,
  `recurrence_type_id` bigint(20) NOT NULL,
  `separation_count` int(3) DEFAULT NULL,
  `max_num_of_occurences` int(3) DEFAULT NULL,
  `day_of_week` int(1) DEFAULT NULL,
  `week_of_month` int(1) DEFAULT NULL,
  `day_of_month` int(2) DEFAULT NULL,
  `month_of_year` int(2) DEFAULT NULL,
  `end_of_recurrence` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='handles the reccurrences of an event';

--
-- Daten für Tabelle `event_recurrence`
--

INSERT INTO `event_recurrence` (`event_id`, `recurrence_type_id`, `separation_count`, `max_num_of_occurences`, `day_of_week`, `week_of_month`, `day_of_month`, `month_of_year`, `end_of_recurrence`) VALUES
(1, 2, NULL, NULL, 2, NULL, NULL, NULL, '2022-03-29'),
(2, 2, NULL, NULL, 4, NULL, NULL, NULL, '2022-03-31');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `recurrence_type`
--

CREATE TABLE `recurrence_type` (
  `id` bigint(20) NOT NULL,
  `recurring_type` enum('Daily','Weekly','Monthly','Yearly') COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `recurrence_type`
--

INSERT INTO `recurrence_type` (`id`, `recurring_type`) VALUES
(1, 'Daily'),
(2, 'Weekly'),
(3, 'Monthly'),
(4, 'Yearly');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `username` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='User for creating events';

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`) VALUES
(1, 'admin', '4ll3_1ns_G0ld', 'kontakt@bogensport-dortmund.de');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `event_instance_exception`
--
ALTER TABLE `event_instance_exception`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_id` (`event_id`) USING BTREE;

--
-- Indizes für die Tabelle `event_recurrence`
--
ALTER TABLE `event_recurrence`
  ADD PRIMARY KEY (`event_id`),
  ADD KEY `event_id` (`event_id`),
  ADD KEY `recurrence_type_id` (`recurrence_type_id`);

--
-- Indizes für die Tabelle `recurrence_type`
--
ALTER TABLE `recurrence_type`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `event`
--
ALTER TABLE `event`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `event_instance_exception`
--
ALTER TABLE `event_instance_exception`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `recurrence_type`
--
ALTER TABLE `recurrence_type`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `event_instance_exception`
--
ALTER TABLE `event_instance_exception`
  ADD CONSTRAINT `event_instance_exception_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`);

--
-- Constraints der Tabelle `event_recurrence`
--
ALTER TABLE `event_recurrence`
  ADD CONSTRAINT `event_recurrence_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`),
  ADD CONSTRAINT `event_recurrence_ibfk_2` FOREIGN KEY (`recurrence_type_id`) REFERENCES `recurrence_type` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
