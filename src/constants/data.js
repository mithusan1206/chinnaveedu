import images from './images';

const lesentrée = [
  {
    title: 'Samoussa Végetarien',
    price: '1.50€',
    tags: 'Chausson de legume variés',
  },
  {
    title: 'Rolls',
    price: '1.50€',
    tags: 'Viande et pommes de terre',
  },
  {
    title: 'Raïta',
    price: '4.00€',
    tags: 'Concombres et tomates dans un yaourt frais',
  },
  {
    title: 'Oignon Badji',
    price: '5.50€',
    tags: 'Beignets doignons à la farine de pois chiches',
  },
  {
    title: 'Aubergine Badji ',
    price: '5.50€',
    tags: 'Beignets daubergine à la farine de pois chiches',
  },
  {
    title: 'Crevettes Badji',
    price: '6.50€',
    tags: 'Beignets de crevettes à la farine de pois chiches',
  },
  {
    title: 'Poulet Badji',
    price: '6.50€',
    tags: 'Beignets de poulet à la farine de pois chiches',
  },
];

const lesentréeTandoori = [
  {
    title: 'Poulet Tandoori',
    price: '6.50€',
    tags: 'Cuisses de poulet marinées, grillées épices aromatisées',
  },
  {
    title: "Poisson Tandoori",
    price: '7.50€',
    tags: 'Saumon mariné, grillé aux épices',
  },
  {
    title: 'Poulet Tikka',
    price: '7.50€',
    tags: 'Morceaux de poulet marinées, grillées épices.',
  },
  {
    title: 'Agneau Tikka',
    price: '8.50€',
    tags: 'Morceaux d agneau marinées, grillées aux epices aromatisées.',
  },
  {
    title: 'Chilli Chicken',
    price: '10.90€',
    tags: 'Morceaux de poulet grillées façan indien, épicé',
  },
  {
    title: 'Gambas Tandoori',
    price: '13.90€',
    tags: 'Gambas marinées, grillées aux épices aromatisées',
  },{
    title: 'Mixte Grill CHINNA VEEDU',
    price: '19.90€',
    tags: 'Poulet Tikka, Agneau Tikka, Poulet Tandoori, Gambas Tandoori',
  },
];


const lesdevil = [
  {
    title: 'Poulet',
    price: '11.90€',
  },
  {
    title: "Agneau",
    price: '12.90€',
  },
  {
    title: 'Bœuf',
    price: '12.90€',
  },
  {
    title: 'Poisson',
    price: '12.90€',
  },
  {
    title: 'Crevettes',
    price: '12.90€',
  },
  {
    title: 'Mixte',
    price: '15.90€',
  },
  {
    title: 'Panneer',
    price: '11.90€',
  },

];

const LES_PAINS_INDIENS = [
  {
    title: 'Paratta',
    price: '1.50€',
  },
  {
    title: 'Oeuf Paratta',
    price: '4.00€',
  },
  {
    title: 'Nan Nature',
    price: '3.00€',
    tags: 'Pâte à pain levée cuit dans le tandoor',
  },
  {
    title: 'Nan Fromage',
    price: '3.50€',
    tags: 'Pâte à pain levée fourree au fromage, cuit dans le tandoor',
  },
  {
    title: 'Nan Garlic',
    price: '3.50€',
    tags: 'Pâte à pain levée cuit dans le tandoor',
  }

];

const SOUPE = [
  {
    title: 'Légume',
    price: '5.50€',
  },
   {
    title: 'Poulet',
    price: '6.50 €',
  },
];

const RIZ_PARFUMES = [
  {
    title: 'Riz Basmati',
    price: '2.50€',
  },
   {
    title: 'Riz Safron',
    price: '4.50€',
  },
];
const BRIYANI = [
  {
    title: 'Legumés',
    price: '2.50€',
    imgUrl: images.briyani,
  },
   {
    title: 'Poulet',
    price: '4.50€',
    imgUrl: images.briyani,
  },
{
    title: 'Agneau',
    price: '2.50€',
    imgUrl: images.briyani,
  },

  {
    title: 'Bœuf',
    price: '2.50€',
    imgUrl: images.briyani,
  },

  {
    title: 'Crevettes',
    price: '2.50€',
    imgUrl: images.briyani,
  },

    {
    title: 'Gambas',
    price: '2.50€',
    imgUrl: images.briyani,
  },
    {
    title: 'Mixte',
    price: '2.50€',
    imgUrl: images.briyani,
  },
    {
    title: 'Bamboo Briyani (au choix)',
    price: '2.50€',
    tags: 'Legume, Poulet, Baœuf, Agneau,Crevettes, Gambas, Mixte',
    imgUrl: images.briyani,
  },
    {
    title: 'Crevettes',
    price: '2.50€',
    imgUrl: images.briyani,
  },
];
const FRIED_RICE = [
  {
    title: 'Poulet',
    price: '2.50€',
    imgUrl: images.friedRice,
  },
   {
    title: 'Agneau',
    price: '4.50€',
    imgUrl: images.friedRice,
  },
  {
    title: 'Bœuf',
    price: '4.50€',
    imgUrl: images.friedRice,
  },
  {
    title: 'Crevettes',
    price: '4.50€',
    imgUrl: images.friedRice,
  },
  {
    title: 'Mixte',
    price: '4.50€',
    imgUrl: images.friedRice,
  },
  {
    title: 'Légume',
    price: '4.50€',
    imgUrl: images.friedRice,
  },
];

const NOUILLES = [
  {
    title: 'Poulet',
    price: '2.50€',
    imgUrl: images.nouille,
  },
   {
    title: 'Agneau',
    price: '4.50€',
    imgUrl: images.nouille,
  },
  {
    title: 'Bœuf',
    price: '4.50€',
    imgUrl: images.nouille,
  },
  {
    title: 'Crevettes',
    price: '4.50€',
    imgUrl: images.nouille,
  },
  {
    title: 'Mixte',
    price: '4.50€',
    imgUrl: images.nouille,
  },
  {
    title: 'Légume',
    price: '4.50€',
    imgUrl: images.nouille,
  },
];

const PLATS_TRADITIONNEL_SRILANKAISE = [
  {
    title: 'Thali',
    price: '2.50€',
  },
   {
    title: 'Poulet',
    price: '4.50€',
  },
  {
    title: 'Bœuf',
    price: '4.50€',
  },
  {
    title: 'Agneau',
    price: '4.50€',
  },
  {
    title: 'Crevettes',
    price: '4.50€',
  },
  {
    title: 'Poisson',
    price: '4.50€',
  },
];

const KOTHU = [
  {
    title: 'Légume',
    price: '2.50€',
  },
   {
    title: 'Poulet',
    price: '4.50€',
  },
  {
    title: 'Bœuf',
    price: '4.50€',
  },
  {
    title: 'Agneau',
    price: '4.50€',
  },
  {
    title: 'Crevettes',
    price: '4.50€',
  },
  {
    title: 'Mixte',
    price: '4.50€',
  },
];

const KILLI_PARATTA = [
  {
    title: 'Legumé',
    price: '2.50€',
  },
   {
    title: 'Poulet',
    price: '4.50€',
  },
  {
    title: 'Agneau',
    price: '4.50€',
  },
  {
    title: 'Bœuf',
    price: '4.50€',
  },
  {
    title: 'Crevettes',
    price: '4.50€',
  },
  {
    title: 'Gambas',
    price: '4.50€',
  },
  {
    title: 'Mixte',
    price: '4.50€',
  },
];

const DOSA = [
  {
    title: 'Plain dosa',
    price: '2.50€',
    imgUrl: images.dosa,
  },
   {
    title: 'Ghee dosa',
    price: '4.50€',
    imgUrl: images.dosa,
  },
  {
    title: 'Onion dosa',
    price: '4.50€',
    imgUrl: images.dosa,
  },
  {
    title: 'Masala Dosa',
    price: '4.50€',
    imgUrl: images.dosa,
  },
  {
    title: 'Keema dosa',
    price: '4.50€',
    imgUrl: images.dosa,
  },
  {
    title: 'Kothukari dosa',
    price: '4.50€',
    imgUrl: images.dosa,
  },
];

const MASALA = [
  {
    title: 'Masala Legumé',
    price: '2.50€',
  },
   {
    title: 'Masala Poulet',
    price: '4.50€',
  },
  {
    title: 'Masala Agneau',
    price: '4.50€',
  },
  {
    title: 'Masala Bœuf',
    price: '4.50€',
  },
  {
    title: 'Riz Safron',
    price: '4.50€',
  },
  {
    title: 'Masala Calamar',
    price: '4.50€',
  },
  {
    title: 'Masala Crevettes',
    price: '4.50€',
  },
   {
    title: 'Masala Gambas',
    price: '4.50€',
  },

];

const TIKKA_MASALA = [
  {
    title: 'Poulet Tikka Masala',
    price: '2.50€',
  },
   {
    title: 'Poisson Tikka Masala',
    price: '4.50€',
  },
  {
    title: 'Agneau Tikka Masala',
    price: '4.50€',
  },
  {
    title: 'Bœuf Tikka Masala',
    price: '4.50€',
  },
  {
    title: 'Gambas Tikka Masala',
    price: '4.50€',
  },
];

const KORMA = [
  {
    title: 'Legumé',
    price: '2.50€',
  },
   {
    title: 'Poulet',
    price: '4.50€',
  },
  {
    title: 'Agneau',
    price: '4.50€',
  },
  {
    title: 'Bœuf',
    price: '4.50€',
  },
  {
    title: 'Calamarn',
    price: '4.50€',
  },
  {
    title: 'Crevettes',
    price: '4.50€',
  },
  {
    title: 'Gambas',
    price: '4.50€',
  },
];

const VINDALOO = [
  {
    title: 'Legumé',
    price: '2.50€',
  },
   {
    title: 'Poulet',
    price: '4.50€',
  },
  {
    title: 'Agneau',
    price: '4.50€',
  },
  {
    title: 'Bœuf',
    price: '4.50€',
  },
  {
    title: 'Calamar',
    price: '4.50€',
  },
  {
    title: 'Crevettes',
    price: '4.50€',
  },
   {
    title: 'Gambas',
    price: '4.50€',
  },
];

const MADRAS = [
  {
    title: 'Legumé',
    price: '2.50€',
  },
   {
    title: 'Poulet',
    price: '4.50€',
  },
  {
    title: 'Agneau',
    price: '4.50€',
  },
  {
    title: 'Bœuf',
    price: '4.50€',
  },
  {
    title: 'Calamar',
    price: '4.50€',
  },
  {
    title: 'Crevettes',
    price: '13.90€',
  },
  {
    title: 'Gambas',
    price: '15.90 €',
  },
];

const KURY = [
{
    title: 'Legumé',
    price: '10.90 €',
  },
  {
    title: 'Poulet',
    price: '11.90 €',
  },
  {
    title: 'Agneau',
    price: '12.90 €',
  },
  {
    title: 'Bœuf',
    price: '12.90 €',
  },
  {
    title: 'Calamar',
    price: '13.90 €',
  },
  {
    title: 'Crevettes',
    price: '13.90 €',
  },
  {
    title: 'Gambas',
    price: '15.90 €',
  },
  {
    title: '',
    price: '',
  },
];
const VIANDE_AUX_ÉPINARDS = [
 {
    title: 'Legumé',
    price: '',
  },
  {
    title: 'Poulet',
    price: '',
  },
  {
    title: 'Agneau',
    price: '',
  },
  {
    title: 'Bœuf',
    price: '',
  },
  {
    title: 'Calamar',
    price: '',
  },
  {
    title: 'Crevettes',
    price: '',
  },
  {
    title: 'Gambas',
    price: '',
  },
  {
    title: 'Poisson',
    price: '',
  },
];
const PLATS_VÉGÉTARIENS = [
{
    title: 'Channa Masala',
    price: '9.90 €',
  },
  {
    title: 'Palak Paneer',
    price: '9.90 €',
  },
  {
    title: 'Dal Makhani',
    price: '9.90 €',
  },
  {
    title: 'Curry Légume',
    price: '9.90 €',
  },
  {
    title: 'ButterTikka Masala',
    price: '10.90 €',
  },
  {
    title: 'Panner Tikka Masala',
    price: '10.90 €',
  },
];
const SPECIAL = [
 {
    title: 'SAVAL SAAPAADU',
    price: '35.00 €',
  },
  {
    title: 'SAVAL SAAPAADU',
    price: '55.00 €',
  },
  {
    title: 'SAVAL SAAPAADU',
    price: '90.00 €',
  },
  {
    title: 'Mappillai Virunthu',
    price: '80.00 €',
  },
  {
    title: 'COMBAT',
    price: '27.50 €',
  },
  {
    title: 'COMBAT',
    price: '50.00 €',
  },
  {
    title: 'Mungil Biriyani',
    price: '18.90 €',
  },
  {
    title: 'Meen Polichadhu',
    price: '14.90 €',
  }, 
  {
    title: 'Kaithi Biriyani',
    price: '80.00 €',
  },
  {
    title: 'Paratta Burger',
    price: '12.90 €',
  },
];
const COCKTAILS = [
{
    title: 'JUS DE FRUIT FRAIS PRESSÉ (1 fruit au choix)',
    price: '5.90 €',
    tags: 'Pomme, orange, carrot, cucumber, ananas, ginger',
  },
  {
    title: 'JUS DE FRUIT FRAIS PRESSÉ (Mul� fruit deux choix)',
    price: '6.90 €',
    tags: 'Pomme, orange, carrot, cucumber, ananas, ginger',
  },
  {
    title: 'VIRGIN APPLE MOJITO',
    price: '5.90 €',
    tags: 'Pomme, orange, carrot, cucumber, ananas, ginger',
  },
  {
    title: 'VIRGIN MOJITO',
    price: '5.90 €',
    tags: '(Classic, Mangue, Passion, Fraise) Citron Vert, Menthe Fraiche,Cassonade, Limonade',
  },
  {
    title: 'BORA BORA',
    price: '5.90 €',
    tags:'Jus de Mangue, Jus d Ananas, Jus de Citron, Sirop de Grenadine' ,
  },
  {
    title: 'VIRGIN PINA COLADA',
    price: '5.90 €',
    tags:'Crème de Coco, Jus d Ananas',
  },
  {
    title: 'VIRGIN BLACK MOJITO',
    price: '6.90 €',
    tags:'Coca Cola, Citron Vert, Menthe Fraiche',
  },  
];

const CLASSIQUES_ALCOOL = [
{
    title: 'MOJITOS AU CHOIX',
    price: '8.90 €',
    tags: '(Classique, Fraise, Framboise, Passion, Black Mojito',
  },
  {
    title: 'PINA COLADA',
    price: '8.90 €',
    tags: 'Rhum Blanc, Rhum Brun, Crème de Coco, Jus d Ananas',
  },
  {
    title: 'SEX ON THE CHINNA VEEDU',
    price: '8.90 €',
    tags: 'Vodka, Liqueur de Pêche, Jus d Orange, Jus de Cranberry',
  },
  {
    title: 'SPRITZ',
    price: '8.90 €',
    tags: 'Aperol, Prosecco, Orange(Tranche)',
  },
  {
    title: 'COSMOPOLITAN',
    price: '8.90 €',
    tags: 'Vodka, Cointreau, Jus de Citron, Jus de Cranberry',
  },
];
  
const COCKTAILS_MAISON = [
{
    title: 'CHINNA VEEDU SPECIAL',
    price: '8.90 €',
    tags: 'Rhum Blanc, Rhum Brun, Crème de Coco, Jus d Ananas',
  },
];

const awards = [
  {
    imgUrl: images.award05,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default {lesentrée, lesentréeTandoori, awards, lesdevil, LES_PAINS_INDIENS, SOUPE, RIZ_PARFUMES, BRIYANI, FRIED_RICE, NOUILLES, PLATS_TRADITIONNEL_SRILANKAISE, KOTHU, KILLI_PARATTA, DOSA, MASALA, TIKKA_MASALA, KORMA, VINDALOO, MADRAS, KURY, VIANDE_AUX_ÉPINARDS, PLATS_VÉGÉTARIENS, SPECIAL, COCKTAILS, CLASSIQUES_ALCOOL, COCKTAILS_MAISON, wines: lesentrée, cocktails: COCKTAILS};
