import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Javeria',
      email: 'javeria@iba.com',
      password: bcrypt.hashSync('projectproject', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'javeria uroor',
      email: 'javeria@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Harry Potter',
      genre: 'fiction',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 1,
      author: 'JK rowling',
      rating: 4.5,
      numReviews: 10,
      description: 'good book',
    }
  ],
};
export default data;
