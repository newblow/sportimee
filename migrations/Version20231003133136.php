<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231003133136 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE courses (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, category LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', subscription VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user CHANGE old old INT NOT NULL, CHANGE zip zip INT NOT NULL, CHANGE address address VARCHAR(255) NOT NULL, CHANGE number number INT NOT NULL, CHANGE subscription subscription VARCHAR(255) NOT NULL, CHANGE photo photo VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE courses');
        $this->addSql('ALTER TABLE user CHANGE old old INT DEFAULT NULL, CHANGE zip zip INT DEFAULT NULL, CHANGE address address VARCHAR(255) DEFAULT NULL, CHANGE number number INT DEFAULT NULL, CHANGE subscription subscription VARCHAR(255) DEFAULT NULL, CHANGE photo photo VARCHAR(255) DEFAULT NULL');
    }
}
