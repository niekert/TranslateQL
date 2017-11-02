export const isAuthenticated = state => !!state.data.auth.token;
export const currentUserId = state => state.data.auth.userId;
