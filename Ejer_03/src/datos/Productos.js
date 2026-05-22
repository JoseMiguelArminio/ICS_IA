export const productos = [
  {
    id: 1,
    nombre: 'Smartwatch Pro X',
    vendedor: { nombre: 'ElectroHub', rating: 4.8 },
    imagenes: [
      'https://picsum.photos/200/200?random=1',
      'https://picsum.photos/200/200?random=2',
    ],
    enStock: true,
    precio: { moneda: '€', valor: 215.50, enOferta: true },
    caracteristicas: ['GPS integrado', 'Monitor de ritmo cardíaco', 'Resistente al agua (5 ATM)']
  },
  {
    id: 2,
    nombre: 'Auriculares Inalámbricos',
    vendedor: { nombre: 'SoundPlus', rating: 4.5 },
    imagenes: [
      'https://picsum.photos/200/200?random=3'
    ],
    enStock: false,
    precio: { moneda: '€', valor: 99.90, enOferta: false },
    caracteristicas: ['Cancelación de ruido', 'Batería 20h', 'Compatible Bluetooth 5.0']
  }
];
s