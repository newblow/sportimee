<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private $userPasswordHasher;

    public function __construct(UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->userPasswordHasher = $userPasswordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        $user_relax = new User();
        $user_relax->setEmail("user-relax@sportime.fr");
        $user_relax->setPassword($this->userPasswordHasher->hashPassword($user_relax, "user-relax@sportime.fr"));
        $user_relax->setSubscription("relax");
        $user_relax->setRoles(["ROLE_USER"]);
        $manager->persist($user_relax);

        $user = new User();
        $user->setEmail("user-sportif@sportime.fr");
        $user->setPassword($this->userPasswordHasher->hashPassword($user, "user-sportif@sportime.fr"));
        $user->setSubscription("sportif");
        $user->setRoles(["ROLE_USER"]);
        $manager->persist($user);

        $userAdmin = new User();
        $userAdmin->setEmail("admin@sportime.fr");
        $userAdmin->setPassword($this->userPasswordHasher->hashPassword($userAdmin, "admin@sportime.fr"));
        $userAdmin->setRoles(["ROLE_ADMIN"]);
        $userAdmin->setSubscription("expert");
        $manager->persist($userAdmin);

        // create 20 products! Bam!
        // for ($i = 0; $i < 3; $i++) {
        //     $user = new User();
        //     $user->setEmail("test@test.fr");
        //     $user->set();
        //     $user->set();
        //     $user->set();
        //     $user->set();
        //     $user->set();
        //     $user->set();
        //     $user->set();
        //     $user->set();
            
        //     $manager->persist($abonnement);
        // }

        $manager->flush();
    }
}
