
# Grakkit Boilerplate

This Grakkit Boilerplate is a robust foundation for rapidly developing Minecraft plugins using [Grakkit](https://github.com/grakkit/grakkit)'s versatile scripting capabilities. Crafted with simplicity and extensibility in mind, this boilerplate equips you with essential structures, examples, and event handling, allowing you to focus on building innovative features for your Minecraft server.

This project has been inspired and use few parts of this other [boilerplate](https://github.com/MercerK/grakkit-boilerplate) created by MercerK.


## Features
- **Hot Reloading**: Reload the script on the Minecraft server when a source file changed.
- **Easy Typing**: Ready to use typing from PaperMc and libraries.
- **Lightning-Fast Development**: Utilize the speed of Vite, ensuring script transpilation and providing, enabling you to iterate and test your plugins with unparalleled efficiency.
## Requirements
- Node 20 <
- Java 17 <
## Getting Started

1. Click the "Use this template" in the top right.
2. Retrieve the project locally with Git
3. Do this following things:
4. Download the [PaperMc](https://papermc.io/downloads/paper) version you wish to use.
5. Place the jar file into the `./server` and rename it to `server.jar`.
6. Download the latest version of [Grakkit](https://github.com/grakkit/grakkit/releases) and place it into the `./server/plugins` folder.
7. Run `npm install`
8. Run `npm run dev` to start the Minecraft and Vite servers.
9. Now you can edit the `./src/index.ts` file to start the development of your plugin!


## How to use a dependency

To use a dependency you must to place the jar file into the `./server/plugins` folder, after that you have two ways to use it:
- Use the default behavior of Grakkit and access to the class with `Java.type(net.my.awesome.Class)` function.
- Use dependency typings, a lot of typing are available on [this](https://github.com/Nolway/grakkit-types) repository, but if the wished dependency isn't available you can request it on the [issues](https://github.com/Nolway/grakkit-types/issues) of the typing repository.
## FAQ

#### Why you created another boilerplate ?

Because the previous boilerplate implement the auto-reload on the production bundle and I don't in love with Webpack for many reason due that i'm using Vite (also because it's faster than Webpack).

#### Where I can find or request typings ?

You can find a lot of typings [here](https://github.com/Nolway/grakkit-types), and I you to request a new typing you can do that [here](https://github.com/Nolway/grakkit-types/issues).

#### Can I use the types used in the previous boilerplate ?

Yes you can use both.
