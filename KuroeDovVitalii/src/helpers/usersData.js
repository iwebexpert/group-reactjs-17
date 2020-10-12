import { nanoid } from 'nanoid'
import { AvatarGenerator } from 'random-avatar-generator'
const generator = new AvatarGenerator()

export const users = {
    1: { name: 'Михаил', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    2: { name: 'Игорь', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    3: { name: 'Света', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    4: { name: 'Наташа', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    5: { name: 'Олег', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    6: { name: 'Антон', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    7: { name: 'Катя', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    8: { name: 'Маша', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    9: { name: 'Петя', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    10: { name: 'Равиль', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    11: { name: 'Татьяна', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    12: { name: 'Настя', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    13: { name: 'Ира', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    14: { name: 'Алла', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    15: { name: 'Анна', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    16: { name: 'Боря', avatar: generator.generateRandomAvatar(), id: nanoid(4) },
}