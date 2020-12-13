import { nanoid } from "nanoid"
import { AvatarGenerator } from "random-avatar-generator"
const generator = new AvatarGenerator()

export const users = [
    { name: "Михаил", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Игорь", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Света", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Наташа", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Олег", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Антон", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Катя", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Маша", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Петя", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Равиль", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    {
        name: "Татьяна",
        avatar: generator.generateRandomAvatar(),
        id: nanoid(4),
    },
    { name: "Настя", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Ира", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Алла", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Анна", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
    { name: "Боря", avatar: generator.generateRandomAvatar(), id: nanoid(4) },
]
