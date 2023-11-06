// Mandatory import, do not remove
import "@grakkit/stdlib-paper";

import { Attribute } from "org.bukkit.attribute";
import { PlayerJoinEvent } from "org.bukkit.event.player";
import { listenEvent } from "./util";

listenEvent(PlayerJoinEvent, (event) => {
  const player = event.getPlayer();
  const location = player.getLocation();
  const world = location.getWorld().getName();
  const lines = [
    "-----------------------------------",
    `Name: ${player.getName()}`,
    `IP Address: ${player.getAddress().getHostName()}`,
    `Game Mode: ${player.getGameMode().toString()}`,
    `Location: {
        x: ${location.getX()},
        y: ${location.getY()},
        z: ${location.getZ()},
        world: ${world}
    }`,
    `Health: ${player.getHealth()}/${player.getAttribute(Attribute.GENERIC_MAX_HEALTH)?.getValue()}`,
    `Is Flying: ${player.isFlying() ? "Yes" : "No"}`,
    "-----------------------------------",
  ];
  lines.forEach((line) => console.log(line));
});
