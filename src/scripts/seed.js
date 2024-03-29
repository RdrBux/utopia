const { db } = require('@vercel/postgres');
const {
  users,
  foods,
  workouts,
  rests,
  friends,
  foodLikes,
  workoutLikes,
  foodComments,
  workoutComments,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        img_url TEXT NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password TEXT NOT NULL,
        bio TEXT NOT NULL,
        date_of_birth TIMESTAMPTZ NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    console.log(`Created "users" table`);

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, firstname, lastname, img_url, email, password, bio, date_of_birth)
        VALUES (${user.id}, ${user.firstname}, ${user.lastname}, ${user.img_url}, ${user.email}, ${hashedPassword}, ${user.bio}, to_timestamp(${user.date_of_birth}))
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedFoodPosts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS post_food (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    food_name VARCHAR(255) NOT NULL,
    img_url TEXT NOT NULL,
    content TEXT NOT NULL,
    carbs SMALLINT,
    proteins SMALLINT,
    fats SMALLINT,
    kilo_cals SMALLINT,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

    console.log(`Created "post_food" table`);

    const insertedFoods = await Promise.all(
      foods.map(
        (food) => client.sql`
        INSERT INTO post_food (id, user_id, food_name, img_url, content, carbs, proteins, fats, kilo_cals)
        VALUES (${food.id}, ${food.user_id}, ${food.food_name}, ${food.img_url}, ${food.content}, ${food.carbs}, ${food.proteins}, ${food.fats}, ${food.kilo_cals})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedFoods.length} foods`);

    return {
      createTable,
      foods: insertedFoods,
    };
  } catch (error) {
    console.error('Error seeding foods:', error);
    throw error;
  }
}

async function seedWorkoutPosts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS post_workout (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    duration SMALLINT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    img_url TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

    console.log(`Created "post_workout" table`);

    const insertedWorkouts = await Promise.all(
      workouts.map(
        (workout) => client.sql`
        INSERT INTO post_workout (id, user_id, duration, title, content, img_url)
        VALUES (${workout.id}, ${workout.user_id}, ${workout.duration}, ${workout.title}, ${workout.content}, ${workout.img_url})
        ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedWorkouts.length} workouts`);

    return {
      createTable,
      workouts: insertedWorkouts,
    };
  } catch (error) {
    console.error('Error seeding workouts:', error);
    throw error;
  }
}

async function seedRestPosts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS post_rest (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

    console.log(`Created "post_rest" table`);

    const insertedRests = await Promise.all(
      rests.map(
        (rest) => client.sql`
        INSERT INTO post_rest (id, user_id, start_time, end_time)
        VALUES (${rest.id}, ${rest.user_id}, to_timestamp(${rest.start_time}), to_timestamp(${rest.end_time}))
        ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedRests.length} rests`);

    return {
      createTable,
      workouts: insertedRests,
    };
  } catch (error) {
    console.error('Error seeding rests:', error);
    throw error;
  }
}

async function seedFriends(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS users_friends (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    source_id UUID REFERENCES users(id) ON DELETE CASCADE,
    target_id UUID REFERENCES users(id) ON DELETE CASCADE,
    status VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

    console.log(`Created "users_friends" table`);

    const insertedFriends = await Promise.all(
      friends.map(
        (friend) => client.sql`
        INSERT INTO users_friends (id, source_id, target_id, status)
        VALUES (${friend.id}, ${friend.source_id}, ${friend.target_id}, ${friend.status})
        ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedFriends.length} rests`);

    return {
      createTable,
      workouts: insertedFriends,
    };
  } catch (error) {
    console.error('Error seeding friends:', error);
    throw error;
  }
}

async function seedFoodLikes(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS food_likes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    post_id UUID REFERENCES post_food(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

    console.log(`Created "food_likes" table`);

    const insertedFoodLikes = await Promise.all(
      foodLikes.map(
        (like) => client.sql`
        INSERT INTO food_likes (id, post_id, user_id)
        VALUES (${like.id}, ${like.post_id}, ${like.user_id})
        ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedFoodLikes.length} rests`);

    return {
      createTable,
      workouts: insertedFoodLikes,
    };
  } catch (error) {
    console.error('Error seeding food likes:', error);
    throw error;
  }
}

async function seedWorkoutLikes(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS workout_likes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    post_id UUID REFERENCES post_workout(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

    console.log(`Created "workout_likes" table`);

    const insertedWorkoutLikes = await Promise.all(
      workoutLikes.map(
        (like) => client.sql`
        INSERT INTO workout_likes (id, post_id, user_id)
        VALUES (${like.id}, ${like.post_id}, ${like.user_id})
        ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedWorkoutLikes.length} rests`);

    return {
      createTable,
      workouts: insertedWorkoutLikes,
    };
  } catch (error) {
    console.error('Error seeding workout likes:', error);
    throw error;
  }
}

async function seedFoodComments(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS food_comments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    post_id UUID REFERENCES post_food(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

    console.log(`Created "food_comments" table`);

    const insertedFoodComments = await Promise.all(
      foodComments.map(
        (comment) => client.sql`
        INSERT INTO food_comments (id, post_id, user_id, content)
        VALUES (${comment.id}, ${comment.post_id}, ${comment.user_id}, ${comment.content})
        ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedFoodComments.length} rests`);

    return {
      createTable,
      workouts: insertedFoodComments,
    };
  } catch (error) {
    console.error('Error seeding food comments:', error);
    throw error;
  }
}

async function seedWorkoutComments(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS workout_comments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    post_id UUID REFERENCES post_workout(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

    console.log(`Created "workout_comments" table`);

    const insertedWorkoutComments = await Promise.all(
      workoutComments.map(
        (comment) => client.sql`
        INSERT INTO workout_comments (id, post_id, user_id, content)
        VALUES (${comment.id}, ${comment.post_id}, ${comment.user_id}, ${comment.content})
        ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedWorkoutComments.length} rests`);

    return {
      createTable,
      workouts: insertedWorkoutComments,
    };
  } catch (error) {
    console.error('Error seeding workout comments:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedFoodPosts(client);
  await seedWorkoutPosts(client);
  await seedRestPosts(client);
  await seedFriends(client);
  await seedFoodLikes(client);
  await seedWorkoutLikes(client);
  await seedFoodComments(client);
  await seedWorkoutComments(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
