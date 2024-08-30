const passLaravelSession = (session) => ({
  headers: {
    Cookie: `laravel_session=${session}`,
  },
});

export default passLaravelSession;
