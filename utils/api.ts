import { GetServerSidePropsContext } from "next";
import { validateCookies } from "./helpers";
import axios from "axios";
import { User } from "./types";

export const production = false;
export const apiUrl = production
  ? "https://api.blaineccrp.com/v2"
  : "http://localhost:3001/v2";

export const getUser = async (context: GetServerSidePropsContext) => {
  const headers = validateCookies(context);
  if (!headers) return { redirect: `${apiUrl}/auth/discord` };

  try {
    const { data } = await axios.get<User>(`${apiUrl}/auth/status`, {
      headers,
    });

    return {
      user: data,
    };
  } catch (e) {
    return { redirect: `${apiUrl}/auth/discord` };
  }
};

export const getRoles = async (context: GetServerSidePropsContext) => {
  const headers = validateCookies(context);
  if (!headers) return { redirect: `${apiUrl}/auth/discord` };

  const { user } = await getUser(context);

  try {
    const { data } = await axios.get(
      `${apiUrl}/users/${user?.discordId}/roles`,
      { headers }
    );

    return {
      roles: data,
    };
  } catch (e) {
    return { redirect: `${apiUrl}/auth/discord` };
  }
};

export const getPerms = async (context: GetServerSidePropsContext) => {
  const headers = validateCookies(context);
  if (!headers) return { redirect: "/" };

  const { user } = await getUser(context);

  try {
    const { data } = await axios.get(
      `${apiUrl}/users/${user?.discordId}/perms`,
      { headers }
    );

    return {
      perms: data,
    };
  } catch (e) {
    return { redirect: "/" };
  }
};

export const getApps = async (context: GetServerSidePropsContext) => {
  const headers = validateCookies(context);
  if (!headers) return { redirect: "/" };

  try {
    const { data } = await axios.get(`${apiUrl}/applications`, { headers });

    return {
      apps: data,
    };
  } catch (e) {
    return { redirect: "/" };
  }
};

export const getDiscordMembers = async (context: GetServerSidePropsContext) => {
  const headers = validateCookies(context);
  if (!headers) return { redirect: "/" };

  try {
    const { data } = await axios.get(`${apiUrl}/applications/discord`, {
      headers,
    });

    return {
      members: data,
    };
  } catch (e) {
    return { redirect: "/" };
  }
};
