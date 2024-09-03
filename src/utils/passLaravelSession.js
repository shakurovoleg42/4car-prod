const passLaravelSession = (session) => ({
  headers: {
    Cookie: `laravel_session=${session}`,
  },
});

export const passSession = (session) => ({
  headers: {
    Authorization: `Bearer ${session}`,
  },
});

export default passLaravelSession;
