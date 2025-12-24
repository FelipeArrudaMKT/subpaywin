
import React from 'react';
import { ShieldCheck, Zap, Layout, Trophy } from 'lucide-react';
import { Benefit, Step } from './types';

export const AFFILIATE_LINK = 'https://subwaysurfsoriginal.com/?ref=6F8D27B86E';

export const BENEFITS: Benefit[] = [
  {
    title: 'Plataforma Confiável',
    description: 'Segurança total em todas as suas operações.',
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
  },
  {
    title: 'Acesso Rápido',
    description: 'Comece a jogar em menos de 1 minuto.',
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: 'Interface Simples',
    description: 'Design intuitivo para qualquer nível de jogador.',
    icon: <Layout className="w-8 h-8 text-green-500" />,
  },
  {
    title: 'Jogos Populares',
    description: 'Os melhores mercados e odds do momento.',
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
  },
];

export const STEPS: Step[] = [
  { number: 1, text: 'Clique no botão abaixo' },
  { number: 2, text: 'Cadastre-se na plataforma' },
  { number: 3, text: 'Comece a lucrar agora' },
];

export const NOTIFICATION_NAMES = [
  'Carlos Almeida',
  'Rafael Santos',
  'Lucas Pereira',
  'Bruno Costa',
  'Felipe Rocha',
  'André Oliveira',
  'Gustavo Lima',
  'Tiago Souza',
  'Marcos Vinícius',
  'Ricardo Silva'
];

export const NOTIFICATION_VARIANTS = [
  'está jogando agora pelo SubPay Win',
  'entrou no jogo agora',
  'Usuário ativo na plataforma agora',
  'Jogando neste momento',
  'Atividade recente registrada'
];
