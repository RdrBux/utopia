const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    firstname: 'Juan',
    lastname: 'Pérez',
    img_url:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    email: 'juan@perez.com',
    password: '123456',
    bio: 'Hola soy Juan',
    date_of_birth: new Date('1990-01-01').toISOString(),
    created_at: new Date('2023-01-01').toISOString(),
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442b',
    firstname: 'Diego',
    lastname: 'Gómez',
    img_url:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    email: 'diego@gomez.com',
    password: '123456',
    bio: '',
    date_of_birth: new Date('1980-01-01').toISOString(),
    created_at: new Date('2023-01-01').toISOString(),
  },
];

const foods = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442f',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    food_name: 'Pescado frito',
    img_url:
      'https://images.unsplash.com/photo-1613626630502-182579c0432c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: 'Pescado con guarnición',
    carbs: 10,
    proteins: 10,
    fats: 10,
    kilo_cals: 5000,
    created_at: new Date('2024-01-07').toISOString(),
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442e',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442b',
    food_name: 'Hamburguesa',
    img_url:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: 'Mega super hamburguesa',
    created_at: new Date('2024-01-08').toISOString(),
  },
];

const workouts = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6443f',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    duration: 60,
    title: 'Run 10km',
    content: '10km con elevación de 200m a ritmo 6:00 min por km.',
    img_url:
      'https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    created_at: new Date('2024-01-07').toISOString(),
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6443e',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442b',
    duration: 90,
    title: 'Gym workout',
    content: '30 pull-ups, 30 push-ups, 30 sit-ups',
    img_url:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    created_at: new Date('2024-01-08').toISOString(),
  },
];

const rests = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6449f',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    start_time: new Date('2024-01-07').toISOString(),
    end_time: new Date('2024-01-08').toISOString(),
    created_at: new Date('2024-01-08').toISOString(),
  },
];

const friends = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6499f',
    source_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    target_id: '410544b2-4001-4271-9855-fec4b6a6442b',
    status: 'accepted',
    created_at: new Date('2024-01-09').toISOString(),
  },
];

const foodLikes = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6999f',
    post_id: '410544b2-4001-4271-9855-fec4b6a6442f',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442b',
    created_at: new Date('2024-01-09').toISOString(),
  },
];

const workoutLikes = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6999e',
    post_id: '410544b2-4001-4271-9855-fec4b6a6443e',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    created_at: new Date('2024-01-09').toISOString(),
  },
];

const foodComments = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6999f',
    post_id: '410544b2-4001-4271-9855-fec4b6a6442f',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442b',
    content: 'Delicioso',
    created_at: new Date('2024-01-09').toISOString(),
  },
];

const workoutComments = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6999e',
    post_id: '410544b2-4001-4271-9855-fec4b6a6443e',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    content: 'Impresionante',
    created_at: new Date('2024-01-09').toISOString(),
  },
];

module.exports = {
  users,
  foods,
  workouts,
  rests,
  friends,
  foodLikes,
  workoutLikes,
  foodComments,
  workoutComments,
};
