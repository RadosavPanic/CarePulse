"use server";

import { users } from "../appwrite.config";
import { ID, Query } from "node-appwrite";

export const createUser = async (user: CreateUserParams) => {
  try {
    console.log(user);
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    console.log({ newuser });
  } catch (error: unknown) {
    if (isAppwriteError(error)) {
      if (error.code === 409) {
        const existingUser = await users.list([
          Query.equal("email", [user.email]),
        ]);

        return existingUser.users[0];
      }
      console.error("An error occurred while creating a new user:", error);
    }
  }
};

function isAppwriteError(error: unknown): error is { code: number } {
  return typeof error === "object" && error !== null && "code" in error;
}
