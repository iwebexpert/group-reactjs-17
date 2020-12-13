import { nanoid } from "nanoid"
import { AvatarGenerator } from "random-avatar-generator"
const generator = new AvatarGenerator()

export const chats = [
    {
        id: nanoid(4),
        name: "Сушист",
        fire: true,
        avatar: generator.generateRandomAvatar(),
        messages: [{ name: "me", text: "first", id: nanoid(4) }],
    },
    {
        id: nanoid(4),
        name: "Визажист",
        fire: true,
        avatar: generator.generateRandomAvatar(),
        messages: [{ name: "me", text: "second", id: nanoid(4) }],
    },
    {
        id: nanoid(4),
        name: "Массажист",
        fire: true,
        avatar: generator.generateRandomAvatar(),
        messages: [{ name: "me", text: "third", id: nanoid(4) }],
    },
    {
        id: nanoid(4),
        name: "Хореограф",
        fire: true,
        avatar: generator.generateRandomAvatar(),
        messages: [{ name: "me", text: "one more", id: nanoid(4) }],
    },
]
