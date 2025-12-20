import readUserAction from "./read.user.action";
import { UserType } from "./user.model";

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
  const users = await readUserAction();

  return users;
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers };
