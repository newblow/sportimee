<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class PaiementController extends AbstractController
{
    #[Route('/paiement', name: 'app_paiement')]
    public function index(SerializerInterface $serializer): Response
    {
        return $this->render('paiement/index.html.twig', [
            'controller_name' => 'PaiementController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }
}
