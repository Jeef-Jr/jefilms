-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.24-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para jefilmes
CREATE DATABASE IF NOT EXISTS `jefilmes` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `jefilmes`;

-- Copiando estrutura para tabela jefilmes.movie
CREATE TABLE IF NOT EXISTS `movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `catalogo` int(11) DEFAULT NULL,
  `genero` int(11) DEFAULT NULL,
  `idMovie` varchar(50) DEFAULT NULL,
  `url` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela jefilmes.movie: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` (`id`, `title`, `catalogo`, `genero`, `idMovie`, `url`) VALUES
	(8, 'A proposta', 1, 1, 'tt1041829', 'https://cdn.discordapp.com/attachments/854780017917165609/998831581412216932/A_proposta.jpg'),
	(9, 'Ainda Estou Aqui', 1, 2, 'tt8851148', 'https://cdn.discordapp.com/attachments/854780017917165609/998848667689689159/eu_ainda_estou_aqui.jpg'),
	(10, 'Coração de Tinta', 1, 5, 'tt0494238', 'https://cdn.discordapp.com/attachments/854780017917165609/998946682437914694/coracao_de_tinta.jpg'),
	(11, 'Verão de 84', 1, 4, 'tt5774450', 'https://cdn.discordapp.com/attachments/854780017917165609/998948839480377464/verao_84.jpg'),
	(12, 'Planeta do Tesouro', 1, 5, 'tt0133240', 'https://cdn.discordapp.com/attachments/854780017917165609/998949394667819048/planeta_do_tesouro.jpg'),
	(13, 'Vikings', 2, 6, 'tt2306299', 'https://cdn.discordapp.com/attachments/854780017917165609/998955383118909570/vikings.jpg'),
	(14, 'Vikings Valhalla', 2, 6, 'tt11311302', 'https://cdn.discordapp.com/attachments/854780017917165609/998956132573913139/vikings-valhalla.jpg'),
	(15, '	Meu Malvado Favorito', 1, 5, 'tt1323594', 'https://cdn.discordapp.com/attachments/854780017917165609/998960491906994216/malvado_favorito_1.jpg'),
	(16, 'Meu Malvado Favorito 2', 1, 5, 'tt1690953', 'https://cdn.discordapp.com/attachments/854780017917165609/998960492125106216/malvado_favorito_2.jpg'),
	(17, 'Meu Malvado Favorito 3', 1, 5, 'tt3469046', 'https://cdn.discordapp.com/attachments/854780017917165609/998960492326428672/malvado_favorito_3.jpg'),
	(18, 'Harry Potter e a Pedra Filosofal', 1, 5, 'tt0241527', 'https://cdn.discordapp.com/attachments/854780017917165609/998964498335543356/harry-potter-e-a-pedra-filosofal.jpg'),
	(19, 'Harry Potter e a Câmara Secreta', 1, 5, 'tt0295297', 'https://cdn.discordapp.com/attachments/854780017917165609/998964515586723932/harry-potter-e-a-camara-secreta.jpg'),
	(20, 'Harry Potter e o Prisioneiro de Azkaban', 1, 5, 'tt0304141', 'https://cdn.discordapp.com/attachments/854780017917165609/998964553851338762/harry-potter-prisioneiro-azkaban.jpg'),
	(21, 'Harry Potter e o Cálice de Fogo', 1, 5, 'tt0330373', 'https://cdn.discordapp.com/attachments/854780017917165609/998964581147881583/harry-potter-e-o-calice-de-fogo.jpg'),
	(22, 'Harry Potter e a Ordem da Fênix', 1, 5, 'tt0373889', 'https://cdn.discordapp.com/attachments/854780017917165609/998964603818102784/harry-potter-ordem-fenix.jpg'),
	(23, 'Harry Potter e o Enigma do Príncipe', 1, 5, 'tt0417741', 'https://cdn.discordapp.com/attachments/854780017917165609/998964629277524038/harry-potter-e-o-enigma-do-principe.jpg'),
	(24, 'Harry Potter e as Relíquias da Morte - Parte 1', 1, 5, 'tt0926084', 'https://cdn.discordapp.com/attachments/854780017917165609/998964651406671943/Harry_Potter_Deathly_Hallows_1.jpg'),
	(25, 'Harry Potter e as Relíquias da Morte - Parte 2', 1, 5, 'tt1201607', 'https://cdn.discordapp.com/attachments/854780017917165609/998964679256846446/Harry_Potter_Deathly_Hallows_2.jpg'),
	(26, 'Comemoração de 20 anos de Harry Potter: De Volta a', 1, 5, 'tt16116174', 'https://cdn.discordapp.com/attachments/854780017917165609/998964701880918156/harry-potter-20th-anniversary-return-to-hogwarts.jpg'),
	(27, 'Suits - Homens de Terno', 2, 8, 'tt1632701', 'https://cdn.discordapp.com/attachments/854780017917165609/998970144917303388/homens_de_terno.jpg'),
	(28, '	Diários de um Vampiro', 2, 8, 'tt1405406', 'https://cdn.discordapp.com/attachments/854780017917165609/998971424381337640/the-vampire-diaries.jpg'),
	(29, '	Os Originais', 2, 8, 'tt2632424', 'https://cdn.discordapp.com/attachments/854780017917165609/998971953882861589/the_originals.jpg'),
	(30, 'Legacies', 2, 8, 'tt8103070', 'https://cdn.discordapp.com/attachments/854780017917165609/998972921609461770/legacies.jpg'),
	(31, '	Stranger Things', 2, 5, 'tt4574334', 'https://cdn.discordapp.com/attachments/854780017917165609/998973833195294770/stranger-things.jpg'),
	(32, 'Oito Mulheres e um Segredo', 1, 6, 'tt5164214', 'https://cdn.discordapp.com/attachments/854780017917165609/998978656573603981/oito_mulhers_e_um_segredo.jpg'),
	(33, 'You', 2, 8, 'tt7335184', 'https://cdn.discordapp.com/attachments/854780017917165609/998980930419048590/you.jpg'),
	(34, 'The Rain', 2, 7, 'tt6656238', 'https://cdn.discordapp.com/attachments/854780017917165609/998981976751083520/The_Rain.png');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
