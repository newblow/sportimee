<?php

namespace App\Repository;

use App\Entity\Sportime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Sportime>
 *
 * @method Sportime|null find($id, $lockMode = null, $lockVersion = null)
 * @method Sportime|null findOneBy(array $criteria, array $orderBy = null)
 * @method Sportime[]    findAll()
 * @method Sportime[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SportimeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Sportime::class);
    }

//    /**
//     * @return Sportime[] Returns an array of Sportime objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Sportime
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
