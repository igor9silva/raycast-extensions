import { open } from "@raycast/api";

export default async function Command() {
  await open("screen-studio://open-settings");
  return null;
}
