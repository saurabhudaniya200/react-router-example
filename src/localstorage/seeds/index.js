import { ReviewStorage, UserStorage } from '../models';
import Faker from 'faker';

const SeedLoader = {
  load () {
    this.flush();
    this.loadData();
  },

  flush () {
    ReviewStorage.removeAll();
    UserStorage.removeAll();
  },

  loadData () {
    for (let i = 1; i <= 30; i++) {
      const user = UserStorage.save({ name: Faker.name.findName(), description: Faker.lorem.sentence() });

      for (let j = 1; j <= 3; j++) {
        ReviewStorage.save({ name: Faker.name.findName(), review: Faker.lorem.sentence(), userId: user.id });
      }
    }
  },
};

export default SeedLoader;
