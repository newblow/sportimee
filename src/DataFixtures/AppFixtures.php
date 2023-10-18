<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // create 20 products! Bam!
        for ($i = 0; $i < 3; $i++) {
            $user = new User();
            $user->setEmail("test@test.fr");
            $user->set();
            $user->set();
            $user->set();
            $user->set();
            $user->set();
            $user->set();
            $user->set();
            $user->set();
            
            $manager->persist($abonnement);
        }

        $manager->flush();
    }
}
