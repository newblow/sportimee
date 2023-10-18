<?php

namespace App\Repository;

use App\Entity\CoursesReservations;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CoursesReservations>
 *
 * @method CoursesReservations|null find($id, $lockMode = null, $lockVersion = null)
 * @method CoursesReservations|null findOneBy(array $criteria, array $orderBy = null)
 * @method CoursesReservations[]    findAll()
 * @method CoursesReservations[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CoursesReservationsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CoursesReservations::class);
    }

//    /**
//     * @return CoursesReservations[] Returns an array of CoursesReservations objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CoursesReservations
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
